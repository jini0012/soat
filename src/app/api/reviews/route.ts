// /src/app/api/reviews/route.ts

import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]/route";
import { adminDb } from "../firebaseAdmin";
import { FieldValue } from "firebase-admin/firestore";

// 리뷰 데이터 타입 정의
export interface ReviewData {
  id: string;
  performanceId: string;
  userId: string;
  username: string;
  ratings: number;
  date: string;
  content: string;
  likeCount: number;
  createdAt: any;
  updatedAt: any;
}

// 사용자 정보 가져오는 내부 함수
async function getUserData(userId: string, userType: string) {
  const collectionName = userType === "seller" ? "sellerUsers" : "buyerUsers";
  const userDoc = await adminDb.collection(collectionName).doc(userId).get();

  if (!userDoc.exists) {
    return null;
  }

  return userDoc.data();
}

// GET 함수 - 리뷰 목록 조회
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const performanceId = searchParams.get("performanceId");

    if (!performanceId) {
      return NextResponse.json(
        { error: "공연 ID가 필요합니다." },
        { status: 400 }
      );
    }

    // 현재 세션 가져오기
    const session = await getServerSession(authOptions);
    const userId = session?.user?.id;
    const userType = session?.user?.userType;

    // 리뷰 데이터 조회
    const reviewsSnapshot = await adminDb
      .collection("reviews")
      .where("performanceId", "==", performanceId)
      .get();

    // 리뷰 데이터 변환
    const reviews = reviewsSnapshot.docs.map((doc) => {
      const data = doc.data();

      // 로그인한 사용자가 작성한 리뷰인지 확인
      const isUserReview = userId === data.userId;

      return {
        id: doc.id,
        performanceId: data.performanceId,
        userId: data.userId,
        username: data.username,
        ratings: data.ratings,
        date: data.date,
        content: data.content,
        likeCount: data.likeCount || 0,
      };
    });

    return NextResponse.json({ reviews });
  } catch (error) {
    console.error("리뷰 목록 조회 오류:", error);
    return NextResponse.json(
      { error: "리뷰 목록을 가져오는 중 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}

// POST 함수 - 리뷰 등록
export async function POST(request: NextRequest) {
  try {
    // 현재 세션 확인 (로그인 상태 확인)
    const session = await getServerSession(authOptions);

    // 로그인되지 않은 경우
    if (!session || !session.user) {
      return NextResponse.json(
        { error: "리뷰를 작성하려면 로그인이 필요합니다." },
        { status: 401 }
      );
    }

    const userId = session.user.id;
    const userType = session.user.userType;

    // 판매자는 리뷰 작성 불가능 (선택적 - 정책에 따라 제거 가능)
    if (userType === "seller") {
      return NextResponse.json(
        { error: "판매자는 리뷰를 작성할 수 없습니다." },
        { status: 403 }
      );
    }

    // 요청 본문 파싱
    const body = await request.json();
    const { performanceId, ratings, content } = body;

    // 필수 필드 검증
    if (!performanceId || !ratings || !content) {
      return NextResponse.json(
        {
          error:
            "필수 정보가 누락되었습니다. (performanceId, ratings, content)",
        },
        { status: 400 }
      );
    }

    // 평점 범위 확인 (1-5)
    if (ratings < 1 || ratings > 5) {
      return NextResponse.json(
        { error: "평점은 1에서 5 사이의 값이어야 합니다." },
        { status: 400 }
      );
    }

    // 공연 정보 확인
    const performRef = adminDb.collection("performances").doc(performanceId);
    const performDoc = await performRef.get();

    if (!performDoc.exists) {
      return NextResponse.json(
        { error: "존재하지 않는 공연입니다." },
        { status: 404 }
      );
    }

    // 사용자 정보 조회
    const userData = await getUserData(userId, userType);

    if (!userData) {
      return NextResponse.json(
        { error: "사용자 정보를 찾을 수 없습니다." },
        { status: 404 }
      );
    }

    const username = userData?.username || "사용자";

    // 현재 시간 (KST 기준)
    const kstOffset = 9 * 60 * 60 * 1000;
    const now = new Date(Date.now() + kstOffset);
    const today = now.toISOString().split("T")[0]; // YYYY-MM-DD 형식

    // Firestore 타임스탬프
    const timestamp = FieldValue.serverTimestamp();

    // 리뷰 ID 생성
    const reviewId = `review-${Date.now()}-${userId.substring(0, 6)}`;

    // 리뷰 데이터 생성
    const reviewData: ReviewData = {
      id: reviewId,
      performanceId,
      userId,
      username,
      ratings,
      date: today,
      content,
      likeCount: 0,
      createdAt: timestamp,
      updatedAt: timestamp,
    };

    // Firestore에 저장
    await adminDb.collection("reviews").doc(reviewId).set(reviewData);

    // 공연 문서의 리뷰 통계 업데이트
    await adminDb.runTransaction(async (transaction) => {
      const performanceDoc = await transaction.get(performRef);

      if (performanceDoc.exists) {
        const performanceData = performanceDoc.data();
        const currentRatingSum = performanceData.ratingSum || 0;
        const currentRatingCount = performanceData.ratingCount || 0;

        const newRatingSum = currentRatingSum + ratings;
        const newRatingCount = currentRatingCount + 1;
        const newAverageRating = parseFloat(
          (newRatingSum / newRatingCount).toFixed(1)
        );

        transaction.update(performRef, {
          ratingSum: newRatingSum,
          ratingCount: newRatingCount,
          averageRating: newAverageRating,
          updatedAt: timestamp,
        });
      }
    });

    return NextResponse.json({
      success: true,
      message: "리뷰가 성공적으로 등록되었습니다.",
      review: {
        ...reviewData,
        createdAt: now.toISOString(),
        updatedAt: now.toISOString(),
      },
    });
  } catch (error) {
    console.error("리뷰 등록 오류:", error);
    return NextResponse.json(
      { error: "리뷰 등록 중 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}

// PUT 함수 - 리뷰 좋아요 기능
export async function PUT(request: NextRequest) {
  try {
    // 현재 세션 확인
    const session = await getServerSession(authOptions);

    // 로그인되지 않은 경우
    if (!session || !session.user) {
      return NextResponse.json(
        { error: "로그인이 필요합니다." },
        { status: 401 }
      );
    }

    const userId = session.user.id;

    // 요청 본문 파싱
    const body = await request.json();
    const { reviewId, action } = body; // action: 'like' 또는 'unlike'

    if (!reviewId || !action) {
      return NextResponse.json(
        { error: "필수 정보가 누락되었습니다. (reviewId, action)" },
        { status: 400 }
      );
    }

    // 리뷰 문서 확인
    const reviewRef = adminDb.collection("reviews").doc(reviewId);
    const reviewDoc = await reviewRef.get();

    if (!reviewDoc.exists) {
      return NextResponse.json(
        { error: "존재하지 않는 리뷰입니다." },
        { status: 404 }
      );
    }

    const reviewData = reviewDoc.data();
    const performanceId = reviewData.performanceId;

    // 좋아요 문서 ID 생성 (userId_reviewId 형식)
    const likeId = `${userId}_${reviewId}`;
    const likeRef = adminDb.collection("reviewLikes").doc(likeId);
    const likeDoc = await likeRef.get();

    // 타임스탬프
    const timestamp = FieldValue.serverTimestamp();

    // 좋아요 처리
    if (action === "like" && !likeDoc.exists) {
      // 좋아요 추가
      await likeRef.set({
        userId,
        reviewId,
        performanceId,
        createdAt: timestamp,
      });

      // 좋아요 수 증가
      await reviewRef.update({
        likeCount: FieldValue.increment(1),
        updatedAt: timestamp,
      });

      return NextResponse.json({ success: true, action: "like" });
    } else if (action === "unlike" && likeDoc.exists) {
      // 좋아요 삭제
      await likeRef.delete();

      // 좋아요 수 감소 (0 이하로 내려가지 않도록)
      await reviewRef.update({
        likeCount: FieldValue.increment(-1),
        updatedAt: timestamp,
      });

      return NextResponse.json({ success: true, action: "unlike" });
    }

    // 이미 처리된 상태거나 잘못된 액션
    return NextResponse.json({
      success: false,
      message: "잘못된 요청입니다.",
    });
  } catch (error) {
    console.error("리뷰 좋아요 처리 오류:", error);
    return NextResponse.json(
      { error: "좋아요 처리 중 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}

import BookHeader from "@/components/booking/BookHeader";
import BookMain from "@/components/booking/BookMain";

export default function ReservationPopup({
  params,
}: {
  params: { showId: string };
}) {
  const { showId } = params;

  // 테스트 용 코드
  let showName = showId === "test" ? "2024 주인님 단독 공연" : showId;

  return (
    <>
      <BookHeader showName={showName} />
      <BookMain showId={showId} />
    </>
  );
}

"use client";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "../controls/Button";

// 네이버 지도 타입 정의
declare global {
  interface Window {
    naver: any;
  }
}

interface NaverMapModalProps {
  isOpen: boolean;
  onClose: () => void;
  locationName: string;
  locationAddress: string;
}

const NaverMapModal = ({
  isOpen,
  onClose,
  locationName,
  locationAddress,
}: NaverMapModalProps) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const map = useRef<any>(null);
  const marker = useRef<any>(null);
  const infoWindow = useRef<any>(null);
  const [mapError, setMapError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const isInitialized = useRef<boolean>(false);

  // 네이버 지도 스크립트 로드
  useEffect(() => {
    if (!isOpen || !mapRef.current) return;

    // 네이버 지도 스크립트가 로드되었는지 확인
    if (typeof window.naver === "undefined") {
      // 스크립트가 이미 추가되었는지 확인
      const existingScript = document.querySelector(
        'script[src*="openapi.map.naver.com"]'
      );
      if (!existingScript) {
        // 네이버 지도 스크립트 동적 로드
        const script = document.createElement("script");
        // Geocoding API도 함께 로드
        script.src = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_CLIENT_ID}&submodules=geocoder`;
        script.async = true;

        script.onload = () => {
          console.log("네이버 지도 API 스크립트 로드 완료");
          // 스크립트 로드 후 더 긴 지연시간 적용
          setTimeout(checkGeocoderService, 500);
        };

        script.onerror = () => {
          console.error("네이버 지도 API 로드 실패");
          setMapError("지도 API를 불러오는데 실패했습니다.");
        };

        document.head.appendChild(script);
      } else {
        // 스크립트는 이미 추가되었지만 아직 로드 중일 수 있음
        setTimeout(checkGeocoderService, 500);
      }
    } else {
      // 이미 로드된 경우 초기화
      if (!isInitialized.current) {
        initializeMap();
      }
    }

    // 컴포넌트 언마운트 시 또는 모달이 닫힐 때 정리
    return () => {
      if (!isOpen) {
        cleanupMapInstance();
      }
    };
  }, [isOpen, locationAddress]);

  // 지도 인스턴스 정리 함수
  const cleanupMapInstance = () => {
    if (map.current) {
      // 마커 제거
      if (marker.current) {
        marker.current.setMap(null);
        marker.current = null;
      }

      // 정보창 닫기
      if (infoWindow.current) {
        infoWindow.current.close();
        infoWindow.current = null;
      }

      // 지도 인스턴스 제거 (DOM에서 제거)
      if (mapRef.current && mapRef.current.innerHTML) {
        mapRef.current.innerHTML = "";
      }

      map.current = null;
      isInitialized.current = false;
      console.log("지도 인스턴스 정리 완료");
    }
  };

  // Geocoder 서비스 로드 확인
  const checkGeocoderService = () => {
    if (window.naver && window.naver.maps && window.naver.maps.Service) {
      console.log("Geocoder 서비스 로드됨");
      if (!isInitialized.current) {
        initializeMap();
      }
    } else {
      console.log("Geocoder 서비스 로드 중...");
      setTimeout(checkGeocoderService, 300);
    }
  };

  // 지도 초기화 함수
  const initializeMap = () => {
    if (!mapRef.current || !window.naver) {
      console.error("맵 참조 또는 네이버 API가 없습니다.");
      return;
    }

    console.log("지도 초기화 시작");

    // 이미 초기화된 지도가 있으면 정리
    cleanupMapInstance();

    try {
      // 맵 컨테이너 초기화
      if (mapRef.current.innerHTML !== "") {
        mapRef.current.innerHTML = "";
      }

      // 기본 지도 생성 (초기 중심 좌표는 서울시청)
      const defaultCenter = new window.naver.maps.LatLng(
        37.5666805,
        126.9784147
      );

      // 지도 옵션 설정
      const mapOptions = {
        center: defaultCenter,
        zoom: 17,
        zoomControl: true,
        zoomControlOptions: {
          position: window.naver.maps.Position.TOP_RIGHT,
        },
      };

      // 지도 생성
      map.current = new window.naver.maps.Map(mapRef.current, mapOptions);

      // 마커 생성 (초기에는 보이지 않음)
      marker.current = new window.naver.maps.Marker({
        position: defaultCenter,
        map: map.current,
        visible: false,
        icon: {
          content: `
            <div style="
              width: 24px; 
              height: 24px; 
              background-color: #ff5722; 
              border: 3px solid white;
              border-radius: 50%; 
              box-shadow: 0 2px 6px rgba(0,0,0,0.3);
              transform: translate(-50%, -50%);
            "></div>
          `,
          anchor: new window.naver.maps.Point(12, 12),
        },
      });

      // 정보창 생성
      infoWindow.current = new window.naver.maps.InfoWindow({
        content: "",
        maxWidth: 300,
        backgroundColor: "#fff",
        borderColor: "#888",
        borderWidth: 2,
        anchorSize: new window.naver.maps.Size(10, 10),
        anchorSkew: true,
        anchorColor: "#fff",
        pixelOffset: new window.naver.maps.Point(10, -10),
      });

      console.log("지도, 마커, 정보창 생성 완료");
      isInitialized.current = true;

      // 주소로 검색
      if (locationAddress && locationAddress.trim() !== "") {
        console.log("주소 검색 시작:", locationAddress);
        searchAddressToCoordinate(locationAddress);
      } else {
        console.error("주소가 비어있습니다.");
        setMapError("검색할 주소가 비어있습니다.");
      }
    } catch (error) {
      console.error("지도 초기화 중 오류 발생:", error);
      setMapError("지도를 초기화하는 중 오류가 발생했습니다.");
      isInitialized.current = false;
    }
  };

  // 주소로 좌표 검색
  const searchAddressToCoordinate = (address: string) => {
    if (!window.naver || !window.naver.maps || !window.naver.maps.Service) {
      console.error("네이버 지도 API가 로드되지 않았습니다.");
      setMapError("지도 API가 준비되지 않았습니다.");
      return;
    }

    console.log("Geocode 서비스 호출:", address);

    // 직접 geocode 서비스 호출
    window.naver.maps.Service.geocode(
      {
        query: address,
      },
      (status: any, response: any) => {
        console.log("Geocode 응답 상태:", status);
        console.log("Geocode 응답 데이터:", response);

        if (status !== window.naver.maps.Service.Status.OK) {
          console.error("주소 검색 상태 오류:", status);
          setMapError("주소를 검색하는 중 오류가 발생했습니다.");
          return;
        }

        if (response.v2.meta.totalCount === 0) {
          console.error("검색 결과가 없습니다.");
          setMapError("해당 주소를 찾을 수 없습니다.");

          // 정보창에 오류 메시지 표시
          const errorHTML = `
            <div style="padding: 12px; text-align: center;">
              <p style="color: red;">주소를 찾을 수 없습니다.</p>
              <p>다른 주소로 시도해보세요.</p>
            </div>
          `;
          infoWindow.current.setContent(errorHTML);
          infoWindow.current.open(map.current, marker.current);
          return;
        }

        // 검색 결과가 있는 경우
        setMapError(null);
        const item = response.v2.addresses[0];
        const point = new window.naver.maps.LatLng(item.y, item.x);

        // 지도 중심 변경 및 마커 표시
        map.current.setCenter(point);
        map.current.setZoom(17); // 확대 수준 설정

        // 마커 위치 설정 및 표시
        marker.current.setPosition(point);
        marker.current.setVisible(true);

        // 애니메이션 효과 추가 - 부드럽게 중심 이동
        map.current.panTo(point, { duration: 300 });

        // 정보창 내용 설정 및 표시
        const contentHTML = `
        <div style="
          padding: 12px; 
          min-width: 220px; 
          text-align: center; 
          background-color: white; 
          border-radius: 8px; 
          box-shadow: 0 2px 6px rgba(0,0,0,0.2);
        ">
          <h4 style="
            margin: 0 0 6px 0;
            font-size: 16px;
            font-weight: bold;
            color: #333;
          ">${locationName}</h4>
          <p style="
            margin: 0;
            font-size: 13px;
            color: #666;
          ">${item.roadAddress || item.jibunAddress}</p>
        </div>
      `;

        infoWindow.current.setContent(contentHTML);
        infoWindow.current.open(map.current, marker.current);

        setSearchQuery(`https://map.naver.com/p/search/${locationAddress}`);
      }
    );
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] flex flex-col">
        <div className="p-4 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-bold">{locationName}</h3>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
          <p className="text-gray-600 mt-1">{locationAddress}</p>
          {mapError && <p className="text-red-500 mt-1">{mapError}</p>}
        </div>

        {/* 지도가 표시될 div */}
        <div ref={mapRef} className="w-full h-[400px]"></div>

        <div className="p-4 flex justify-end items-center border-t border-gray-200">
          <Button
            className="px-6 py-2 mr-2"
            highlight={false}
            href={searchQuery}
          >
            네이버 지도에서 보기
          </Button>
          <Button highlight className="px-6 py-2" onClick={onClose}>
            닫기
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NaverMapModal;

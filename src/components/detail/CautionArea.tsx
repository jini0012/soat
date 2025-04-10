import React from "react";

export default function CautionArea() {
  return (
    <div className="space-y-8 mb-[50px]">
      <section>
        <h3 className="text-xl font-bold mb-4 text-flesh-500">
          티켓 수령 안내
        </h3>
        <div className="space-y-6">
          <div>
            <h4 className="font-bold mb-2">예약 번호 입장</h4>
            <p className="text-neutral-600">
              공연 당일 현장 교부처에서 예약번호 및 본인 확인 후 티켓을 수령하실
              수 있습니다. 상단 예매확인/취소 메뉴에서 예매내역을 프린트하여
              가시면 편리합니다.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-2">티켓배송</h4>
            <ul className="space-y-2 text-neutral-600">
              <li>
                예매완료(결제익일) 기준 4~5일 이내에 배송됩니다. (주말, 공휴일을
                제외한 영업일 기준)
              </li>
              <li>
                배송 중 전달 불가사항이 발생할 시에는 반송되며, 본인 수령 불가
                시 경우에 따라 대리 수령도 가능합니다.
              </li>
              <li>
                공연 3일 전까지 티켓을 배송받지 못하신 경우
                고객센터(1544-1555)로 연락 주시기 바랍니다.
              </li>
              <li>
                반송이 확인되지 않은 티켓은 현장에서도 수령하실 수 없으며, 공연
                관람 및 환불이 불가합니다.
              </li>
              <li>
                티켓 배송 (배송상태 : 배송 준비중 이후) 후에는 주소 변경이
                불가합니다.
              </li>
              <li>
                부득이하게 주소 변경이 필요하신 경우 각 배송사에 수취 거절 요청
                후, 고객센터(1544-1555)로 재배송 신청할 수 있습니다. (배송비
                3,200원 추가 부과)
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-xl font-bold mb-4 text-flesh-500">
          예매 취소 시 유의사항
        </h3>
        <ul className="space-y-2 text-neutral-600">
          <li>① 예매 후 7일까지 취소 시에는 취소수수료가 없습니다.</li>
          <li>② 관람일 기준은 아래와 같이 취소수수료가 적용됩니다.</li>
          <li className="pl-4">
            ~관람일 10일전까지 : 뮤지컬/콘서트/클래식 장당 4,000원, 연극/전시 등
            장당 2,000원 (단, 최대 티켓금액의 10% 한도)
          </li>
          <li className="pl-4">
            관람일 9일전~관람일 7일전까지 : 티켓금액의 10%
          </li>
          <li className="pl-4">
            관람일 6일전~관람일 3일전까지 : 티켓금액의 20%
          </li>
          <li className="pl-4">
            관람일 2일전~관람일 1일전까지 : 티켓금액의 30%
          </li>
          <li>- ①번과 ②번 모두 해당되는 경우, ②번 기준이 우선 적용됩니다.</li>
          <li>
            - ②번의 경우에도 예매 당일 밤 12시 이전 취소 시에는 취소수수료가
            없습니다. (취소기간 내에 한함)
          </li>
          <li>
            취소 시 예매수수료는 예매 당일 밤 12시 이전까지 환불되며, 그 이후
            기간에는 환불되지 않습니다.
          </li>
          <li>
            웹 취소가능시간 이후에는 취소가 불가합니다. 단, 관람일 당일 취소가능
            한 상품의 경우 관람일 당일 취소 시에는 티켓금액의 90%가 과금됩니다.
          </li>
          <li>
            상품의 특성에 따라서, 취소수수료 정책이 달라질 수 있습니다.(각 상품
            예매 시 취소수수료 확인)
          </li>
          <li>배송 및 반송처리 된 티켓의 배송료는 환불되지 않습니다.</li>
          <li>
            금주 주말 (토/일)공연 취소를 원할 경우 내사수령 바랍니다. 우편으로
            보낼 시 우체국이 토요일 근무를 안하는관계로 수취인 수령이 불가능하여
            취소처리가 되지 않을 수 있습니다.
          </li>
          <li>
            취소는 관람일 하루 전(평일/주말/공휴일 오후 5시, 토요일 오전 11시
            이전)까지 직접 취소가 가능합니다.
          </li>
          <li>
            배송이 시작된 티켓의 경우 티켓이 고객센터로 공연 전일까지 반송되어야
            취소가능하며, 취소수수료는 도착일자 기준으로 부과됩니다.
          </li>
          <li className="font-medium">
            (※ 단, 배송료는 환불되지 않으며 일괄배송 상품의 경우 취소에 대한
            자세한 문의는 고객센터로 문의해주시기 바랍니다.)
          </li>
          <li>
            (공연 전일이 휴일인 경우, 휴일 전날까지) 반송이 확인되지 않은 티켓은
            현장에서도 수령하실 수 없으며, 공연 관람 및 환불이 불가합니다.
          </li>
        </ul>
      </section>
    </div>
  );
}

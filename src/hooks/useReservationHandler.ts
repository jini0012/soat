// import { useRouter } from "next/navigation";
// export default function useReservationHandler(showId: string) {
//   const router = useRouter();
//   return () => router.push(`/reservation/${showId}`);
// }

export default function useReservationHandler(showId: string) {
  return () => {
    const popup = window.open(
      `/reservation/${showId}`,
      "reservationPopup",
      `width=600,height=600,left=300,top=300`
    );

    if (popup) {
      popup.focus();
    } else {
      alert("팝업이 차단되었습니다. 팝업차단을 해제해주세요.");
    }
  };
}

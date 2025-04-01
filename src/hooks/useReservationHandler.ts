import { useRouter } from "next/navigation";
export default function useReservationHandler(showId: string) {
  const router = useRouter();

  return () => {

    const popup = window.open(
      `/reservation/${showId}`,
      "reservationPopup",
      `width=600,height=600,left=300,top=300`
    );

    if (popup) {
      popup.focus();
    } else {
      router.push(`/reservation/${showId}`);
    }
  };
}

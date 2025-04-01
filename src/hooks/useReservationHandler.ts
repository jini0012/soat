import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
export default function useReservationHandler(showId: string) {
  const router = useRouter();
  const { status } = useSession();

  return () => {
    if (status !== "authenticated") {
      alert("로그인이 필요합니다.");
      return;
    }

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

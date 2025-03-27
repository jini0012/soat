import { useRouter } from "next/navigation";
export default function useReservationHandler(showId: string) {
  const router = useRouter();
  return () => router.push(`/reservation/${showId}`);
}

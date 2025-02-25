import ListTitle from "@/components/admin/ListTitle";
import BannerDragAndDrop from "@/components/admin/BannerDragAndDrop";

export default function BannerDisplayOrder() {
  return (
    <>
      <ListTitle>배너 표시 순서</ListTitle>
      <p className="text-xs text-flesh-500">*활성화된 배너</p>
      <div className="w-full h-[125px] bg-gray-100 border border-gray-300 mt-3 ">
        <BannerDragAndDrop />
      </div>
    </>
  );
}

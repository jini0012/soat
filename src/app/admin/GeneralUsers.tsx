import AdminHeader from "../../components/admin/AdminHeader";

export default function GeneralUsers() {
  return (
    <>
      <AdminHeader>회원관리</AdminHeader>
      <main className="px-[6%]">
        <p className="mt-[14px] text-gray-500"> 일반회원 조회 및 상태 관리</p>
        <div className="mt-[20px] mb-4 flex justify-between items-center">
          <h2 className="font-semibold text-[18px]">일반회원 목록</h2>
          <form action="">
            <label htmlFor="" className="sr-only">
              일반회원 조회하기
            </label>
            <input
              type="text"
              className="w-[100px] h-[22px] border border-gray-500 text-[12px] mr-1"
            />
            <button
              type="submit"
              className="w-[40px] h-[22px] bg-flesh-500 text-white text-[12px]"
            >
              조회
            </button>
          </form>
        </div>
        <table>
          <thead>
            <tr className="text-[13px]">
              <th>ID</th>
              <th>이름</th>
              <th>가입날짜</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-[11px]">
              <td>dnjs9199@naver.com</td>
              <td>김예원</td>
              <td>2022.10.30</td>
            </tr>
            <tr className="text-[11px]">
              <td>asdfjkd@naver.com</td>
              <td>최예린</td>
              <td>2025.01.20</td>
            </tr>
          </tbody>
        </table>
      </main>
    </>
  );
}

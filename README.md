# 프로젝트 명

SO@

## 배포 링크

https://soat-delta.vercel.app/

- 테스트 계정 2개

```
# 예매 회원
id : test@email.com
pw : test1234!

# 공연 관리자 회원
id : test2@email.com
pw : test1234!

# admin 회원


```

## 프로젝트 소개

### 프로젝트 목표

현재 많은 소극장 및 소공연에서는 예매 절차를 Google Forms와 같은 간단한 도구를 통해 진행하고 있습니다.
이는 운영자와 관람객 모두에게 번거로움과 예약 관리의 비효율성을 초래합니다.

본 프로젝트는 이러한 불편함을 해소하고자, 소극장 및 소공연을 위한 전용 예매 플랫폼을 기획하였습니다.
보다 직관적이고 효율적인 예매 환경을 제공함으로써, 공연 관리자는 손쉽게 예약을 관리하고 예매 회원은 간편하게 티켓을 예매할 수 있도록 돕는 것을 목표로 합니다.

### 프로젝트 기능

- 로그인(로그아웃) / 회원가입(탈퇴) 기능
- 검색 기능 (공연 검색, 카테고리 검색)
- 예매 회원
  - 공연 예매 / 조회 / 취소 기능
    - 예매 QR 티켓 확인
  - 관람한 공연 한줄평 작성 / 수정 / 삭제 기능
  - 마이페이지 회원 조회/수정 기능
- 공연 관리자 회원
  - 공연 등록 / 조회 / 종료 기능
    - 등록된 공연 조회
    - 공연별 예약 현황 관리 / 조회
  - 예매 QR 티켓 검증 기능
  - 관리자 페이지 회원 수정 기능
- admin 회원 (UI 구현 완료)
  - 회원 조회 및 상태 관리 (예매 회원 / 공연 관리자 회원 / 관리자 )
    - 신규 소극장 관리자 승인
  - 공연 조회 및 상태 관리
  - 한줄평 조회 및 상태 관리
  - 배너 관리
  - 이용약관 / 개인정보 처리방침 관리
  - 서비스 점검 모드 설정

## 팀원 소개

|                                                          [팀장] 김지훈                                                           |                                                                        [FE] 김예원                                                                        |                                                                        [FE] 윤시운                                                                        |                                                                        [FE] 이휘경                                                                        |                                                           [FE] 하진희                                                            |
| :------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------: |
| <img  src = "https://github.com/user-attachments/assets/4cd763d9-43c9-46e5-8f0d-c30a02f53c79"  width="120px"  height="120px"  /> | <img  src = "https://github.com/user-attachments/assets/4cc14edb-eef2-4338-9bf3-e65db48d70f0"  width="120px"  height="120px" style="border-radius:50%" /> | <img  src = "https://github.com/user-attachments/assets/1c1301e0-173a-43ba-8902-4fd278155485"  width="120px"  height="120px" style="border-radius:50%" /> | <img  src = "https://github.com/user-attachments/assets/46b6a588-e926-4498-92b9-94d86916f856"  width="120px"  height="120px" style="border-radius:50%" /> | <img  src = "https://github.com/user-attachments/assets/8cacdbbb-aee4-43cf-9c3c-cb905e557f33"  width="120px"  height="120px"  /> |
|                                              [김지훈](https://github.com/jihun-io)                                               |                                                           [김에원](https://github.com/yewonni)                                                            |                                                          [윤시운](https://github.com/siwoon1602)                                                          |                                                         [이휘경](https://github.com/LeeHwiGyoung)                                                         |                                              [하진희](https://github.com/jini0012)                                               |

## 목차

- [개발환경](#developmentEnviroment)
- [프로젝트 기간](#period)
- [프로젝트 폴더 구조](#directory)
- [UI](#ui)
- [기능](#function)
- [트러블 슈팅](#troubleShooting)

## <a name="developmentEnvironment"></a> 개발 환경

### 사용기술

#### 프레임 워크

![next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=Nextdotjs&logoColor=white)

#### 라이브러리

![리액트](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black) ![Firebase](https://img.shields.io/badge/Firebase-DD2C00?style=for-the-badge&logo=Firebase&logoColor=white) ![Redux](https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=Redux&logoColor=white) ![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=Axios&logoColor=white)
![Zod](https://img.shields.io/badge/Zod-3E67B1?style=for-the-badge&logo=Zod&logoColor=white)
![Algolia](https://img.shields.io/badge/Algolia-003DFF?style=for-the-badge&logo=Algolia&logoColor=white)

#### 스타일 라이브러리

![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-grey?style=for-the-badge&logo=tailwind-css&logoColor=38B2AC)![StyledComponents](https://img.shields.io/badge/Styled_Components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)![shadcn/ui](https://img.shields.io/badge/shadcn/ui-000000?style=for-the-badge&logo=shadcnui&logoColor=white)![Lucide](https://img.shields.io/badge/Lucide-F56565?style=for-the-badge&logo=Lucide&logoColor=white)

#### devOps

![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=Vercel&logoColor=white)

### 협업 환경

![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white)
![Jira](https://img.shields.io/badge/Jira-0052CC?style=for-the-badge&logo=Jira&logoColor=white)
![Confluence](https://img.shields.io/badge/Confluence-172B4D?style=for-the-badge&logo=Confluence&logoColor=white)
![Slack](https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=Slack&logoColor=white)
![Discord](https://img.shields.io/badge/Discord-5865F2?style=for-the-badge&logo=Discord&logoColor=white)

## <a name="period"></a>프로젝트 기간

#### 1차 : 2025.02.05 ~ 2025.04.30

#### 2차 (admin 개발) : 2025.05.07 ~ 진행 예정

## <a name="directory"></a>프로젝트 폴더 구조

<details>
<summary>프로젝트 폴더 구조</summary>

```
📦src
 ┣ 📂app
 ┃ ┣ 📂account
 ┃ ┃ ┣ 📂edit
 ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┣ 📂mybook
 ┃ ┃ ┃ ┣ 📂[bookId]
 ┃ ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┗ 📜page.tsx
 ┃ ┣ 📂admin
 ┃ ┃ ┣ 📂(routes)
 ┃ ┃ ┃ ┣ 📂banner-list
 ┃ ┃ ┃ ┃ ┣ 📜BannerDisplayOrder.tsx
 ┃ ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┃ ┣ 📂maintenance-mode
 ┃ ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┃ ┣ 📂performance-list
 ┃ ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┃ ┣ 📂review-list
 ┃ ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┃ ┣ 📂site-admin-list
 ┃ ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┃ ┣ 📂terms-privacy-settings
 ┃ ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┃ ┣ 📂theater-admin-approval
 ┃ ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┃ ┗ 📂theater-admin-users
 ┃ ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┣ 📜GeneralUsers.tsx
 ┃ ┃ ┗ 📜page.tsx
 ┃ ┣ 📂api
 ┃ ┃ ┣ 📂account
 ┃ ┃ ┃ ┣ 📂book
 ┃ ┃ ┃ ┃ ┣ 📂[bookId]
 ┃ ┃ ┃ ┃ ┃ ┗ 📜route.ts
 ┃ ┃ ┃ ┃ ┗ 📜route.ts
 ┃ ┃ ┃ ┣ 📂delete
 ┃ ┃ ┃ ┃ ┗ 📜route.ts
 ┃ ┃ ┃ ┣ 📂me
 ┃ ┃ ┃ ┃ ┗ 📜route.ts
 ┃ ┃ ┃ ┗ 📂password
 ┃ ┃ ┃ ┃ ┗ 📜route.ts
 ┃ ┃ ┣ 📂admin
 ┃ ┃ ┃ ┣ 📂account
 ┃ ┃ ┃ ┃ ┗ 📜route.ts
 ┃ ┃ ┃ ┣ 📂theater
 ┃ ┃ ┃ ┃ ┗ 📂approval
 ┃ ┃ ┃ ┃ ┃ ┣ 📂decrypt
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜route.ts
 ┃ ┃ ┃ ┃ ┃ ┣ 📂[accountId]
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜route.ts
 ┃ ┃ ┃ ┃ ┃ ┗ 📜route.ts
 ┃ ┃ ┃ ┗ 📂users
 ┃ ┃ ┃ ┃ ┗ 📜route.ts
 ┃ ┃ ┣ 📂auth
 ┃ ┃ ┃ ┣ 📂email-verification
 ┃ ┃ ┃ ┃ ┣ 📂verify
 ┃ ┃ ┃ ┃ ┃ ┗ 📜route.ts
 ┃ ┃ ┃ ┃ ┗ 📜route.ts
 ┃ ┃ ┃ ┣ 📂signup
 ┃ ┃ ┃ ┃ ┗ 📜route.ts
 ┃ ┃ ┃ ┗ 📂[...nextauth]
 ┃ ┃ ┃ ┃ ┗ 📜route.ts
 ┃ ┃ ┣ 📂enrollment
 ┃ ┃ ┃ ┗ 📜route.ts
 ┃ ┃ ┣ 📂manager
 ┃ ┃ ┃ ┣ 📂edit
 ┃ ┃ ┃ ┃ ┗ 📜route.ts
 ┃ ┃ ┃ ┣ 📂performance
 ┃ ┃ ┃ ┃ ┣ 📂[performId]
 ┃ ┃ ┃ ┃ ┃ ┣ 📂delete
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜route.ts
 ┃ ┃ ┃ ┃ ┃ ┗ 📂end
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜route.ts
 ┃ ┃ ┃ ┃ ┗ 📜route.ts
 ┃ ┃ ┃ ┗ 📂verify-ticket
 ┃ ┃ ┃ ┃ ┗ 📂[reservationId]
 ┃ ┃ ┃ ┃ ┃ ┗ 📜route.ts
 ┃ ┃ ┣ 📂performance
 ┃ ┃ ┃ ┣ 📂search
 ┃ ┃ ┃ ┃ ┗ 📜route.ts
 ┃ ┃ ┃ ┣ 📂[performId]
 ┃ ┃ ┃ ┃ ┗ 📜route.ts
 ┃ ┃ ┃ ┗ 📜route.ts
 ┃ ┃ ┣ 📂reservation
 ┃ ┃ ┃ ┣ 📂book
 ┃ ┃ ┃ ┃ ┣ 📂[reservationId]
 ┃ ┃ ┃ ┃ ┃ ┗ 📜route.ts
 ┃ ┃ ┃ ┃ ┗ 📜route.ts
 ┃ ┃ ┃ ┗ 📂update-seat
 ┃ ┃ ┃ ┃ ┗ 📜route.ts
 ┃ ┃ ┣ 📂reviews
 ┃ ┃ ┃ ┗ 📜route.ts
 ┃ ┃ ┗ 📜firebaseAdmin.ts
 ┃ ┣ 📂detail
 ┃ ┃ ┗ 📂[performId]
 ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┣ 📂enrollment
 ┃ ┃ ┣ 📂edit
 ┃ ┃ ┃ ┗ 📂[performId]
 ┃ ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┗ 📜page.tsx
 ┃ ┣ 📂fonts
 ┃ ┃ ┣ 📜GeistMonoVF.woff
 ┃ ┃ ┣ 📜GeistVF.woff
 ┃ ┃ ┗ 📜PretendardVariable.woff2
 ┃ ┣ 📂join
 ┃ ┃ ┣ 📜JoinForm.tsx
 ┃ ┃ ┣ 📜JoinGreeting.tsx
 ┃ ┃ ┗ 📜page.tsx
 ┃ ┣ 📂login
 ┃ ┃ ┣ 📜LoginContent.tsx
 ┃ ┃ ┗ 📜page.tsx
 ┃ ┣ 📂logout
 ┃ ┃ ┗ 📜page.tsx
 ┃ ┣ 📂manager
 ┃ ┃ ┣ 📂edit
 ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┣ 📂performance
 ┃ ┃ ┃ ┣ 📂[performId]
 ┃ ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┣ 📂ticket
 ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┗ 📜page.tsx
 ┃ ┣ 📂performances
 ┃ ┃ ┣ 📂booking
 ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┗ 📂upcoming
 ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┣ 📂reservation
 ┃ ┃ ┗ 📂[showId]
 ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┣ 📂search
 ┃ ┃ ┗ 📜page.tsx
 ┃ ┣ 📂_demo
 ┃ ┃ ┣ 📂admin
 ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┣ 📂designs
 ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┣ 📂detail
 ┃ ┃ ┃ ┗ 📂[performId]
 ┃ ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┣ 📂map
 ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┣ 📂onsnapshottest
 ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┣ 📂seats
 ┃ ┃ ┃ ┣ 📂generator
 ┃ ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┃ ┗ 📂selector
 ┃ ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┣ 📂session
 ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┗ 📂ticket
 ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┣ 📜favicon.ico
 ┃ ┣ 📜globals.css
 ┃ ┣ 📜layout.tsx
 ┃ ┣ 📜not-found.tsx
 ┃ ┗ 📜page.tsx
 ┣ 📂auth
 ┃ ┣ 📜authOptions.ts
 ┃ ┗ 📜Provider.tsx
 ┣ 📂components
 ┃ ┣ 📂account
 ┃ ┃ ┣ 📜MyReservation.tsx
 ┃ ┃ ┣ 📜ReservationDetail.tsx
 ┃ ┃ ┣ 📜ReservationList.tsx
 ┃ ┃ ┣ 📜ReservationListData.tsx
 ┃ ┃ ┣ 📜UserInfo.tsx
 ┃ ┃ ┣ 📜UserInfoItem.tsx
 ┃ ┃ ┗ 📜UserInfoUpdate.tsx
 ┃ ┣ 📂admin
 ┃ ┃ ┣ 📜 QueryButton.tsx
 ┃ ┃ ┣ 📜AdminHeader.tsx
 ┃ ┃ ┣ 📜AdminMain.tsx
 ┃ ┃ ┣ 📜AdminMenu.tsx
 ┃ ┃ ┣ 📜AdminMenuItem.tsx
 ┃ ┃ ┣ 📜AdminSearchInput.tsx
 ┃ ┃ ┣ 📜BannerDragAndDrop.tsx
 ┃ ┃ ┣ 📜BannerListTable.tsx
 ┃ ┃ ┣ 📜BannerModify.tsx
 ┃ ┃ ┣ 📜BannerRegister.tsx
 ┃ ┃ ┣ 📜GeneralUserForm.tsx
 ┃ ┃ ┣ 📜GeneralUsersTable.tsx
 ┃ ┃ ┣ 📜Hamburger.tsx
 ┃ ┃ ┣ 📜JoinTypeModal.tsx
 ┃ ┃ ┣ 📜ListTitle.tsx
 ┃ ┃ ┣ 📜NewTheaterAdminForm.tsx
 ┃ ┃ ┣ 📜PerformanceForm.tsx
 ┃ ┃ ┣ 📜PerformanceTable.tsx
 ┃ ┃ ┣ 📜PrivacyPage.tsx
 ┃ ┃ ┣ 📜ReviewForm.tsx
 ┃ ┃ ┣ 📜ReviewTable.tsx
 ┃ ┃ ┣ 📜SiteAdminModify.tsx
 ┃ ┃ ┣ 📜SiteAdminRegister.tsx
 ┃ ┃ ┣ 📜SiteAdminTable.tsx
 ┃ ┃ ┣ 📜SubTabDescription.tsx
 ┃ ┃ ┣ 📜TableHeader.tsx
 ┃ ┃ ┣ 📜TableRow.tsx
 ┃ ┃ ┣ 📜TermsPage.tsx
 ┃ ┃ ┣ 📜TheaterAdminApprovalTable.tsx
 ┃ ┃ ┣ 📜TheaterAdminUserForm.tsx
 ┃ ┃ ┗ 📜TheaterAdminUsersTable.tsx
 ┃ ┣ 📂booking
 ┃ ┃ ┣ 📜BookComplete.tsx
 ┃ ┃ ┣ 📜BookedSeatInfo.tsx
 ┃ ┃ ┣ 📜BookHeader.tsx
 ┃ ┃ ┣ 📜BookingErrorInfo.tsx
 ┃ ┃ ┣ 📜BookMain.tsx
 ┃ ┃ ┣ 📜BookSection.tsx
 ┃ ┃ ┣ 📜ButtonRow.tsx
 ┃ ┃ ┣ 📜Captcha.tsx
 ┃ ┃ ┣ 📜NonBookedSeatInfo.tsx
 ┃ ┃ ┣ 📜PurchaseMethod.tsx
 ┃ ┃ ┣ 📜PurchaserInfo.tsx
 ┃ ┃ ┣ 📜SeatSelection.tsx
 ┃ ┃ ┗ 📜TossQRCode.tsx
 ┃ ┣ 📂controls
 ┃ ┃ ┣ 📜Button.tsx
 ┃ ┃ ┣ 📜CloseButton.tsx
 ┃ ┃ ┣ 📜Inputs.tsx
 ┃ ┃ ┣ 📜KakaoAddressSearch.tsx
 ┃ ┃ ┣ 📜Select.tsx
 ┃ ┃ ┗ 📜TextArea.tsx
 ┃ ┣ 📂detail
 ┃ ┃ ┣ 📜CautionArea.tsx
 ┃ ┃ ┣ 📜DetailPost.tsx
 ┃ ┃ ┣ 📜NaverMap.tsx
 ┃ ┃ ┣ 📜ReviewArea.tsx
 ┃ ┃ ┣ 📜ReviewList.tsx
 ┃ ┃ ┣ 📜ShowDetailArea.tsx
 ┃ ┃ ┣ 📜ShowDetailSection.tsx
 ┃ ┃ ┣ 📜ShowInfoSection.tsx
 ┃ ┃ ┗ 📜StarRating.tsx
 ┃ ┣ 📂editor
 ┃ ┃ ┣ 📜CustomImage.tsx
 ┃ ┃ ┣ 📜Editor.tsx
 ┃ ┃ ┣ 📜HtmlEditor.tsx
 ┃ ┃ ┗ 📜Toolbar.tsx
 ┃ ┣ 📂enrollment
 ┃ ┃ ┣ 📂Calendar
 ┃ ┃ ┃ ┣ 📜enrollCalendar.css
 ┃ ┃ ┃ ┗ 📜EnrollCalendar.tsx
 ┃ ┃ ┣ 📂Edit
 ┃ ┃ ┃ ┣ 📜EnrollEditFooter.tsx
 ┃ ┃ ┃ ┗ 📜EnrollEditMains.tsx
 ┃ ┃ ┣ 📂write
 ┃ ┃ ┃ ┣ 📜EnrollFooter.tsx
 ┃ ┃ ┃ ┣ 📜EnrollMains.tsx
 ┃ ┃ ┃ ┣ 📜EnrollRehydartion.tsx
 ┃ ┃ ┃ ┗ 📜EnrollSeat.tsx
 ┃ ┃ ┣ 📜Category.tsx
 ┃ ┃ ┣ 📜EnrollFormItems.tsx
 ┃ ┃ ┣ 📜EnrollModal.tsx
 ┃ ┃ ┣ 📜EnrollPerformance.tsx
 ┃ ┃ ┣ 📜EnrollPoster.tsx
 ┃ ┃ ┣ 📜NavigationGuard.tsx
 ┃ ┃ ┗ 📜PerformanceInfo.tsx
 ┃ ┣ 📂error
 ┃ ┃ ┣ 📜Error.tsx
 ┃ ┃ ┗ 📜UnderConstruction.tsx
 ┃ ┣ 📂home
 ┃ ┃ ┣ 📜CurrentShowSection.tsx
 ┃ ┃ ┣ 📜Footer.tsx
 ┃ ┃ ┣ 📜Header.tsx
 ┃ ┃ ┣ 📜SlideBanner.tsx
 ┃ ┃ ┗ 📜UpcomingShowsSection.tsx
 ┃ ┣ 📂manager
 ┃ ┃ ┣ 📜ButtonWithIcon.tsx
 ┃ ┃ ┣ 📜EmblaCarousel.tsx
 ┃ ┃ ┣ 📜Header.tsx
 ┃ ┃ ┣ 📜Main.tsx
 ┃ ┃ ┣ 📜ManagerEdit.tsx
 ┃ ┃ ┣ 📜Performance.tsx
 ┃ ┃ ┣ 📜PerformanceButton.tsx
 ┃ ┃ ┣ 📜PerformanceManagerDetail.tsx
 ┃ ┃ ┣ 📜PerformanceMoreBtn.tsx
 ┃ ┃ ┣ 📜PerformanceSlide.tsx
 ┃ ┃ ┗ 📜TicketVerification.tsx
 ┃ ┣ 📂search
 ┃ ┃ ┣ 📜DesktopSearchOptionSection.tsx
 ┃ ┃ ┣ 📜EmptySearchResults.tsx
 ┃ ┃ ┣ 📜SearchOptionFilter.tsx
 ┃ ┃ ┣ 📜SearchOptionSection.tsx
 ┃ ┃ ┣ 📜SearchResultHeader.tsx
 ┃ ┃ ┣ 📜SearchResultItem.tsx
 ┃ ┃ ┗ 📜SortFilter.tsx
 ┃ ┣ 📂seats
 ┃ ┃ ┣ 📜ControlRowButton.tsx
 ┃ ┃ ┣ 📜SeatItem.tsx
 ┃ ┃ ┣ 📜SeatLayout.tsx
 ┃ ┃ ┣ 📜SeatRow.tsx
 ┃ ┃ ┣ 📜SeatSetRow.tsx
 ┃ ┃ ┣ 📜TheaterLayoutManager.tsx
 ┃ ┃ ┗ 📜TheaterSeatsSelector.tsx
 ┃ ┣ 📂ticket
 ┃ ┃ ┗ 📜Ticket.tsx
 ┃ ┣ 📂ui
 ┃ ┃ ┣ 📜alert.tsx
 ┃ ┃ ┣ 📜badge.tsx
 ┃ ┃ ┣ 📜button.tsx
 ┃ ┃ ┣ 📜card.tsx
 ┃ ┃ ┣ 📜checkbox.tsx
 ┃ ┃ ┣ 📜input.tsx
 ┃ ┃ ┣ 📜label.tsx
 ┃ ┃ ┣ 📜separator.tsx
 ┃ ┃ ┣ 📜skeleton.tsx
 ┃ ┃ ┣ 📜switch.tsx
 ┃ ┃ ┣ 📜tabs.tsx
 ┃ ┃ ┣ 📜ToastClient.tsx
 ┃ ┃ ┗ 📜ToastConfirm.tsx
 ┃ ┣ 📜Header.tsx
 ┃ ┣ 📜Loading.tsx
 ┃ ┗ 📜Modal.tsx
 ┣ 📂hooks
 ┃ ┣ 📜useBookingDetail.ts
 ┃ ┣ 📜useDebounce.ts
 ┃ ┣ 📜useEditEnrollSelector.ts
 ┃ ┣ 📜useEditorActions.ts
 ┃ ┣ 📜useEnrollFormActions.ts
 ┃ ┣ 📜useEnrollmentData.ts
 ┃ ┣ 📜useEnrollRehydration.ts
 ┃ ┣ 📜useEnrollSelector.ts
 ┃ ┣ 📜useIsAllAisles.ts
 ┃ ┣ 📜usePerformanceActions.ts
 ┃ ┣ 📜usePopStateHandler.ts
 ┃ ┣ 📜usePosterHandler.ts
 ┃ ┣ 📜useRefreshDetection.ts
 ┃ ┣ 📜useReservationHandler.ts
 ┃ ┣ 📜useSeatActions.ts
 ┃ ┣ 📜useSeatData.ts
 ┃ ┣ 📜useSetEditEnrollData.ts
 ┃ ┣ 📜useShowModal.ts
 ┃ ┗ 📜useValidationEnrollment.ts
 ┣ 📂lib
 ┃ ┣ 📜algolia.ts
 ┃ ┣ 📜bankCodeList.ts
 ┃ ┣ 📜firebaseConfig.ts
 ┃ ┣ 📜performance.ts
 ┃ ┗ 📜utils.ts
 ┣ 📂redux
 ┃ ┣ 📂slices
 ┃ ┃ ┣ 📜enrollEditSlice.ts
 ┃ ┃ ┣ 📜enrollSlice.ts
 ┃ ┃ ┣ 📜seatEditSlice.ts
 ┃ ┃ ┗ 📜seatSlice.ts
 ┃ ┣ 📜customStorage.tsx
 ┃ ┣ 📜ReduxProvider.tsx
 ┃ ┗ 📜store.ts
 ┣ 📂services
 ┃ ┗ 📜indexedDBService.ts
 ┣ 📂styles
 ┃ ┗ 📜constants.ts
 ┣ 📂types
 ┃ ┣ 📜admin.ts
 ┃ ┣ 📜controls.ts
 ┃ ┣ 📜editor.ts
 ┃ ┣ 📜enrollment.ts
 ┃ ┣ 📜file.ts
 ┃ ┣ 📜kakao.ts
 ┃ ┣ 📜modal.ts
 ┃ ┣ 📜next-auth.d.ts
 ┃ ┣ 📜performance.ts
 ┃ ┣ 📜reservation.ts
 ┃ ┣ 📜seat.ts
 ┃ ┗ 📜users.ts
 ┣ 📂utils
 ┃ ┣ 📜Images.ts
 ┃ ┣ 📜sanitizer.ts
 ┃ ┣ 📜toast.ts
 ┃ ┗ 📜validations.ts
 ┗ 📜global.d.ts
```

</details>

## <a name="ui"></a>UI

## <a name="function"></a> 기능

### 로그인(로그아웃)

     - 예매회원 로그인
     - 공연 관리자 로그인
     - 아이디 저장 기능
     - 로그인 유효성 검사 기능

### 회원가입(탈퇴) 기능

### 검색 기능 (공연 검색, 카테고리 검색)

### 예매 회원

#### 공연 예매 / 조회 / 취소 기능

- 공연 정보 조회
- 공연 한줄평 조회
- 서비스 유의사항 조회
- 공연 URL 공유기능 , URL 복사기능
- 공연장소 네이버 지도 연동
- 예매 QR 티켓 확인

#### 관람한 공연 한줄평 작성 / 수정 / 삭제 기능

- 공연별 한줄평 리스트 조회
- 한줄평 작성 기능 (별점 , 텍스트)
- 한줄평 평점순 , 공감순 최신글순 필터 기능
- 한줄평 좋아요 기능
- 한줄평 수정 기능
- 한줄평 삭제 기능

#### 마이페이지 회원 조회/수정 기능

### 공연 관리자 회원

#### 공연 등록 / 조회 / 종료 기능

- 등록된 공연 조회
- 공연별 예약 현황 관리 / 조회

#### 예매 QR 티켓 검증 기능

#### 관리자 페이지 회원 수정 기능

### admin 회원 (UI 구현 완료)

#### 회원 조회 및 상태 관리 (예매 회원 / 공연 관리자 회원 / 관리자 )

- 예매 회원 관리

  - 예매 회원 정보 및 예매 내역 조회
  - 계정 상태 변경 (활성화, 정지, 휴면, 탈퇴)
  - 계정을 관리자(admin) 권한으로 변경
  - 예매 회원 검색 기능

- 공연 관리자 회원 관리

  - 공연 관리자 정보 및 등록 공연 목록 조회
  - 계정 상태 변경 (활성화, 정지, 휴면, 탈퇴)
  - 가입 유형 변경 (개인 ↔ 사업자)
  - 공연 관리자 회원 검색 기능

- 관리자(admin) 관리

  - 관리자 정보 조회
  - 권한 변경 (전체권한, 일부권한, 읽기전용)
  - 신규 관리자 등록
  - 관리자 검색 기능

#### 신규 소극장 관리자 승인

- 신규 가입한 소극장 관리자 정보 확인
- 가입 승인 또는 거절 기능 제공

#### 공연 조회 및 상태 관리

- 공연 상세 정보 및 신고 내역 조회
- 공연 판매 상태 변경 (판매 중, 판매 예정, 판매 종료)
- 공연 노출 설정 (웹에 표시 또는 숨김)
- 공연 검색 기능

#### 한줄평 조회 및 상태 관리

- 한줄평 내용, 작성자 정보, 신고 내역 확인
- 한줄평 노출 설정 (표시 또는 숨김)

#### 배너 관리

- 배너 목록 확인 및 신규 배너 등록
- 배너 수정 및 활성화/비활성화 설정
- 배너 표시 순서 변경 기능

#### 이용약관 / 개인정보 처리방침 관리

- 현재 적용 중인 이용약관 및 개인정보 처리방침 확인
- 내용 수정 기능 제공

#### 서비스 점검 모드 설정

- 페이지 단위로 점검(공사중) 모드 또는 정상 운영 모드 설정 기능

## <a name="troubleShooting"></a>트러블 슈팅

### 김지훈

### 김예원

### 윤시운

### 이휘경

### 하진희

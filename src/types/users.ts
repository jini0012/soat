// types/user.ts
interface BaseUserData {
  email: string;
  password: string;
}

interface SellerUserData extends BaseUserData {
  teamName: string;
}

interface BuyerUserData extends BaseUserData {
  username: string;
}

type UserData = SellerUserData | BuyerUserData;

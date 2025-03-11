// types/user.ts
interface BaseUserData {
  email: string;
  password: string;
}

export interface SellerUserData extends BaseUserData {
  teamName: string;
  managerName: string;
  phoneNumber: string;
  businessNum: string;
  createdAt: string;
  updatedAt: string;
  isApproval: boolean;
  bankAccount: {
    bankCode: string;
    bankName: string;
    depositor: string;
    accountNum: string;
    encryptedAccountImagePath: string;
    originalImageType: string;
  };
}

export interface BuyerUserData extends BaseUserData {
  username: string;
}

export type UserData = SellerUserData | BuyerUserData;

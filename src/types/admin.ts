import { SellerUserData } from "./users";

export interface GeneralUser {
  email: string;
  username: string;
  createdAt: string;
  phoneNumber: string;
}

export interface TheaterAdminUser {
  email: string;
  username: string;
  createdAt: string;
  joinType: string;
}

export interface NewTheaterAdmin extends SellerUserData {}

export interface Performance {
  title: string;
  category: string;
  team: string;
  reportedStatus: string;
}

export interface Review {
  title: string;
  reviewer: string;
  reviewDate: string;
  reportedStatus: string;
}

export interface Banner {
  bannerTitle: string;
  registrationDate: string;
  bannerStatus: string;
}

export interface SiteAdmin {
  email: string;
  siteAdmin: string;
  permissions: string;
}

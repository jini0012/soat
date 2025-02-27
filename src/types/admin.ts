export interface GeneralUser {
  email: string;
  name: string;
  joinDate: string;
}

export interface TheaterAdminUser {
  email: string;
  name: string;
  joinDate: string;
  joinType: string;
}

export interface NewTheaterAdmin {
  email: string;
  name: string;
  team: string;
  requestDate: string;
}

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

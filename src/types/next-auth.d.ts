// types/next-auth.d.ts
import "next-auth";

declare module "next-auth" {
  interface User {
    id: string;
    email: string;
    userType: "seller" | "buyer";
    teamName?: string;
    username?: string;
  }

  interface Session {
    user: User & {
      id: string;
      userType: "seller" | "buyer";
    };
  }
}

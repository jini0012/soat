export const dynamic = "force-dynamic";

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ReduxProvider from "@/redux/ReduxProvider";
import AuthProvider from "@/auth/Provider";

const pretendard = localFont({
  src: "./fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${pretendard.variable}`}>
      <body className={pretendard.className}>
        <AuthProvider>
          <ReduxProvider>
            {children}
            <div id="modal-root"></div>
          </ReduxProvider>
        </AuthProvider>
      </body>
    </html>
  );
}

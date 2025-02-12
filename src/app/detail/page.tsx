import React from "react";
import Header from "@/components/home/Header";
import Footer from "@/components/home/Footer";
import ShowInfoSection from "@/components/detail/ShowInfoSection";

export default function page() {
  return (
    <>
      <Header />
      <ShowInfoSection />
      <Footer />
    </>
  );
}

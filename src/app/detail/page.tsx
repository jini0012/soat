import React from "react";
import Header from "@/components/home/Header";
import Footer from "@/components/home/Footer";
import ShowInfoSection from "@/components/detail/ShowInfoSection";
import ShowDetailSection from "@/components/detail/ShowDetailSection";

export default function page() {
  return (
    <>
      <Header />
      <main className="px-24">
        <ShowInfoSection />
        <ShowDetailSection />
      </main>
      <Footer />
    </>
  );
}

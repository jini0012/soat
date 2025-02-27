import React from "react";
import Header from "@/components/home/Header";
import Footer from "@/components/home/Footer";
import SlideBanner from "@/components/home/SlideBanner";
import UpcomingShowsSection from "@/components/home/UpcomingShowsSection";
import CurrentShowSection from "@/components/home/CurrentShowSection";

export default function main() {
  return (
    <>
      <Header />
      <SlideBanner />
      <main className="px-[40px] md:px-[80px]">
        <CurrentShowSection />
        <UpcomingShowsSection />
      </main>
      <Footer />
    </>
  );
}

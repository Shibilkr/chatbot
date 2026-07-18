import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import LivePreview from "../components/LivePreview";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import BottomNav from "../components/BottomNav";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-surface text-on-surface">
      <Header />
      <main className="flex-1 pt-16 bg-surface overflow-x-hidden flex flex-col items-center w-full">
        <div className="flex flex-col w-full max-w-7xl">
          <Hero />
          <LivePreview />
          <Features />
          <HowItWorks />
          <FAQ />
        </div>
      </main>
      <Footer />
      <BottomNav />
    </div>
  );
}

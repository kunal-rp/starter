"use client";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Footer from "./components/Footer";
import ForceRefreshFirst from "./components/ForceRefreshFirst.jsx";

export default function Home() {
  return (
    <ForceRefreshFirst>
      <div className="bg-white w-full min-h-full">
        <Header className="top-10 z-20" />
        <main className="z-10">
          <Hero className="pt-[30%] md:pt-[20%] z-0" />
          <Features />
          <Footer />
        </main>
      </div>
    </ForceRefreshFirst>
  );
}

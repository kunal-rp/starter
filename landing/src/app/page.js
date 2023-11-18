"use client";

import Image from "next/image";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="bg-white w-full min-h-full">
      <Header className="sticky top-10 z-20" />
      <main className="z-10">
        <Hero className="pt-[30%] md:pt-[20%] z-0" />
        <Features />
        <Footer />
      </main>
    </div>
  );
}

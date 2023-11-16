"use client";

import Image from "next/image";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="bg-white relative z-auto w-full min-h-full">
      <Header className="fixed top-5 z-50" />
      <main className="relative z-10 ">
        <Hero className="pt-28" />
        <Features />
        <Footer />
      </main>
    </div>
  );
}

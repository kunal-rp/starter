"use client";

import Image from "next/image";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col items-center space-y-[5%] bg-white">
      <Header />
      <Hero />
      <Features />
      <Footer />
    </main>
  );
}

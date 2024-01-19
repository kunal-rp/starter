"use client";

import { GoogleOAuthProvider } from "@react-oauth/google";

import { Inter } from "next/font/google";

// These styles apply to every route in the application
import "../styles/global.css";

const inter = Inter({ subsets: ["latin"] });
import { RecoilRoot } from "recoil";

import ForceRefreshFirst from "./ForceRefreshFirst.jsx";
import RootAnimation from "../src/animation/RootAnimation.jsx";

export default function RootLayout({ children }) {
  return (
    <RecoilRoot>
      <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_ID}>
        <html lang="en">
          <body className={inter.className}>
            {" "}
            <ForceRefreshFirst>{children}</ForceRefreshFirst>
          </body>
        </html>
      </GoogleOAuthProvider>
    </RecoilRoot>
  );
}

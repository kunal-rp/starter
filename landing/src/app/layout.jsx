import { Open_Sans } from "next/font/google";
import "./globals.css";

import { GoogleOAuthProvider } from "@react-oauth/google";
import RecoilWrapper from "./RecoilWrapper.jsx";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "ACME Startup",
  description: "Test Startup App",
  icons: {
    icon: "/logo.png", // /public path
  },
};

export default function RootLayout({ children }) {
  return (
    <RecoilWrapper>
      <GoogleOAuthProvider clientId={process.env.GOOGLE_ID}>
        <html lang="en">
          <body
            className={openSans.className + " w-screen h-screen text-black"}
          >
            <div className="bg-white w-full min-h-full">{children}</div>
          </body>
        </html>
      </GoogleOAuthProvider>
    </RecoilWrapper>
  );
}

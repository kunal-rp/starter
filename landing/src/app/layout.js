import { Lato } from "next/font/google";
import "./globals.css";

const lato = Lato({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Materri",
  description: "Material-driven product design platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={lato.className}>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import { Poppins as FontSans, Space_Grotesk } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "react-hot-toast";
import Header from "@/components/header";
import Footer from "@/components/footer";

const fontSans = FontSans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-sans",
});

const fontSpaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
});

const fontGilroy = localFont({
  src: [
    {
      path: "/ui/fonts/Gilroy-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "/ui/fonts/Gilroy-LightItalic.ttf",
      weight: "300",
      style: "italic",
    },
    {
      path: "/ui/fonts/Gilroy-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "/ui/fonts/Gilroy-RegularItalic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "/ui/fonts/Gilroy-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "/ui/fonts/Gilroy-MediumItalic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "/ui/fonts/Gilroy-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "/ui/fonts/Gilroy-SemiBoldItalic.ttf",
      weight: "600",
      style: "italic",
    },
    {
      path: "/ui/fonts/Gilroy-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "/ui/fonts/Gilroy-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "/ui/fonts/Gilroy-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "/ui/fonts/Gilroy-ExtraBoldItalic.ttf",
      weight: "800",
      style: "italic",
    },
    {
      path: "/ui/fonts/Gilroy-Black.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "/ui/fonts/Gilroy-BlackItalic.ttf",
      weight: "900",
      style: "italic",
    },
  ],
  variable: "--font-gilroy",
});

export const metadata: Metadata = {
  title: "Innovate Health Africa",
  description:
    "Building Tomorrow’s Healthcare  Solution Today - By Africans, for Africa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        fontSans.variable,
        fontSpaceGrotesk.variable,
        fontGilroy.variable
      )}
    >
      <body
        className={cn("min-h-screen bg-background fonst-gilroy antialiased")}
      >
        <Header />
        {children}
        <Footer />
        <Toaster position="bottom-center" />
      </body>
    </html>
  );
}

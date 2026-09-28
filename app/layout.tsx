import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";
export const metadata:Metadata={title:{default:"Swathiga — iOS Developer",template:"%s — Swathiga"},description:"Swathiga’s portfolio: thoughtfully crafted iOS applications, healthcare products, and contract development work.",icons:{icon:"/favicon.svg"}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><a className="skip-link" href="#main">Skip to content</a><Header/>{children}<Footer/></body></html>}

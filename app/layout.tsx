import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";
export const metadata:Metadata={title:{default:"Swathiga — Backend Developer",template:"%s — Swathiga"},description:"Swathiga is transitioning from iOS to backend development, building Python APIs and RAG applications. Open to backend opportunities.",icons:{icon:"/favicon.svg"}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><a className="skip-link" href="#main">Skip to content</a><Header/>{children}<Footer/></body></html>}

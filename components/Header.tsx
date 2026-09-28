"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
const links = [["/", "Home"], ["/projects/", "Projects"], ["/contract/", "Contract work"], ["/blogs/", "Blogs"], ["/hackathons/", "Hackathons"], ["/contact/", "Contact"]];
export default function Header() {
 const path = usePathname(); const [open, setOpen] = useState(false);
 return <header className="header"><Link href="/" className="wordmark" aria-label="Swathiga home">swathiga<span>.</span></Link><button className="menu-toggle" aria-expanded={open} aria-controls="main-nav" onClick={()=>setOpen(!open)}>{open ? "Close" : "Menu"}<span aria-hidden="true">{open ? "−" : "+"}</span></button><nav id="main-nav" className={open ? "nav open" : "nav"} aria-label="Main navigation">{links.map(([href,label])=><Link key={href} href={href} aria-current={(href === "/" ? path === "/" : path.startsWith(href.replace(/\/$/, ""))) ? "page" : undefined} onClick={()=>setOpen(false)}>{label}</Link>)}</nav><Link className="header-cta" href="/contact/">Let’s talk <span aria-hidden="true">↗</span></Link></header>;
}

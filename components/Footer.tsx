import Link from "next/link";
import {profile} from "@/lib/content";
export default function Footer(){return <footer><div className="footer-top"><p>Hiring for a backend role?</p><Link href="/contact/">Let’s build it together.<span aria-hidden="true">↗</span></Link></div><div className="footer-bottom"><Link href="/" className="wordmark">swathiga<span>.</span></Link><p>Backend development · Python & AI</p><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a><span>© {new Date().getFullYear()} Swathiga</span></div></footer>}

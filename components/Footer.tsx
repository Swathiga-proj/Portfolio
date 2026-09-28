import Link from "next/link";
import {profile} from "@/lib/content";
export default function Footer(){return <footer><div className="footer-top"><p>Have an app in mind?</p><Link href="/contact/">Let’s build it together.<span aria-hidden="true">↗</span></Link></div><div className="footer-bottom"><Link href="/" className="wordmark">swathiga<span>.</span></Link><p>iOS development. Thoughtfully built.</p><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a><span>© {new Date().getFullYear()} Swathiga</span></div></footer>}

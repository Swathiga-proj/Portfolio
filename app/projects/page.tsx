import type {Metadata} from "next";
import {projects} from "@/lib/content";
import ProjectCard from "@/components/ProjectCard";
export const metadata:Metadata={title:"Projects"};
export default function Projects(){return <main id="main"><section className="page-intro"><p className="eyebrow">THE PORTFOLIO / 01—08</p><h1>A few things<br/>I’ve <span>helped build.</span></h1><p>My current work in backend development and RAG, alongside the iOS applications that shaped my engineering experience.</p></section><section className="section project-list"><div className="project-grid">{projects.map(p=><ProjectCard key={p.name} project={p}/>)}</div></section></main>}

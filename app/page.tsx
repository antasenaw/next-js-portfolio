"use client"
import { useRef } from "react";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Main from "@/components/Main";
import "./Page.css";

export interface RefProps {
  homeRef: React.RefObject<HTMLDivElement | null>,
  aboutRef: React.RefObject<HTMLDivElement | null>,
  projectsRef: React.RefObject<HTMLDivElement | null>,
  contactsRef: React.RefObject<HTMLDivElement | null>,
}

export default function Home() {
  const homeRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const contactsRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="flex h-screen items-center justify-center">
      <div className=" flex gap-4 md:gap-6 max-h-screen max-w-screen md:max-h-4/5 md:max-w-5xl md:m-8 m-4 py-4 md:py-0">
        <Navbar homeRef={homeRef} aboutRef={aboutRef} projectsRef={projectsRef} contactsRef={contactsRef}/>
        <div className="flex flex-col gap-4 md:gap-6 page rounded-2xl">
          <Header homeRef={homeRef} aboutRef={aboutRef} projectsRef={projectsRef} contactsRef={contactsRef}/>
          <Main homeRef={homeRef} aboutRef={aboutRef} projectsRef={projectsRef} contactsRef={contactsRef}/>
        </div>
      </div>
    </div>
  );
}

"use client"
import React, { useState } from 'react'
import { RefProps } from '@/app/page'

interface MobileNavbarItemProps {
  hook: React.RefObject<HTMLDivElement | null>,
  text: string,
  handler: () => void
}

const MobileNavbarItem = ({ hook, text, handler }: MobileNavbarItemProps) => {
  function scrollTo (hook: React.RefObject<HTMLDivElement | null>) {
    hook.current?.scrollIntoView({behavior: "smooth", block: "start"});
  }
  return (
    <li className="flex flex-col grow" onClick={handler}>
      <button onClick={() => scrollTo(hook)} className="general-style frutiger text-center p-1 cursor-pointer">
        {text}
      </button>
    </li>
  )
}

const MobileNavbar = ({ homeRef, aboutRef, projectsRef, contactsRef }: RefProps) => {
  const [ display, setDisplay ] = useState(false);

  const handleSetDisplay = () => {
    setDisplay(!display);
  }

  const newClass = `${display ? 'flex' : 'hidden'} flex-wrap flex-col gap-4`
  const btnClass = `${display ? 'hidden' : 'flex'} general-style frutiger justify-center p-1 cursor-pointer`
  
  return (
      <nav className='md:hidden bg-[rgba(255,255,255,0.1)] shadow-[0px_6px_3px_rgba(0,0,0,0.2)] rounded-b-2xl flex flex-col p-2 mx-4'>
        <button onClick={handleSetDisplay} className={btnClass}>☰</button>
        <ul className={newClass}>
          <MobileNavbarItem hook={homeRef} text="Home" handler={handleSetDisplay}/>
          <MobileNavbarItem hook={aboutRef} text="About me" handler={handleSetDisplay}/>
          <MobileNavbarItem hook={projectsRef} text="Projects" handler={handleSetDisplay} />
          <MobileNavbarItem hook={contactsRef} text="Contacts" handler={handleSetDisplay} />
        </ul>
      </nav>
  )
}

export default MobileNavbar
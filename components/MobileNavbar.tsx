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
      <button onClick={() => scrollTo(hook)} className="frutiger text-center bg-[rgba(255,255,255,0.125)] border border-[rgba(255,255,255,0.5)] rounded-2xl p-1 shadow-[0px_6px_3px_rgba(0,0,0,0.2)] cursor-pointer">
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
  const btnClass = `${display ? 'hidden' : 'flex'} frutiger flex justify-center bg-[rgba(255,255,255,0.125)] border border-[rgba(255,255,255,0.5)] rounded-2xl p-1 shadow-[0px_6px_3px_rgba(0,0,0,0.2)] cursor-pointer`
  
  return (
      <nav className='md:hidden flex flex-col bg-[rgba(255,255,255,0.125)] border border-[rgba(255,255,255,0.5)] p-2 mx-4 rounded-b-2xl shadow-[0px_6px_3px_rgba(0,0,0,0.2)]'>
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
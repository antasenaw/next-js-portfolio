"use client"
import React, { useState } from 'react'
import { useRefContext } from '@/hooks/NavigationRefContext'

interface MobileNavbarItemProps {
  hook: React.RefObject<HTMLDivElement | null>,
  text: string,
  handler: () => void
}

const MobileNavbarItem = ({ hook, text, handler }: MobileNavbarItemProps) => {
  function scrollTo (hook: React.RefObject<HTMLDivElement | null>) {
    {handler()}
    hook.current?.scrollIntoView({behavior: "smooth", block: "start"});
  }
  return (
    <li className="flex flex-col grow">
      <a onClick={() => scrollTo(hook)} className="general-style frutiger text-center p-1 cursor-pointer hover:scale-110 transition duration-200 ease-in-out">
        {text}
      </a>
    </li>
  )
}

const MobileNavbar = () => {
  const [ display, setDisplay ] = useState(false);
  
  const handleSetDisplay = () => {
    setDisplay(!display);
  }
  
  const newClass = `${display ? 'flex' : 'hidden'} flex-wrap flex-col gap-4`
  const btnClass = `${display ? 'mb-4' : 'mb-0'} flex general-style frutiger justify-center p-1 cursor-pointer hover:scale-110 transition duration-200 ease-in-out`
  
  const { homeRef, aboutRef, projectsRef, contactsRef } = useRefContext();
  return (
      <nav className='md:hidden general-style flex flex-col p-2'>
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
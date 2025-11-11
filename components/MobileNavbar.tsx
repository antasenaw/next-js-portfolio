"use client"
import Link from 'next/link'
import React, { useState } from 'react'

interface NavbarItemProps {
  link: string,
  text: string,
  handler: () => void
}

const NavbarItem = ({ link, text, handler }: NavbarItemProps) => {
  return (
    <li className="flex flex-col grow" onClick={handler}>
      <Link href={link} className="frutiger text-center bg-[rgba(255,255,255,0.125)] border border-[rgba(255,255,255,0.5)] rounded-2xl p-2 shadow-[0px_6px_3px_rgba(0,0,0,0.2)] cursor-pointer">
        {text}
      </Link>
    </li>
  )
}

const MobileNavbar = () => {
  const [ display, setDisplay ] = useState(false);

  const handleSetDisplay = () => {
    setDisplay(!display);
  }

  const newClass = `${display ? 'flex' : 'hidden'} flex-wrap flex-col gap-4`
  const btnClass = `${display ? 'hidden' : 'flex'} frutiger flex justify-center bg-[rgba(255,255,255,0.125)] border border-[rgba(255,255,255,0.5)] rounded-2xl p-2 shadow-[0px_6px_3px_rgba(0,0,0,0.2)] cursor-pointer`
  
  return (
      <nav className='md:hidden flex flex-col bg-[rgba(255,255,255,0.125)] border border-[rgba(255,255,255,0.5)] p-4 mx-4 rounded-b-2xl shadow-[0px_6px_3px_rgba(0,0,0,0.2)]'>
        <button onClick={handleSetDisplay} className={btnClass}>☰</button>
        <ul className={newClass}>
          <NavbarItem link="/" text="Home" handler={handleSetDisplay}/>
          <NavbarItem link="#about" text="About me" handler={handleSetDisplay}/>
          <NavbarItem link="#projects" text="Project" handler={handleSetDisplay} />
          <NavbarItem link="#contacts" text="Contacts" handler={handleSetDisplay} />
        </ul>
      </nav>
  )
}

export default MobileNavbar
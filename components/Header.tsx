import React, { useState } from 'react'

interface NavbarItemProps {
  text: string,
  handler: () => void
}

const NavbarItem = ({ text, handler }: NavbarItemProps) => {
  return (
    <li className="flex flex-col grow" onClick={handler}>
      <button className="frutiger text-center bg-[rgba(255,255,255,0.125)] border border-[rgba(255,255,255,0.5)] rounded-2xl p-2 shadow-[0px_6px_3px_rgba(0,0,0,0.2)] cursor-pointer">
        {text}
      </button>
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
          <NavbarItem text="Home" handler={handleSetDisplay}/>
          <NavbarItem text="About me" handler={handleSetDisplay}/>
          <NavbarItem text="Project" handler={handleSetDisplay} />
          <NavbarItem text="Contacts" handler={handleSetDisplay} />
        </ul>
      </nav>
  )
}

const Header = () => {
  return (
    <>
    <header>
      <div className='bg-[rgba(255,255,255,0.25)] border border-[rgba(255,255,255,0.5)] p-6 rounded-2xl shadow-[0px_6px_3px_rgba(0,0,0,0.2)] frutiger'>
        <h1 className='text-[2rem] font-bold'>Muhammad Iqbal Nugraha</h1>
        <p>Junior Fullstack Developer</p>
      </div>
      <MobileNavbar/>
    </header>
    </>
  )
}

export default Header
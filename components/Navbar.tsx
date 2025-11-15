"use client"
import favicon from '@/app/favicon.ico'
import Image from "next/image";
import { useRefContext } from "@/hooks/NavigationRefContext";

interface NavbarItemProps {
  hook: React.RefObject<HTMLDivElement | null>,
  text: string
}

const NavbarItem = ({ hook, text }: NavbarItemProps) => {
  function scrollTo (hook: React.RefObject<HTMLDivElement | null>) {
    hook.current?.scrollIntoView({behavior: "smooth", block: "start"});
  }

  return (
    <li className="flex flex-col grow">
      <a onClick={() => scrollTo(hook)} className="general-style frutiger text-center p-2 cursor-pointer hover:font-bold active:scale-90 hover:scale-110 transition duration-200 ease-in-out">
        {text}
      </a>
    </li>
  )
}


const Navbar = () => {
  const { homeRef, aboutRef, projectsRef, contactsRef } = useRefContext();

  return (
    <nav className="general-style max-md:hidden frutiger-2 p-4 min-w-32">
      <Image
        src={favicon}
        alt="profile picture"
        width={96}
        height={96}
        className="max-md:hidden mb-4 rounded-[8rem] shadow-[0px_6px_3px_rgba(0,0,0,0.2)] hover:scale-110 transition duration-200 ease-in-out"
      />
      <ul className="flex flex-col md:flex-nowrap gap-4">
        <NavbarItem hook={homeRef} text="Home" />
        <NavbarItem hook={aboutRef} text="About me" />
        <NavbarItem hook={projectsRef} text="Projects" />
        <NavbarItem hook={contactsRef} text="Contacts" />
      </ul>
    </nav>
  )
}

export default Navbar
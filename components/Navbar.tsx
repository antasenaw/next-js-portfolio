import globe from "../public/globe.svg";
import Image from "next/image";
import { RefProps } from "@/app/page";

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
      <button onClick={() => scrollTo(hook)} className="general-style frutiger text-center p-2 cursor-pointer">
        {text}
      </button>
    </li>
  )
}


const Navbar = ({ homeRef, aboutRef, projectsRef, contactsRef }: RefProps) => {
  return (
    <nav className="general-style max-md:hidden frutiger-2 p-4 min-w-32">
      <Image
        src={globe}
        alt="profile picture"
        width={480}
        height={480}
        className="max-md:hidden mb-4 rounded-[8rem] shadow-[0px_6px_3px_rgba(0,0,0,0.2)]"
      />
      <ul className="flex flex-wrap md:flex-col md:flex-nowrap gap-4">
        <NavbarItem hook={homeRef} text="Home" />
        <NavbarItem hook={aboutRef} text="About me" />
        <NavbarItem hook={projectsRef} text="Project" />
        <NavbarItem hook={contactsRef} text="Contacts" />
      </ul>
    </nav>
  )
}

export default Navbar
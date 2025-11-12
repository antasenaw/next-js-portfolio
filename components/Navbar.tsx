import globe from "../public/globe.svg";
import Image from "next/image";

interface NavbarItemProps {
  text: string
}

const NavbarItem = ({ text }: NavbarItemProps) => {
  return (
    <li className="flex flex-col grow">
      <button className="frutiger text-center bg-[rgba(255,255,255,0.125)] border border-[rgba(255,255,255,0.5)] rounded-2xl p-2 shadow-[0px_6px_3px_rgba(0,0,0,0.2)] cursor-pointer">
        {text}
      </button>
    </li>
  )
}

const Navbar = () => {
  return (
    <nav className="max-md:hidden frutiger-2 bg-[rgba(255,255,255,0.125)] border border-[rgba(255,255,255,0.5)] p-4 rounded-2xl min-w-32 shadow-[0px_6px_3px_rgba(0,0,0,0.2)]">
      <Image
        src={globe}
        alt="profile picture"
        width={480}
        height={480}
        className="max-md:hidden mb-4 border border-[rgba(255,255,255,0.5)] rounded-[8rem] shadow-[0px_6px_3px_rgba(0,0,0,0.2)]"
      />
      <ul className="flex flex-wrap md:flex-col md:flex-nowrap gap-4">
        <NavbarItem text="Home" />
        <NavbarItem text="About me" />
        <NavbarItem text="Project" />
        <NavbarItem text="Contacts" />
      </ul>
    </nav>
  )
}


export default Navbar
interface NavbarItemProps {
  link: string,
  text: string
}

const NavbarItem = ({ link, text }: NavbarItemProps) => {
  return (
    <li className=" text-center ">
      <a href={link} />
      {text}
    </li>
  )
}

const Navbar = () => {
  return (
    <nav className="border-amber-50 border-2">
      <ul className=" flex flex-col gap-2">
        <NavbarItem link="/" text="Home" />
        <NavbarItem link="/" text="About me" />
        <NavbarItem link="/" text="Project" />
        <NavbarItem link="/" text="Contacts" />
      </ul>
    </nav>
  )
}

export default Navbar
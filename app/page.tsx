"use client"
import globe from "../public/globe.svg";
import Image from "next/image";
import "./Page.css";
import { useRef, useState } from "react";

interface NavbarItemProps {
  hook: React.RefObject<HTMLDivElement | null>,
  text: string
}

const NavbarItem = ({ hook, text }: NavbarItemProps) => {
  function scrollTo (hook: React.RefObject<HTMLDivElement | null>) {
    hook.current?.scrollIntoView({behavior: "smooth"});
  }

  return (
    <li className="flex flex-col grow">
      <button onClick={() => scrollTo(hook)} className="frutiger text-center bg-[rgba(255,255,255,0.125)] border border-[rgba(255,255,255,0.5)] rounded-2xl p-2 shadow-[0px_6px_3px_rgba(0,0,0,0.2)] cursor-pointer">
        {text}
      </button>
    </li>
  )
}

// const Navbar = () => {
//   return (
//     <nav className="max-md:hidden frutiger-2 bg-[rgba(255,255,255,0.125)] border border-[rgba(255,255,255,0.5)] p-4 rounded-2xl min-w-32 shadow-[0px_6px_3px_rgba(0,0,0,0.2)]">
//       <Image
//         src={globe}
//         alt="profile picture"
//         width={480}
//         height={480}
//         className="max-md:hidden mb-4 border border-[rgba(255,255,255,0.5)] rounded-[8rem] shadow-[0px_6px_3px_rgba(0,0,0,0.2)]"
//       />
//       <ul className="flex flex-wrap md:flex-col md:flex-nowrap gap-4">
//         <NavbarItem text="Home" />
//         <NavbarItem text="About me" />
//         <NavbarItem text="Project" />
//         <NavbarItem text="Contacts" />
//       </ul>
//     </nav>
//   )
// }

interface MobileNavbarItemProps {
  text: string,
  handler: () => void
}

const MobileNavbarItem = ({ text, handler }: MobileNavbarItemProps) => {
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
          <MobileNavbarItem text="Home" handler={handleSetDisplay}/>
          <MobileNavbarItem text="About me" handler={handleSetDisplay}/>
          <MobileNavbarItem text="Project" handler={handleSetDisplay} />
          <MobileNavbarItem text="Contacts" handler={handleSetDisplay} />
        </ul>
      </nav>
  )
}

const Header = () => {
  return (
    <>
    <header>
      <div className='bg-[rgba(255,255,255,0.125)] border border-[rgba(255,255,255,0.5)] p-6 rounded-2xl shadow-[0px_6px_3px_rgba(0,0,0,0.2)] frutiger'>
        <h1 className='text-[2rem] font-bold'>Muhammad Iqbal Nugraha</h1>
        <p>Junior Fullstack Developer</p>
      </div>
      <MobileNavbar/>
    </header>
    </>
  )
}

interface SectionProps {
  hook: React.RefObject<HTMLDivElement | null>,
  title: string,
  content: string
}

const Section = ({ hook, title, content }: SectionProps) => {
  return (
    <section ref={hook} className='flex flex-col gap-6'>
      <h2 className=' frutiger text-center text-2xl font-bold bg-[rgba(255,255,255,0.125)] border border-[rgba(255,255,255,0.5)] rounded-2xl p-2 shadow-[0px_6px_3px_rgba(0,0,0,0.2)]'>{title}</h2>
      <div className='frutiger-2 bg-[rgba(255,255,255,0.125)] border border-[rgba(255,255,255,0.5)] rounded-2xl p-4 shadow-[0px_6px_3px_rgba(0,0,0,0.2)]'>
        <p className='bg-[rgba(255,255,255,0.125)] border border-[rgba(255,255,255,0.5)] rounded-2xl p-4 shadow-[0px_6px_3px_rgba(0,0,0,0.2)]'>{content}</p>
      </div>
    </section>
  )
  
}

// const Main = () => {
//   return (
//     <main className='flex flex-col gap-6 md:overflow-y-auto rounded-2xl [scrollbar-width:none] [&::-webkit-scrollbar]:hidden' >
//       <Section title='Welcome' content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut tincidunt purus. Fusce risus eros, pretium ut augue quis, ornare tristique tortor. Nunc id turpis in nunc auctor pulvinar in ac metus. Mauris sit amet tincidunt neque. Morbi iaculis sem augue, et dictum lacus commodo vel. Aenean ultricies tellus ut tellus ullamcorper viverra. Maecenas vel aliquet est. Praesent efficitur augue a ante lobortis, sed tristique eros tempor. Nulla mattis nulla sed commodo pellentesque. Nam tristique tincidunt dui, non hendrerit mauris sodales et. Morbi ut velit quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras quis orci ac lectus viverra dictum vitae quis augue. Sed iaculis nisl volutpat metus eleifend, eu posuere augue finibus. Vivamus consequat nibh nisl, sit amet vestibulum eros cursus ac. Etiam scelerisque laoreet rutrum. Donec ac massa dolor. Nunc in tortor elit. Nulla et blandit diam, ac lacinia odio.'/>
//       <Section title='About me' content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut tincidunt purus. Fusce risus eros, pretium ut augue quis, ornare tristique tortor. Nunc id turpis in nunc auctor pulvinar in ac metus. Mauris sit amet tincidunt neque. Morbi iaculis sem augue, et dictum lacus commodo vel. Aenean ultricies tellus ut tellus ullamcorper viverra. Maecenas vel aliquet est. Praesent efficitur augue a ante lobortis, sed tristique eros tempor. Nulla mattis nulla sed commodo pellentesque. Nam tristique tincidunt dui, non hendrerit mauris sodales et. Morbi ut velit quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras quis orci ac lectus viverra dictum vitae quis augue. Sed iaculis nisl volutpat metus eleifend, eu posuere augue finibus. Vivamus consequat nibh nisl, sit amet vestibulum eros cursus ac. Etiam scelerisque laoreet rutrum. Donec ac massa dolor. Nunc in tortor elit. Nulla et blandit diam, ac lacinia odio.'/>
//       <Section title='Projects' content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut tincidunt purus. Fusce risus eros, pretium ut augue quis, ornare tristique tortor. Nunc id turpis in nunc auctor pulvinar in ac metus. Mauris sit amet tincidunt neque. Morbi iaculis sem augue, et dictum lacus commodo vel. Aenean ultricies tellus ut tellus ullamcorper viverra. Maecenas vel aliquet est. Praesent efficitur augue a ante lobortis, sed tristique eros tempor. Nulla mattis nulla sed commodo pellentesque. Nam tristique tincidunt dui, non hendrerit mauris sodales et. Morbi ut velit quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras quis orci ac lectus viverra dictum vitae quis augue. Sed iaculis nisl volutpat metus eleifend, eu posuere augue finibus. Vivamus consequat nibh nisl, sit amet vestibulum eros cursus ac. Etiam scelerisque laoreet rutrum. Donec ac massa dolor. Nunc in tortor elit. Nulla et blandit diam, ac lacinia odio.'/>
//       <Section title='Contacts' content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut tincidunt purus. Fusce risus eros, pretium ut augue quis, ornare tristique tortor. Nunc id turpis in nunc auctor pulvinar in ac metus. Mauris sit amet tincidunt neque. Morbi iaculis sem augue, et dictum lacus commodo vel. Aenean ultricies tellus ut tellus ullamcorper viverra. Maecenas vel aliquet est. Praesent efficitur augue a ante lobortis, sed tristique eros tempor. Nulla mattis nulla sed commodo pellentesque. Nam tristique tincidunt dui, non hendrerit mauris sodales et. Morbi ut velit quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras quis orci ac lectus viverra dictum vitae quis augue. Sed iaculis nisl volutpat metus eleifend, eu posuere augue finibus. Vivamus consequat nibh nisl, sit amet vestibulum eros cursus ac. Etiam scelerisque laoreet rutrum. Donec ac massa dolor. Nunc in tortor elit. Nulla et blandit diam, ac lacinia odio.'/>
//     </main>
//   )
// }

export default function Home() {
  const homeRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const contactsRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="flex h-screen items-center justify-center">
      <div className=" flex gap-4 md:gap-6 max-h-screen max-w-screen md:max-h-4/5 md:max-w-5xl md:m-8 m-4 py-4 md:py-0">
        <nav className="max-md:hidden frutiger-2 bg-[rgba(255,255,255,0.125)] border border-[rgba(255,255,255,0.5)] p-4 rounded-2xl min-w-32 shadow-[0px_6px_3px_rgba(0,0,0,0.2)]">
          <Image
            src={globe}
            alt="profile picture"
            width={480}
            height={480}
            className="max-md:hidden mb-4 border border-[rgba(255,255,255,0.5)] rounded-[8rem] shadow-[0px_6px_3px_rgba(0,0,0,0.2)]"
          />
          <ul className="flex flex-wrap md:flex-col md:flex-nowrap gap-4">
            <NavbarItem hook={homeRef} text="Home" />
            <NavbarItem hook={aboutRef} text="About me" />
            <NavbarItem hook={projectsRef} text="Project" />
            <NavbarItem hook={contactsRef} text="Contacts" />
          </ul>
        </nav>
        <div className="flex flex-col gap-6 page max-md:overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden rounded-2xl max-md:pb-2">
          <Header />
          <main className='flex flex-col gap-6 md:overflow-y-auto rounded-2xl [scrollbar-width:none] [&::-webkit-scrollbar]:hidden' >
            <Section hook={homeRef} title='Welcome' content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut tincidunt purus. Fusce risus eros, pretium ut augue quis, ornare tristique tortor. Nunc id turpis in nunc auctor pulvinar in ac metus. Mauris sit amet tincidunt neque. Morbi iaculis sem augue, et dictum lacus commodo vel. Aenean ultricies tellus ut tellus ullamcorper viverra. Maecenas vel aliquet est. Praesent efficitur augue a ante lobortis, sed tristique eros tempor. Nulla mattis nulla sed commodo pellentesque. Nam tristique tincidunt dui, non hendrerit mauris sodales et. Morbi ut velit quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras quis orci ac lectus viverra dictum vitae quis augue. Sed iaculis nisl volutpat metus eleifend, eu posuere augue finibus. Vivamus consequat nibh nisl, sit amet vestibulum eros cursus ac. Etiam scelerisque laoreet rutrum. Donec ac massa dolor. Nunc in tortor elit. Nulla et blandit diam, ac lacinia odio.'/>
            <Section hook={aboutRef} title='About me' content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut tincidunt purus. Fusce risus eros, pretium ut augue quis, ornare tristique tortor. Nunc id turpis in nunc auctor pulvinar in ac metus. Mauris sit amet tincidunt neque. Morbi iaculis sem augue, et dictum lacus commodo vel. Aenean ultricies tellus ut tellus ullamcorper viverra. Maecenas vel aliquet est. Praesent efficitur augue a ante lobortis, sed tristique eros tempor. Nulla mattis nulla sed commodo pellentesque. Nam tristique tincidunt dui, non hendrerit mauris sodales et. Morbi ut velit quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras quis orci ac lectus viverra dictum vitae quis augue. Sed iaculis nisl volutpat metus eleifend, eu posuere augue finibus. Vivamus consequat nibh nisl, sit amet vestibulum eros cursus ac. Etiam scelerisque laoreet rutrum. Donec ac massa dolor. Nunc in tortor elit. Nulla et blandit diam, ac lacinia odio.'/>
            <Section hook={projectsRef} title='Projects' content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut tincidunt purus. Fusce risus eros, pretium ut augue quis, ornare tristique tortor. Nunc id turpis in nunc auctor pulvinar in ac metus. Mauris sit amet tincidunt neque. Morbi iaculis sem augue, et dictum lacus commodo vel. Aenean ultricies tellus ut tellus ullamcorper viverra. Maecenas vel aliquet est. Praesent efficitur augue a ante lobortis, sed tristique eros tempor. Nulla mattis nulla sed commodo pellentesque. Nam tristique tincidunt dui, non hendrerit mauris sodales et. Morbi ut velit quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras quis orci ac lectus viverra dictum vitae quis augue. Sed iaculis nisl volutpat metus eleifend, eu posuere augue finibus. Vivamus consequat nibh nisl, sit amet vestibulum eros cursus ac. Etiam scelerisque laoreet rutrum. Donec ac massa dolor. Nunc in tortor elit. Nulla et blandit diam, ac lacinia odio.'/>
            <Section hook={contactsRef} title='Contacts' content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut tincidunt purus. Fusce risus eros, pretium ut augue quis, ornare tristique tortor. Nunc id turpis in nunc auctor pulvinar in ac metus. Mauris sit amet tincidunt neque. Morbi iaculis sem augue, et dictum lacus commodo vel. Aenean ultricies tellus ut tellus ullamcorper viverra. Maecenas vel aliquet est. Praesent efficitur augue a ante lobortis, sed tristique eros tempor. Nulla mattis nulla sed commodo pellentesque. Nam tristique tincidunt dui, non hendrerit mauris sodales et. Morbi ut velit quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras quis orci ac lectus viverra dictum vitae quis augue. Sed iaculis nisl volutpat metus eleifend, eu posuere augue finibus. Vivamus consequat nibh nisl, sit amet vestibulum eros cursus ac. Etiam scelerisque laoreet rutrum. Donec ac massa dolor. Nunc in tortor elit. Nulla et blandit diam, ac lacinia odio.'/>
          </main>
        </div>
      </div>
    </div>
  );
}

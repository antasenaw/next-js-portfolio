import MobileNavbar from "./MobileNavbar"
import { RefProps } from "@/app/page"

const Header = ({ homeRef, aboutRef, projectsRef, contactsRef }: RefProps) => {
  return (
    <>
    <header>
      <div className='bg-[rgba(255,255,255,0.125)] border border-[rgba(255,255,255,0.5)] p-6 rounded-2xl shadow-[0px_6px_3px_rgba(0,0,0,0.2)] frutiger'>
        <h1 className='text-[1.25rem] md:text-[2rem] font-bold'>Muhammad Iqbal Nugraha</h1>
        <p>Junior Fullstack Developer</p>
      </div>
      <MobileNavbar homeRef={homeRef} aboutRef={aboutRef} projectsRef={projectsRef} contactsRef={contactsRef}/>
    </header>
    </>
  )
}

export default Header
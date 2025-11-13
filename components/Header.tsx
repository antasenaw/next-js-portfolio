import MobileNavbar from "./MobileNavbar"
import { RefProps } from "@/app/page"

const Header = ({ homeRef, aboutRef, projectsRef, contactsRef }: RefProps) => {
  return (
    <>
    <header>
      <div className='general-style py-4 px-6 md:p-6 frutiger'>
        <h1 className='text-[1.25rem] md:text-[2rem] font-bold'>Muhammad Iqbal Nugraha</h1>
        <p>Junior Fullstack Developer</p>
      </div>
      <MobileNavbar homeRef={homeRef} aboutRef={aboutRef} projectsRef={projectsRef} contactsRef={contactsRef}/>
    </header>
    </>
  )
}

export default Header
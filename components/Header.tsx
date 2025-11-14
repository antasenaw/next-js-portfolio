import MobileNavbar from "./MobileNavbar"

const Header = () => {
  return (
    <>
    <header>
      <div className='general-style py-4 px-6 md:p-6 frutiger'>
        <h1 className='text-[1.25rem] md:text-[2rem] font-bold'>Muhammad Iqbal Nugraha</h1>
        <p>Junior Fullstack Developer</p>
      </div>
        <MobileNavbar/>
    </header>
    </>
  )
}

export default Header
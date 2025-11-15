"use client"
import React from 'react';
import Image from 'next/image';
import favicon from '@/app/favicon.ico';
import { useRefContext } from '../hooks/NavigationRefContext'

interface SectionProps {
  hook: React.RefObject<HTMLDivElement | null>,
  // title: string,
  // content: React.ReactNode
  children: React.ReactNode
}

const Section = ({ hook, /*title, content*/ children }: SectionProps) => {
  return (
    <section ref={hook} className='flex flex-col gap-4 md:gap-6'>
      {/* <h2 className='general-style frutiger text-center text-[1.125rem] md:text-2xl font-bold p-1 md:p-2'>{title}</h2> */}
      <div className='general-style frutiger-2 p-2'>
        <div className='bg-[rgba(255,255,255,0.1)] rounded-2xl border border-[rgba(255,255,255,0.1)] p-4 backdrop-blur-xs'>
          {children}
        </div>
      </div>
    </section>
  );
}

const HomeContent = () => {
  return (
    <>
      <p className='text-2xl'>Hi, i&apos;m</p>
      <h1 className='text-[2rem] font-bold mb-2'>Muhammad Iqbal Nugraha</h1>
      <p>A Junior Full-Stack Developer Building Modern, Scalable Web Applications.<br />Bringing robust back-end logic and clean, responsive front-end design to life.</p>
    </>
  );
}

const TECH_LIST = ['HTML', 'CSS', 'JavaScript', 'Nodejs', 'Express', 'Reactjs', 'Tailwind', 'TypeScript', 'Nextjs', 'MongoDB', 'REST API', 'Git', 'Vercel', 'Jest'];
const getLogoPath = (techName: string) => {
    return `/icons/${techName}.svg`; 
};

const AboutContent = () => {
  return (
    <>
      <h2 className='font-bold text-2xl mb-3 '>About me</h2>
      <p className='mb-3'>As a Junior Full-Stack Developer, I specialize in crafting high-performance, user-centric, and scalable web applications. My comprehensive approach leverages a mastery of core web technologies (HTML, CSS, JavaScript) as the foundation for modern development. I am proficient across the full JavaScript stack, utilizing the powerful Next.js ecosystem (with serverless capabilities) or the traditional MERN Stack (React, Node.js/Express) to deliver robust solutions. I champion maintainable, type-safe code using TypeScript and ensure responsive, polished UI/UX on every project with Tailwind CSS, centralizing data management with MongoDB.</p>
      <h3 className='font-bold text-[1.25rem] mb-5'>Skills and Technologies</h3>
      <div className='grid md:grid-cols-7 grid-cols-3 gap-4'>
        {TECH_LIST.map((slug, i) => {
          let techNameDisplay = slug.charAt(0) + slug.slice(1).replace('js', '.js');
          if (techNameDisplay === 'Git') {
            techNameDisplay = 'Git/GitHub';
          }
          return (
            <div 
              className='flex flex-col frutiger-2 items-center general-style p-2 hover:font-bold active:font-bold active:scale-95 hover:scale-110 transition duration-200 ease-in-out' 
              key={i}
            >
              <Image
                src={getLogoPath(slug)}
                alt={`${techNameDisplay} logo`}
                width={48}
                height={48}
                className='my-1'
              />
              {techNameDisplay}
            </div>
          );
        })}
      </div>
    </>
  );
}

const Main = () => {
  const { homeRef, aboutRef, projectsRef, contactsRef } = useRefContext();
  return (
    <main className='flex flex-col gap-4 overflow-y-auto rounded-2xl [scrollbar-width:none] [&::-webkit-scrollbar]:hidden max-md:pb-2' >
      <Section hook={homeRef} /*title='Welcome'*/>
        <HomeContent/>
      </Section>

      <Section hook={aboutRef} /*title='About me'*/>
        <AboutContent />
      </Section>

      <Section hook={projectsRef}>
        <>
          <h2 className='font-bold text-2xl mb-2'>Projects</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 p-4'>
            <div className='group relative general-style frutiger-2 p-2 active:scale-98 hover:scale-105 transition duration-200 ease-in-out'>
              <Image
                src={favicon}
                alt='memek'
                width={360}
                className='rounded-2xl border border-[rgba(255,255,255,0.1)] p-2 backdrop-blur-xs'
              />
              <div className='hidden group-hover:block absolute inset-0 bg-[rgba(255,255,255,0.25)] rounded-2xl border border-[rgba(255,255,255,0.1)] p-4 backdrop-blur-xl z-10'>
                <h3 className='font-bold text-[1.25rem]'>Project name</h3>
                <p>Project description</p>
              </div>
            </div>
            <div className='general-style frutiger-2 p-2 active:scale-90 hover:scale-105 transition duration-200 ease-in-out'>
              <Image
                src={favicon}
                alt='memek'
                width={360}
                className='rounded-2xl border border-[rgba(255,255,255,0.1)] p-2 backdrop-blur-xs'
              />
            </div>
            <div className='general-style frutiger-2 p-2 active:scale-90 hover:scale-105 transition duration-200 ease-in-out'>
              <Image
                src={favicon}
                alt='memek'
                width={360}
                className=' rounded-2xl border border-[rgba(255,255,255,0.1)] p-2 backdrop-blur-xs'
              />
            </div>
            <div className='general-style frutiger-2 p-2 active:scale-90 hover:scale-105 transition duration-200 ease-in-out'>
              <Image
                src={favicon}
                alt='memek'
                width={360}
                className=' rounded-2xl border border-[rgba(255,255,255,0.1)] p-2 backdrop-blur-xs'
              />
            </div>
          </div>
        </>
      </Section>

      <Section hook={contactsRef} /*title='Contacts'*/>
        <>
          <h2 className='font-bold text-2xl mb-3'>Contacts</h2>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut tincidunt purus. Fusce risus eros, pretium ut augue quis, ornare tristique tortor. Nunc id turpis in nunc auctor pulvinar in ac metus. Mauris sit amet tincidunt neque. Morbi iaculis sem augue, et dictum lacus commodo vel. Aenean ultricies tellus ut tellus ullamcorper viverra. Maecenas vel aliquet est. Praesent efficitur augue a ante lobortis, sed tristique eros tempor. Nulla mattis nulla sed commodo pellentesque. Nam tristique tincidunt dui, non hendrerit mauris sodales et. Morbi ut velit quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras quis orci ac lectus viverra dictum vitae quis augue. Sed iaculis nisl volutpat metus eleifend, eu posuere augue finibus. Vivamus consequat nibh nisl, sit amet vestibulum eros cursus ac. Etiam scelerisque laoreet rutrum. Donec ac massa dolor. Nunc in tortor elit. Nulla et blandit diam, ac lacinia odio.
        </>
      </Section>
    </main>
  )
}

export default Main
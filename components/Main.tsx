import React from 'react';
import { RefProps } from '@/app/page';

interface SectionProps {
  hook: React.RefObject<HTMLDivElement | null>,
  title: string,
  content: string
}

const Section = ({ hook, title, content }: SectionProps) => {
  return (
    <section ref={hook} className='flex flex-col gap-4 md:gap-6'>
      <h2 className='general-style frutiger text-center text-[1.125rem] md:text-2xl font-bold p-1 md:p-2'>{title}</h2>
      <div className='general-style frutiger-2 p-2 md:p-4'>
        <p className='general-style p-4 backdrop-blur-lg'>{content}</p>
      </div>
    </section>
  )
  
}

const Main = ({ homeRef, aboutRef, projectsRef, contactsRef }: RefProps) => {
  return (
    <main className='flex flex-col gap-4 md:gap-6 overflow-y-auto rounded-2xl [scrollbar-width:none] [&::-webkit-scrollbar]:hidden max-md:pb-2' >
      <Section hook={homeRef} title='Welcome' content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut tincidunt purus. Fusce risus eros, pretium ut augue quis, ornare tristique tortor. Nunc id turpis in nunc auctor pulvinar in ac metus. Mauris sit amet tincidunt neque. Morbi iaculis sem augue, et dictum lacus commodo vel. Aenean ultricies tellus ut tellus ullamcorper viverra. Maecenas vel aliquet est. Praesent efficitur augue a ante lobortis, sed tristique eros tempor. Nulla mattis nulla sed commodo pellentesque. Nam tristique tincidunt dui, non hendrerit mauris sodales et. Morbi ut velit quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras quis orci ac lectus viverra dictum vitae quis augue. Sed iaculis nisl volutpat metus eleifend, eu posuere augue finibus. Vivamus consequat nibh nisl, sit amet vestibulum eros cursus ac. Etiam scelerisque laoreet rutrum. Donec ac massa dolor. Nunc in tortor elit. Nulla et blandit diam, ac lacinia odio.'/>
      <Section hook={aboutRef} title='About me' content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut tincidunt purus. Fusce risus eros, pretium ut augue quis, ornare tristique tortor. Nunc id turpis in nunc auctor pulvinar in ac metus. Mauris sit amet tincidunt neque. Morbi iaculis sem augue, et dictum lacus commodo vel. Aenean ultricies tellus ut tellus ullamcorper viverra. Maecenas vel aliquet est. Praesent efficitur augue a ante lobortis, sed tristique eros tempor. Nulla mattis nulla sed commodo pellentesque. Nam tristique tincidunt dui, non hendrerit mauris sodales et. Morbi ut velit quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras quis orci ac lectus viverra dictum vitae quis augue. Sed iaculis nisl volutpat metus eleifend, eu posuere augue finibus. Vivamus consequat nibh nisl, sit amet vestibulum eros cursus ac. Etiam scelerisque laoreet rutrum. Donec ac massa dolor. Nunc in tortor elit. Nulla et blandit diam, ac lacinia odio.'/>
      <Section hook={projectsRef} title='Projects' content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut tincidunt purus. Fusce risus eros, pretium ut augue quis, ornare tristique tortor. Nunc id turpis in nunc auctor pulvinar in ac metus. Mauris sit amet tincidunt neque. Morbi iaculis sem augue, et dictum lacus commodo vel. Aenean ultricies tellus ut tellus ullamcorper viverra. Maecenas vel aliquet est. Praesent efficitur augue a ante lobortis, sed tristique eros tempor. Nulla mattis nulla sed commodo pellentesque. Nam tristique tincidunt dui, non hendrerit mauris sodales et. Morbi ut velit quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras quis orci ac lectus viverra dictum vitae quis augue. Sed iaculis nisl volutpat metus eleifend, eu posuere augue finibus. Vivamus consequat nibh nisl, sit amet vestibulum eros cursus ac. Etiam scelerisque laoreet rutrum. Donec ac massa dolor. Nunc in tortor elit. Nulla et blandit diam, ac lacinia odio.'/>
      <Section hook={contactsRef} title='Contacts' content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut tincidunt purus. Fusce risus eros, pretium ut augue quis, ornare tristique tortor. Nunc id turpis in nunc auctor pulvinar in ac metus. Mauris sit amet tincidunt neque. Morbi iaculis sem augue, et dictum lacus commodo vel. Aenean ultricies tellus ut tellus ullamcorper viverra. Maecenas vel aliquet est. Praesent efficitur augue a ante lobortis, sed tristique eros tempor. Nulla mattis nulla sed commodo pellentesque. Nam tristique tincidunt dui, non hendrerit mauris sodales et. Morbi ut velit quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras quis orci ac lectus viverra dictum vitae quis augue. Sed iaculis nisl volutpat metus eleifend, eu posuere augue finibus. Vivamus consequat nibh nisl, sit amet vestibulum eros cursus ac. Etiam scelerisque laoreet rutrum. Donec ac massa dolor. Nunc in tortor elit. Nulla et blandit diam, ac lacinia odio.'/>
    </main>
  )
}

export default Main
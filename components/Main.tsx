import React from 'react'

interface SectionProps {
  title: string,
  content: string
}

const Section = ({ title, content }: SectionProps) => {
  return (
    <section className='flex flex-col gap-4'>
      <h2 className='text-center text-2xl font-bold bg-[rgba(255,255,255,0.125)] border border-[rgba(255,255,255,0.5)] rounded-2xl p-2'>{title}</h2>
      <div className='bg-[rgba(255,255,255,0.125)] border border-[rgba(255,255,255,0.5)] rounded-2xl p-2'>
        <p className='bg-[rgba(255,255,255,0.125)] border border-[rgba(255,255,255,0.5)] rounded-2xl p-4'>{content}</p>
      </div>
    </section>
  )
}

const Main = () => {
  return (
    <main className='flex flex-col gap-4 overflow-auto rounded-2xl'>
      <Section title='Welcome' content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut tincidunt purus. Fusce risus eros, pretium ut augue quis, ornare tristique tortor. Nunc id turpis in nunc auctor pulvinar in ac metus. Mauris sit amet tincidunt neque. Morbi iaculis sem augue, et dictum lacus commodo vel. Aenean ultricies tellus ut tellus ullamcorper viverra. Maecenas vel aliquet est. Praesent efficitur augue a ante lobortis, sed tristique eros tempor. Nulla mattis nulla sed commodo pellentesque. Nam tristique tincidunt dui, non hendrerit mauris sodales et. Morbi ut velit quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras quis orci ac lectus viverra dictum vitae quis augue. Sed iaculis nisl volutpat metus eleifend, eu posuere augue finibus. Vivamus consequat nibh nisl, sit amet vestibulum eros cursus ac. Etiam scelerisque laoreet rutrum. Donec ac massa dolor. Nunc in tortor elit. Nulla et blandit diam, ac lacinia odio.'/>
      <Section title='About me' content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut tincidunt purus. Fusce risus eros, pretium ut augue quis, ornare tristique tortor. Nunc id turpis in nunc auctor pulvinar in ac metus. Mauris sit amet tincidunt neque. Morbi iaculis sem augue, et dictum lacus commodo vel. Aenean ultricies tellus ut tellus ullamcorper viverra. Maecenas vel aliquet est. Praesent efficitur augue a ante lobortis, sed tristique eros tempor. Nulla mattis nulla sed commodo pellentesque. Nam tristique tincidunt dui, non hendrerit mauris sodales et. Morbi ut velit quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras quis orci ac lectus viverra dictum vitae quis augue. Sed iaculis nisl volutpat metus eleifend, eu posuere augue finibus. Vivamus consequat nibh nisl, sit amet vestibulum eros cursus ac. Etiam scelerisque laoreet rutrum. Donec ac massa dolor. Nunc in tortor elit. Nulla et blandit diam, ac lacinia odio.'/>
      <Section title='Projects' content='Lorem ipsum'/>
      <Section title='Contacts' content='Lorem ipsum'/>
    </main>
  )
}

export default Main
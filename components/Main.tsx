import React from 'react'

interface SectionProps {
  title: string,
  content: string
}

const Section = ({ title, content }: SectionProps) => {
  return (
    <section className='flex flex-col gap-4'>
      <h2 className='text-center'>{title}</h2>
      <p>{content}</p>
    </section>
  )
}

const Main = () => {
  return (
    <main className='flex flex-col gap-4 border-2 border-amber-50'>
      <Section title='Welcome' content='Lorem ipsum'/>
      <Section title='About me' content='Lorem ipsum'/>
      <Section title='Projects' content='Lorem ipsum'/>
      <Section title='Contacts' content='Lorem ipsum'/>
    </main>
  )
}

export default Main
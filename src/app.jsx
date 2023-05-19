import React from 'react'
import { NavBar, Section, Hero, Work, About } from '@layouts'

const App = () => {
  return (
    <div className="app" id="app">
      <Section isSticky>
        <NavBar />
      </Section>
      <Section>
        <Hero />
      </Section>
      <Section>
        <Work />
      </Section>
      <Section>
        <About />
      </Section>
    </div>
  )
}

export default App

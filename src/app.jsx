import React from 'react'
import { NavBar, Section, Hero } from '@layouts'

const App = () => {
  return (
    <div className="app" id="app">
      <Section isSticky>
        <NavBar />
      </Section>
      <Section>
        <Hero />
      </Section>
    </div>
  )
}

export default App

import React from 'react'
import {
  NavBar,
  Section,
  Display,
  Hero,
  Work,
  About,
  Contact,
  Extra,
  Footer,
} from '@layouts'

const App = () => {
  return (
    <div className="app" id="app">
      <Section htmlId="display">
        <Display />
      </Section>
      <Section isSticky>
        <NavBar />
      </Section>
      <Section htmlId="hero">
        <Hero />
      </Section>
      <Section htmlId="about">
        <About associatedId="about" />
      </Section>
      <Section htmlId="work">
        <Work associatedId="work" />
      </Section>
      <Section htmlId="contact">
        <Contact associatedId="contact" />
      </Section>
      <Section htmlId="extra">
        <Extra />
      </Section>
      <Section>
        <Footer />
      </Section>
    </div>
  )
}

export default App

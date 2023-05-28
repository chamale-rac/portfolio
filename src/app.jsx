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
      <Section>
        <Display />
      </Section>

      <Section isSticky>
        <NavBar />
      </Section>

      <Section htmlId="hero">
        <Hero />
      </Section>

      <Section htmlId="about">
        <About />
      </Section>

      <Section htmlId="work">
        <Work />
      </Section>

      <Section htmlId="contact">
        <Contact />
      </Section>

      <Section>
        <Extra />
      </Section>

      <Section>
        <Footer />
      </Section>
    </div>
  )
}

export default App

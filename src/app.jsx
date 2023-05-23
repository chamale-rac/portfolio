import React from 'react'
import {
  NavBar,
  Section,
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
      <Section isSticky>
        <NavBar />
      </Section>

      <Section>Display...</Section>

      <Section>
        <Hero />
      </Section>

      <Section>
        <Work />
      </Section>

      <Section>
        <About />
      </Section>

      <Section>
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

import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Experience } from './components/Experience'
import { Education } from './components/Education'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { useActiveSection } from './hooks/useActiveSection'

function App() {
  const activeId = useActiveSection()

  return (
    <div className="min-h-svh">
      <Navbar activeId={activeId} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App

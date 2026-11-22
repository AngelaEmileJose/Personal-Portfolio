import Header from "./components/Header"
import Hero from "./components/Hero"
import AtAGlance from "./components/AtAGlance"
import Projects from "./components/Projects"
import About from "./components/About"
import WorkExperience from "./components/WorkExperience"
import Hobbies from "./components/Hobbies"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1">
        <Hero />
        <AtAGlance />
        <Projects />
        <About />
        <WorkExperience />
        <Hobbies />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

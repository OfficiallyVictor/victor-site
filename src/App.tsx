import About from "./Components/About"
import Contact from "./Components/Contact"
import Education from "./Components/Education"
import Footer from "./Components/Footer"
import Hero from "./Components/Hero"
import Nav from "./Components/Nav"
import Skills from "./Components/Skills"
import { motion } from 'framer-motion'

const App = () => {
  const animate = {
    hidden:{
      opacity: 0,

    },
    visible:{
      opacity: 1,
      transition:{
        duration: 2
      }
    }
  }
  return (
    <motion.div className="" variants={animate} initial='hidden' animate='visible'>
      <Nav />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Contact />
      <Footer />
    </motion.div>
  )
}

export default App
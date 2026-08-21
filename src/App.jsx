import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import PhoneMock from './components/PhoneMock'
import HowItWorks from './components/HowItWorks'
import AboutUs from './components/AboutUs'
import Surveys from './components/Surveys'
import Waitlist from './components/Waitlist'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )

    const elements = document.querySelectorAll('.reveal')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <PhoneMock />
        <HowItWorks />
        <AboutUs />
        <Surveys />
        <Waitlist />
      </main>
      <Footer />
    </>
  )
}

export default App

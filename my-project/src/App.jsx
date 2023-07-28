import Teams from "./components/Teams"
import Footer from "./components/hcomp/Footer"
import Hero from "./components/hcomp/Hero"
import Ideas from "./components/hcomp/Ideas"
import Knowledge from "./components/hcomp/Knowledge"
import Navbar from "./components/hcomp/Navbar"
import Reviews from "./components/hcomp/Reviews"
import Templates from "./components/hcomp/Templates"
import Thrive from "./components/hcomp/Thrive"



function App() {

  return (
    <>
    <Navbar />
    <Hero/>
    <Teams />
    <Knowledge />
    <Templates/>
    <Ideas />
    <Reviews />
    <Thrive />
    <Footer />
    
    </>
  )
}

export default App

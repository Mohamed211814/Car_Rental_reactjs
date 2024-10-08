import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero';
import "aos/dist/aos.css";
import AOS  from 'aos';
import About from './components/About/About';
import Services from './components/services/Services';
import CarList from './components/CarList/CarList';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';


function App() {

  const [theme , setTheme] = useState(localStorage.getItem("theme") ? 
    localStorage.getItem("theme") : "light"
  )

  const element = document.documentElement;

  useEffect(() => {

    // DARK MOOD FEATURE
    if(theme === "dark"){
      element.classList.add("dark")
      localStorage.setItem("theme" , "dark")
    }else{
      element.classList.remove("dark")
      localStorage.setItem("theme" , "light")
    }
  } , [theme])

  // AOS INITIALIZATION

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });

    AOS.refresh();
  },[]);

  return (
    <div>
      <Navbar theme={theme} setTheme={setTheme}/>
      <Hero />
      <About />
      <Services />
      <CarList />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
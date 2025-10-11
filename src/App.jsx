import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import React, { useEffect} from "react";

import phoneIcon from './assets/icons8-phone-100.png';
import whatsappIcon from './assets/icons8-whatsapp.svg';
// import image from './assets/josephinejerome.jpeg';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);



import { Helmet } from "react-helmet-async";




//  <img src="/Image/josephinejeromepic.jpeg" alt="web developer picture" id="web-dev-img" />
function App() {
  useEffect(() => {
    // Animate .box on scroll
    gsap.from(".box", {
      scrollTrigger: {
        trigger: ".box",
        start: "top 80%", // when top of .box hits 80% of viewport
        toggleActions: "play none none reverse"
      },
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power2.out"
    });
    // gsap.from(".footer-p", {
    //   scrollTrigger: {
    //     trigger: ".footer-p",
    //     start: "top 90%"
    //   },
    //   opacity: 0,
    //   duration: 2
    // });

    gsap.from(".first-section", {
      scrollTrigger: {
        trigger: ".first-section",
        start: "top 85%"
      },
      x: 100,
      opacity: 0,
      duration: 3,
      ease: "power2.out"
    });
    gsap.from(".dp", {
      scrollTrigger: {
        trigger: ".dp",
        start: "top 80%"
      },
      scale: 0.5,
      opacity: 0,
      duration: 1
    });
  }, []);










  useEffect(() => {
    AOS.init({ duration: 3000, once: true });
  }, []);
  


  const [open, setOpen] = useState(false);


  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    onScroll(); // set initial state
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <Helmet>
        <title>Josephine Jerome | Frontend Developer in Nigeria</title>
        <meta
          name="description"
          content="Hi, I'm Josephine Jerome — a frontend developer in Nigeria. I build fast, responsive, and modern React apps with clean UI."/>
        <link rel="canonical" href="https://josephines-portfolio.vercel.app/"/>
      </Helmet>


    </>
  )
}

export default App

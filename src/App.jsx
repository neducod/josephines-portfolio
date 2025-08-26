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
    <header id='myHeader' className={isScrolled ? 'scrolled' : ''}>
      <nav>
        <div className="nav-h">
                  <h1><a href="#"   data-aos="fade-zoom-in">Josephine Jerome</a></h1>
              </div>
              <div id="nav-links" className={open ? 'show' : ''}>
                  <ul>
                      <li><a href="#mesection" id="about"  data-aos="zoom-out" data-aos-duration="3000">About</a></li>
                      <li><a href="#projects" data-aos="zoom-out-up" data-aos-duration="2000">Projects</a></li>
                      <li><a href="#contactme" data-aos="zoom-in" data-aos-duration="3000">Contact</a></li>
                      <li><a href="https://josephinesociallinks.vercel.app/" data-aos="zoom-out" data-aos-duration="2000">Socials</a></li>
                  </ul>
              </div>
              <div className="hamburger" id="hamburger"  
        aria-label="Toggle menu"
        aria-controls="nav-links"
        aria-expanded={open}
        onClick={() => setOpen(v => !v)}  >
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
              </div> 
      </nav>
    </header>

    <div className="hero-frame">
      <p className="tagline">The Web Alchemist</p>
      <h1>Hello, I'm <span>Josephine Jerome</span></h1>
      <p className="description">
        A Creative Frontend Developer passionate about crafting sleek, responsive, and intuitive digital experiences that make a lasting impression.
      </p>
      <div className="cta-buttons">
        <button className="primary-btn">
        <a href="/Josephine Jerome CV.pdf" target="_blank" rel="noopener noreferrer" download>Hire Me</a>
        </button>
        <button className="secondary-btn">
          <a href="https://calendly.com/josephinejerome/30min" >Book a Call</a>
        </button>
      </div>
    </div>


    {/* <div className="hero">
      <div className="hero-text">
        <div className="hero-text-h4">
          <h5>Frontend Developer</h5>
        </div>
        <h1>Hi, I am Josephine</h1>
        <p>I love building clean code &amp; charming designs one pixel at a time.</p>
        <p>Let’s build something beautiful together.</p>
        <div className="hero-btns">
          
          <a href="#">
            <button>Book a Call</button>
          </a>
          <a href="/Josephine Jerome CV.pdf" target="_blank" rel="noopener noreferrer" download>
            <button>My CV</button>
          </a>
        </div>
      </div>
      <div className="dp">
        <img src="/josephinejerome.jpeg" alt="web developer picture" id="web-dev-imgg" />
      </div>
    </div> */}


    {/* <div id="about-mobile" style={{display: "none"}}>
            <h4>A little about me :  </h4>
            <div className="about-mobile-a">
                <p>I graduated from AltSchool Africa in 2024 and am currently expanding my knowledge while building real-world projects to strengthen my skills.</p>
                <p>I specialize in front-end development, using technologies such as HTML, CSS, JavaScript, and I am currently learning React to create functional web interfaces.</p>
            </div>
            <div className="about-mobile-aa">
                <h4>My Mission</h4>
                <p>As I grow in my web development journey, my mission is to build meaningful, accessible web experiences, tackle real-world challenges, and grow into a versatile developer making a positive impact through technology.</p>
                <p>I am actively pursuing internship opportunities, freelance projects, and collaborations to gain practical experience, enhance my portfolio, and build connections with professionals.</p>
            </div>
    </div> */}
{/* 
    <div id="about">
        <h4>A little about me :  </h4>

        <div className="about">
            <div className="about-text">
                <div className="first-section" id="first-section-a">
                    <p>I graduated from AltSchool Africa in 2024 and am currently expanding my knowledge while building real-world projects to strengthen my skills.</p>
                    <p>I specialize in front-end development, using technologies such as HTML, CSS, JavaScript, and I am currently learning React to create functional web interfaces.</p>
                </div>  <br/>
                <div className="first-section" id="first-section-b">
                    <h1>My Mission</h1>
                    <p>As I grow in my web development journey, my mission is to build meaningful, accessible web experiences, tackle real-world challenges, and grow into a versatile developer making a positive impact through technology.</p>
                    <p>I am actively pursuing internship opportunities, freelance projects, and collaborations to gain practical experience, enhance my portfolio, and build connections with professionals.</p>
                </div> <br/>
                <div className="first-section" id="first-section-c">
                   <div className="card_content">
                        <h1>My Hobbies</h1>
                        <p>When I am not coding;</p>
                        <div className="first-sectionn">
                            <p>˚.🎀༘⋆ I am cooking,</p> 
                            <p>˚.🎀༘⋆Knitting,</p>
                            <p>˚.🎀༘⋆Reading,</p>
                            <p>˚.🎀༘⋆Listening to music</p> 
                            <p className="w48">˚.🎀༘⋆Designing on canva,</p>
                            <p className="w48">˚.🎀༘⋆Spending time with the people that matters a lot to me.</p>
                        </div>
                   </div>
                </div>
            </div>
        </div>
    </div> */}

    <div className="me-section" id='mesection' >
      <div>
        <h3 className='me-section-h2'  data-aos="flip-left">About Josephine</h3>
        <div data-aos="fade-up-right">
          <h2>Frontend Developer</h2>
          <p>Hello! I'm Josephine, a creative and detail-oriented Front-End Developer passionate about transforming ideas into smooth, engaging user experiences. I work with HTML, CSS, JavaScript, and React to build responsive websites, and I’m constantly learning new skills to improve my craft!</p>
        </div>
        <div data-aos="fade-down-right">
          <h2>Formal Education</h2>
          <ul>
            <li>Altschool Africa Software engineer graduate</li>
          </ul>
        </div>
        <div data-aos="fade-up-right">
          <h2>My Mission</h2>
          <p>To deliver high-quality, responsive, and visually appealing web applications that meet user needs while adhering to industry best practices and continuous learning.</p>
        </div>
        <div id='about' data-aos="fade-down-right">
          <h2>My Vision</h2>
          <p>To establish myself as a proficient Front-End Developer dedicated to building responsive, user-centric web solutions that enhance digital experiences while continuously advancing my technical expertise</p>
        </div>
      </div>
      <div className='me-section-two' data-aos="fade-up-left">
        <div className="me-section-two-one">
          <div className='me-section-two-onee'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-code w-16 h-16 mx-auto mb-4 text-kawaii-yellow"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
            <p>Frontend Developer</p>
          </div>
        </div>
      </div>
    </div>

    <div className="service-offer">
      <h2>Services I offer</h2>
      <p>Here are some of the services I offer as a detail-oriented frontend developer</p>
      <div className='service-offer-content'>
        <div data-aos="fade-down-right" id='soc'>
          <h3>RESPONSIVE WEBSITE DEVELOPMENT</h3>
          <p>I build responsive modern mobile-first websites that looks good on any device and screen size</p>
        </div>
        <div data-aos="flip-left" data-aos-duration="2000">
          <h3>WEB DEVELOPMENT</h3>
          <p>Turning Figma or design mockups into pixel-perfect, interactive interfaces.</p>
        </div>
        <div data-aos="flip-left" 
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000">
          <h3>INTERGRATION</h3>
          <p>
              Connecting the frontend with backend services to fetch and display data, and to submit user-generated data back to the server.</p>
        </div>
        <div data-aos="fade-down-right" id='socc'>
          <h3>CONTINIOUS LEARNING</h3>
          <p>Staying updated with the latest frontend technologies, trends, and best practices to deliver modern and innovative solutions.</p>
        </div>
        <div data-aos="flip-left" data-aos-duration="2000">
          <h3>VERSION CONTROL</h3>
          <p>Using version control systems like Git/GitHub to collaborate with other developers and manage code changes effectively.</p>
        </div>
        <div data-aos="flip-left" 
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000">
          <h3>PERFORMANCE OPTIMIZATION</h3>
          <p>Speeding up websites with clean code, lazy loading, and best practices to ensure top performance</p>
        </div>
      </div>
    </div>

    <div id="projects">
      <h1>Projects</h1>
      <p>A collection of my recent work, showcasing problem-solving, design, and development skills</p>
      <div className="projects">
        <form className="form" data-aos="fade-down-right" id='formm'>
          <div className="form-content">
            <h4 className='p-one'>JStore</h4>
            <h5 className='p-two'>HTML + CSS3 + Vanilla Js</h5>
            <h6 className='p-three'>Static Online E-commerce website</h6>
                          <a
                href="https://neducod.github.io/thejstore/index.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Link
              </a>
          </div>
          {/* <div>
            <p>
              <a
                href="https://neducod.github.io/thejstore/index.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Link
              </a>
            </p>
          </div> */}
        </form>

        <div className="form" data-aos="flip-left" data-aos-duration="2000">
          <div className="form-content">
            <h4 className="p-one">Rad</h4>
            <h5 className="p-two">HTML5 + Tailwind CSS</h5>
            <h6 className="p-three">A modern minimalist landing page</h6>
            <a
                href="https://my-first-tailwind-webpage.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Link
              </a>
            {/* <p className="mySlides1">In this project, I explore my skills with tailwind </p> */}
          </div>
          {/* <div className="try">
            <p>
              <a
                href="https://my-first-tailwind-webpage.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Check it out 𓍢🌷͙
              </a>
            </p>
          </div> */}
        </div>

        <div className="form" data-aos="flip-left" 
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000">
          <div className="form-content">
            <h4 className="p-one">Recipe Tracker</h4>
            <h5 className="p-two">HTML + TailwindCSS + Vanilla Js + Firebase + API </h5>
            <h6 className="p-three">Save, edit, and organize meals with personal collections, and a responsive dashboard</h6>
            <a
                href="https://recipe-tracker-eight.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Link
              </a>
            {/* <p className="mySlides2">
              Discover and manage your favorite recipes effortlessly with our Recipe Tracker.
              Save, edit, and organize meals in one place. Upload images, create personal
              collections, and access your dashboard anytime.
            </p> */}
          </div>
          {/* <div>
            <p>
              <a
                href="https://recipe-tracker-eight.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Check it out 𓍢🌷
              </a>
            </p>
          </div> */}
        </div>

        <div className="form" data-aos="fade-right" data-aos-easing="ease-in-sine" id='formmd'>
          <div className="form-content">
            <h4 className="p-one">Birthday Countdown</h4>
            <h5 className="p-two">JavaScript</h5>
            <h6 className="p-three">Count down to your birthday</h6>
            <a
                href="https://neducod.github.io/birthday-countdown/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Link
              </a>
            {/* <p className="mySlides3">
              This is a birthday countdown app. Built with JavaScript
            </p> */}
          </div>
          {/* <div>
            <p>
              <a
                href="https://neducod.github.io/birthday-countdown/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Check it out 🌷͙
              </a>
            </p>
          </div> */}
        </div>
      </div>
    </div>


        <div id="skillstack" data-aos="zoom-in">
        <h2>✨My Tech Skills✨</h2>
        <p>I currently know how to work with...</p>
        <div className='skillstack-wrapper'>
            <div className="skillstack-testing">
                <div>
                    <h5>Frontend Skills</h5>
                    <ul>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>Javascript ES6+</li>
                    </ul>
                </div>
                <div>
                    <h5>Frameworks and Libraries</h5>
                    <ul>
                        <li>React</li>
                    </ul>
                </div>
                <div>
                    <h5>UI Frameworks</h5>
                    <ul>
                        <li>Tailwind CSS</li>
                    </ul>
                </div>
                <div>
                    <h5>Package Managers</h5>
                    <ul>
                        <li>Vite</li>
                        <li>npm / yarn / pnpm</li>
                    </ul>
                </div>
            </div>

            <div className="skillstack-test">
                <div>
                    <h5>Deployment</h5>
                    <ul>
                        <li>Netlify</li>
                        <li>Vercel</li>
                        <li>Firebase Hosting</li>
                        <li>GitHub Pages</li>
                    </ul>
                </div>
                <div>
                    <h5>Others</h5>
                    <ul>
                        <li>Firebase for backend</li>
                        <li>Figma; Convert design to code</li>
                        <li>Responsive Web Design</li>
                        <li>Git & GitHub (version control & collaboration)</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>


{/* 
    <div id="contact-me">
      <h1 id="h1">Reach Out</h1>
      <p id="p1">
        Have a project in mind or want to chat about coding? I am currently open
        to freelance work, internships, or collaborative projects
      </p>
      <p className="p1">
        Send me a message, let's create something amazing together!
      </p>

      <form id="contact-form" className="move" onSubmit={handleSubmit}>
        <label htmlFor="user_name">Your Name</label>
        <input
          type="text"
          name="name"
          id="user_name"
          placeholder="Josephine 🧸ྀི"
          required
          className="input"
          value={formData.name}
          onChange={handleChange}
        />

        <label htmlFor="user_email">Your Email</label>
        <input
          type="email"
          name="email"
          id="user_email"
          placeholder="Josephine@gmail.com 🧸ྀི"
          required
          className="input"
          value={formData.email}
          onChange={handleChange}
        />

        <label htmlFor="message">Your Message</label>
        <textarea
          name="message"
          id="message"
          placeholder="Hello, Engr Josephine..."
          required
          className="message"
          value={formData.message}
          onChange={handleChange}
        ></textarea>

        <button type="submit" className="contact-btn">
          Send Your Message 🌷
        </button>
      </form>

      {status && <p className="success-message">{status}</p>}

      <p>────୨ৎ────</p>

      <div className="contact-img-wrapper">
        <a href="https://wa.me/2348188136851" target="_blank" rel="noopener noreferrer">
          <img src={whatsappIcon} className="contact-img" alt="WhatsApp" />
        </a>
        <a href="tel:+2348188136851">
          <img src={phoneIcon} className="contact-img" alt="Phone" />
        </a>
      </div>

      <p>“I’ll try my best to respond within 24 hours. Looking forward to hearing from you!”</p>
    </div>

*/}
{/*
<div id="contact-me">

<div>

<h1 id="h1">Reach Out</h1>
<p id="p1">
  Have a project in mind or want to chat about coding? I am currently open to freelance work, internships, or collaborative projects
</p>
<p className="p1">Send me a message , let's create something amazing together!</p>
</div>
      <div>


        <form
          id="contact-form"
          className="move"
          action="https://formsubmit.co/nedunony16@gmail.com"
          method="POST"
        >
          <label htmlFor="user_name">Your Name</label>
          <input
            id="user_name"
            type="text"
            name="name"
            placeholder="Josephine 🧸ྀི"
            required
            className="input"
          />

          <label htmlFor="user_email">Your Email</label>
          <input
          id="user_email"
          type="email"
          name="email"
          placeholder="Josephine@gmail.com🧸ྀི"
          required
          className="input"
        />

        <label htmlFor="message">Your Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Hello, Engr Josephine..."
          required
          className="message"
        ></textarea>

        <input type="hidden" name="_captcha" value="false" />
        <input
        name="_captcha" 
        // value="false"
          type="hidden"
          value="https://neducod.github.io/test-page/"
          // name="_next"
          // value="https://neducod.github.io/josephine-portfolio/thankyou.html"
          // value="https://neducod.github.io/test-page/"
        />
        <input type="hidden" name="_subject" value="New message from your website" />
        <input type="hidden" name="_template" value="box" />

        <button type="submit" className="contact-btn">Send Your Message 🌷</button>
        </form>

      </div>

      <p>────୨ৎ────</p>

      <div className="contact-img-wrapper">
        <a href="https://wa.me/2348188136851" target="_blank" rel="noreferrer noopener">
          <img src={whatsappIcon} alt="WhatsApp" className="contact-img"  />
        </a>
        <a href="tel:+2348188136851">
          <img src={phoneIcon} alt="Phone" className="contact-img" />
        </a>
      </div>

      <p>“I’ll try my best to respond within 24 hours. Looking forward to hearing from you!”</p> 
    </div>
    */}






    <div className="contact-form" id='contactme'>
      <div data-aos="fade-right">
        <h1 className='contact-form-h1' data-aos="fade-down-right">Reach Out</h1>
        <p className='contact-form-p'>Have a project in mind or want to chat about coding? I am currently open to freelance work, internships, or collaborative projects</p>
        <p className='contact-form-p'  data-aos="fade-up-right">Send a message let's create something awesome together!</p>
      </div>
      <div data-aos="zoom-in-left">

      <form
          id="contact-form"
          className="move"
          action="https://formsubmit.co/nedunony16@gmail.com"
          method="POST"
        >
          <label htmlFor="user_name">Your Name</label>
          <input
            id="user_name"
            type="text"
            name="name"
            placeholder="Your name"
            required
            className="input"
          />

          <label htmlFor="user_email">Your Email</label>
          <input
          id="user_email"
          type="email"
          name="email"
          placeholder="Your email"
          required
          className="input"
        />

        <label htmlFor="message">Your Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Your message..."
          required
          className="message"
        ></textarea>

        <input type="hidden" name="_captcha" value="false" />
        <input
        name="_captcha" 
        // value="false"
          type="hidden"
          value="https://neducod.github.io/test-page/"
          // name="_next"
          // value="https://neducod.github.io/josephine-portfolio/thankyou.html"
          // value="https://neducod.github.io/test-page/"
        />
        <input type="hidden" name="_subject" value="New message from your website" />
        <input type="hidden" name="_template" value="box" />

        <button type="submit" className="contact-btn">Send Your Message </button>
        </form>
      </div>
    </div>






      <footer>
      <div id="footer-icons">
        <h6>Let's Connect</h6>
        <p>────୨ৎ────</p>

        <div className="social-icons" data-aos="fade-down-right" data-aos-duration="3000">
          <a
            href="https://x.com/nedu_nony"
            className="social-icon x"
            title="X"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-x-twitter"></i>
          </a>

          <a
            href="https://www.instagram.com/nedu_nony/"
            className="social-icon instagram"
            title="Instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </a>

          <a
            href="https://hashnode.com/@josephinejerome"
            className="social-icon hashnode"
            title="Hashnode"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* Using image because FontAwesome has no official Hashnode icon */}
            <img
              src="https://cdn.hashnode.com/res/hashnode/image/upload/v1611902473383/CDyAuTy75.png"
              alt="Hashnode"
              style={{ width: "24px", height: "24px" }}
            />
          </a>
        </div>
      </div>

      <div className="footer-p">
        <p>
          Made with love˚.🎀༘⋆ by{" "}
          <a
            href="https://x.com/nedu_nony"
            target="_blank"
            rel="noopener noreferrer"
          >
            Josephine Jerome
          </a>{" "}
          | © 2025
        </p>
      </div>
    </footer>



    </>
  )
}

export default App

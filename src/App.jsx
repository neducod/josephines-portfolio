import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import React, { useEffect} from "react";

import phoneIcon from './assets/icons8-phone-100.png';
import whatsappIcon from './assets/icons8-whatsapp.svg';
// import image from './assets/josephinejerome.jpeg';





// // // Contact Form component (no export)
// // function InteractiveContactForm() {
// //   const [formData, setFormData] = useState({
// //     name: "",
// //     email: "",
// //     message: "",
// //   });

// //   const [status, setStatus] = useState("");

// //   const handleChange = (e) => {
// //     setFormData({ ...formData, [e.target.name]: e.target.value });
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     setStatus("Thank you! Your message has been sent.");
// //     setFormData({ name: "", email: "", message: "" });
// //   };



//   return (
//     <div id="contact-me">
//       <h1>Reach Out</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="name"
//           placeholder="Josephine 🧸ྀི"
//           value={formData.name}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="Josephine@gmail.com 🧸ྀི"
//           value={formData.email}
//           onChange={handleChange}
//           required
//         />
//         <textarea
//           name="message"
//           placeholder="Hello, Engr Josephine..."
//           value={formData.message}
//           onChange={handleChange}
//           required
//         ></textarea>
//         <button type="submit">Send Your Message 🌷</button>
//       </form>
//       {status && <p>{status}</p>}
//     </div>
//   );
// }











//  <img src="/Image/josephinejeromepic.jpeg" alt="web developer picture" id="web-dev-img" />
function App() {
  return (
    <>
    <header id='myHeader'>
      <nav>
        <div className="nav-h">
                  <h1><a href="https://x.com/nedu_nony">Josephine Jerome</a></h1>
              </div>
              <div id="nav-links">
                  <ul>
                      <li><a href="#about" id="aboutt">About</a></li>
                      <li><a href="#projects">Projects</a></li>
                      <li><a href="#contactme">Contact</a></li>
                      <li><a href="https://josephinesociallinks.vercel.app/">Socials</a></li>
                  </ul>
              </div>
              <div className="hamburger" id="hamburger"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg></div> 
      </nav>
    </header>

<div className="hero">
      <div className="xx">
        <p>⋆｡‧˚ʚ🧸ɞ˚‧｡⋆</p>
        <p>ꫂ ၴႅၴ</p>
        <p>◡̈</p>
        <p>🐻‍❄️ྀིྀི</p>
      </div>

      <div className="hero-text">
        <div className="hero-text-h4">
          <h5>Frontend Developer</h5>
        </div>
        <p>Hi, My name is Josephine</p>
        <p>I love building clean code &amp; charming designs one pixel at a time. 💻🎨</p>
        <p>Let’s build something beautiful together.</p>
        <div className="hero-btns">
          <a href="#projects">
            <button>🔗 View My Work</button>
          </a>
          <a href="/Josephine Jerome CV.pdf" target="_blank" rel="noopener noreferrer" download>
            <button>📑 My CV</button>
          </a>
        </div>
      </div>

      <div className="dp">
        {/* <img src={image} alt="web developer picture" id="web-dev-imgg"/> */}
        <img src="/josephinejerome.jpeg" alt="web developer picture" id="web-dev-imgg" />

      </div>

      <div className="xx">
        <p>⋆｡‧˚ʚ🧸ɞ˚‧｡⋆</p>
        <p>ᥫ᭡。</p>
        <p>𓍼</p>
        <p>🦢・</p>
      </div>
    </div>


    <div id="about-mobile" style={{display: "none"}}>
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
    </div>

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
    </div>









    <div id="projects">
      <h1>Projects🍓</h1>
      <div className="projects">
        <form className="form">
          <div className="form-content">
            <p>
              TheJStore; A static online shopping website that showcase my skills
              in JavaScript using product filtering, cart handling and
              functionality, seo practises..
            </p>
          </div>
          <div>
            <p>
              <a
                href="https://neducod.github.io/thejstore/index.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Check it out 𓍢🌷͙
              </a>
            </p>
          </div>
        </form>

        <div className="form">
          <div className="form-content-one">
            <p className="mySlides1">In this project, I explore my skills with tailwind </p>
          </div>
          <div className="try">
            <p>
              <a
                href="https://my-first-tailwind-webpage.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Check it out 𓍢🌷͙
              </a>
            </p>
          </div>
        </div>

        <div className="form">
          <div className="form-content-two">
            <p className="mySlides2">
              Discover and manage your favorite recipes effortlessly with our Recipe Tracker.
              Save, edit, and organize meals in one place. Upload images, create personal
              collections, and access your dashboard anytime.
            </p>
          </div>
          <div>
            <p>
              <a
                href="https://recipe-tracker-eight.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Check it out 𓍢🌷
              </a>
            </p>
          </div>
        </div>

        <div className="form">
          <div className="form-content-three">
            <p className="mySlides3">
              This is a birthday countdown app. Built with JavaScript
            </p>
          </div>
          <div>
            <p>
              <a
                href="https://neducod.github.io/birthday-countdown/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Check it out 🌷͙
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>


        <div id="skillstack">
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

<div id="contact-me">
      <h1 id="h1">Reach Out</h1>
      <p id="p1">
        Have a project in mind or want to chat about coding? I am currently open to freelance work, internships, or collaborative projects
      </p>
      <p className="p1">Send me a message , let's create something amazing together!</p>

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























      <footer>
      <div id="footer-icons">
        <h6>Let's Connect</h6>
        <p>────୨ৎ────</p>

        <div className="social-icons" >
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

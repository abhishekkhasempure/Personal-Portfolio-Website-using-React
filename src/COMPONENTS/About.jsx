import React from 'react'
import '../STYLECSS/About.css'

const About = () => {
  return (
    <div >
      
      <div className='About'>
            <div className='bc'>
             <p className='para1'> Hello 👋🏼 I'm Abhishek , nice to meet you. please take a look around...</p>
            </div>

             <div class="audio-container">
                  <audio class="audio-player" src="../..public/audio.mp3" controls ></audio>
                  <label htmlFor=""> Play the music relax and scroll down to know about me...!!</label>
            </div>

             <div id='arrow'>
              <img src="../../arrowdown.gif" alt="" />
            </div>
      </div>

      
      
      <section>
        <h1>About</h1>
         <form action="">
          <ul>
            <li> I'm a Aerospace Engineering degree holder specializing in Front-End Development. Proficient in HTML, CSS, JavaScript,and React, I'm dedicated to crafting user-friendly 
              interfaces and delivering exceptional web experiences.Constantly honing my skills and staying updated with the 
              latest design trends, I'm eager to contribute my expertise to the dynamic world of web development.
           </li>
           <br />
           <h1>EDUCATION</h1>
           <br />
           <li> <h3>➤   MERN Stack Development Course-(present)</h3>     
               JSpiders- Training & Development Center •  Bengaluru  
           </li>
           <br />
           <li>
           <h3> ➤  Bachelor Of Technology in Aerospace Engineering </h3>
           M.S Ramaiah University Of Applied Sciences • Bengaluru  • 2022
           </li>
           <br />
           <li>
           <h3> ➤  Higher Secondary Education in Science </h3>
           ALVA’S Pre - University College • Moodbidri,Mangaluru  •  2018  
           </li>
           <br />
           <li>
           <h3> ➤  Secondary Education  </h3>
           Shree Swaminarayan Gurukul International School   • Gulbarga  • 2016  
           </li>

          </ul>

          
            <h1>CERTIFICATIONS</h1>
            <ul>
              <li><h3>Hand on Essentials - Data Warehouse</h3>
                      Snowflake • 2023 • Skills: Data-Engineering, SQL
              </li>
              <br />
              <li><h3>Networking Basics</h3>
                      Cisco  • 2023
              </li>
              <br />
              <li><h3>Introduction to Cybersecurity</h3>
                      Cisco  • 2023
              </li>


            </ul>

            <h1>Soft Skills</h1><br />
            <ul>
              <h3>•	Good management and communication abilities</h3><br />
              <h3>•	The capacity to more quickly adapt to new technology, concepts, approaches, and environments.</h3><br />
              <h3>•	Analytical and problem-solving capabilities</h3><br />
              <h3>•	A willingness to learn and an improving mindset.</h3><br />
              <h3>•	Skills in resource management and leadership.</h3><br />
            </ul>

            <h1>Hobbies</h1><br />
            <h3>• Listening to Music..</h3><br />
            <h3>• Travelling..</h3><br />
            <h3>• Singing...</h3><br />
            <h3>• creativity..</h3><br />
            <h3>• Exploring new things.. and learning different skills...</h3><br />

            <h1>Languages</h1><br /><br />
            <h3>• English</h3><br />
            <h3>• Hindi</h3><br />
            <h3>• Kannada</h3><br />
         </form>
        
           

      </section>

    </div>
  )
}

export default About

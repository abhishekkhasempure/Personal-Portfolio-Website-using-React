import React from 'react'
import '../STYLECSS/Home.css'
import Typewriter from "typewriter-effect";
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { RiFileDownloadLine } from "react-icons/ri";
import { saveAs } from 'file-saver';


const Home = () => {

  

  const saveFile = () => {
    saveAs(
      process.env.PUBLIC_URL + "../public/abhishekfrontendresume_organized.pdf",
      "MyResume.pdf"
    );
  }

  let getYear = () => {
    let currentYear = new Date().getFullYear();
    return currentYear;
  };


  return (

    <div className='Home'>
      <div className='abhi'>
        <br/><br />
        <Typewriter className="App"
                onInit={(typewriter) => {
                    typewriter
                        .typeString()
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("<p>Hi,my name is</p> <h1>Abhishek</h1> <h2>I'm a Front-End Developer...</h2>")
                        .start(1)
                }}
                options={{
                  loop: true, // Repeat indefinitely
                  delay: 50,  // Adjust typing speed (in milliseconds)
              }}
            />
      
           <p id='stick'>Hello! I'm Abhishek , and I'm excited to kickstart my journey as a Front-End 
              Developer. I love creating websites that look great and are easy to use. I'm familiar 
              with HTML, CSS, JavaScript and React js, and
               I'm eager to learn more and build awesome projects!</p>

        
        <footer className="footer__socials" >
          <a href="https://www.instagram.com/_abhishek_r.k/?__d=1" target="_blank" rel="noreferrer" ><FaInstagramSquare /></a>
          <a href="https://www.facebook.com/abhishek.rk.54390/" target="_blank" rel="noreferrer" ><FaFacebookSquare /></a>
          <a href="https://www.linkedin.com/in/abhishek-khasempure-31668b1b0/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
          <a href="https://github.com/abhishekkhasempure" target="_blank" rel="noreferrer" ><FaGithub /></a>
          <a href="../public/abhishekfrontendresume_organized.pdf" target="_blank" rel="noreferrer" onClick={saveFile}><RiFileDownloadLine /></a>

         <div className="footer__copyright">
               <small>&copy; ET {getYear()} | All rights reserved.</small>
         </div>
          
        </footer>

      </div>

             <div className='image' >
              <img src="../../homeimage.jpg" alt="" />
            </div>
      </div>
  )
}

export default Home

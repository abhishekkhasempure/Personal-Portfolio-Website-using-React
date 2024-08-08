import React from 'react'
import '../STYLECSS/Skills.css'



const Skills = () => {
  return (
    <div>
      <h1 id='heading'>Skills </h1>
      <p >Here Are Some Of My Skills On Which I'm Working...</p>
    
      <div className='skillset'>
        {/* <h1>Frontend</h1> */}
      <div className='skill'>
        <img src="https://cdn.iconscout.com/icon/free/png-512/free-html-3628838-3030115.png?f=webp&w=256" alt="HTML" style={{height:"100px", width:"100px"}} className="skill-img"/>
        <p> HTML is a markup language used to create the structure and content of web pages. </p>
      </div>
      
      <div className='skill'>
        <img src="https://cdn.iconscout.com/icon/free/png-512/free-css3-11-1175239.png?f=webp&w=256" alt="CSS" style={{height:"100px", width:"100px"}} className="skill-img"/>
        <p>CSS is a stylesheet language used to style and layout web pages.</p>
      </div>

     <div className='skill'>
        <img src="https://cdn.iconscout.com/icon/premium/png-512-thumb/javascript-2752148-2284965.png?f=webp&w=256" alt="JS" style={{height:"100px", width:"100px"}} className="skill-img"/>
        <p>JAVASCRIPT JavaScript is a dynamic programming language that's used for web development, in web applications, for game development, and lots more. It allows you to implement dynamic features on web pages that cannot be done with only HTML and CSS.</p>
    </div>

     <div className='skill'>
        <img src="https://cdn.iconscout.com/icon/free/png-512/free-react-4-1175110.png?f=webp&w=256" alt="REACT" style={{height:"100px", width:"100px"}} className="skill-img"/>
        <p>React is a JavaScript library for building user interfaces with reusable components. </p>
     </div>
     <div className='skill'>
        <img src="https://cdn.iconscout.com/icon/free/png-512/free-mongodb-3-1175138.png?f=webp&w=256" alt="REACT" style={{height:"100px", width:"100px"}} className="skill-img"/>
        <p>MongoDB is a NoSQL database that stores data in flexible, JSON-like documents rather than in traditional table-based structures. </p>
     </div>
     <div className='skill'>
        <img src="https://cdn.iconscout.com/icon/free/png-512/free-nodejs-2-226035.png?f=webp&w=256" alt="REACT" style={{height:"100px", width:"100px"}} className="skill-img"/>
        <p>Node js is Javascript Run-time environment which allows us to run javascript outside the Browzer  </p>
     </div>
     <div className='skill'>
        <img src="https://cdn.iconscout.com/icon/premium/png-512-thumb/git-10181844-8492734.png?f=webp&w=256" alt="GitHub" style={{height:"100px", width:"100px"}} className="skill-img"/>
        <p>GitHub is a web-based platform for version control and collaboration that allows developers to manage and share code using Git. </p>
     </div>
   
      </div >
       

    

    </div>
    

   
  
  )
}

export default Skills

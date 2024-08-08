import React from 'react'
import'../STYLECSS/Projects.css'
const Projects = () => {
  return (
    <div className="projects">
      <h1>Front-end Projects</h1>
      <div class="project-item" id='todo'>
        <video src="../../todo.mp4" height="400px" width="600" controls></video>
        <p id='todop'>Todo-List App</p>
      </div>

      <div className="project-item">
        <video src="../../amazon.mp4" height="400px" width="600" controls></video>
        <p id='todop'>Amazon Clone</p>
      </div>

      <div className="project-item">
        <video src="../../Faq.mp4" height="400px" width="600" controls></video>
        <p id='todop'>FAQ </p>
      </div>

      <div className="project-item">
      <video src="../../weatherapi.mp4" height="400px" width="600" controls></video>
        <p id='todop'>Weather Api</p>
      </div>

      
    </div>
  )
}

export default Projects

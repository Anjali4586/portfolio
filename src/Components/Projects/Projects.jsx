import React from 'react'
import './Projects.css'

const Projects = () => {
  return (
    <div className='projects-section'>
        <h2 className='project-head'>
            Projects Section
        </h2>
        <form className='project-form'>
            <label>ProjectName</label><br/>
            <input type="text"></input><br/>
            <label>ProjectLink</label><br/>
            <input type="text"></input><br/>
            <label>Description</label><br/>
           <textarea rows={5} cols={30}></textarea><br/>
           <button className="add-btn">Add</button>
        </form>
    </div>
  )
}
export default Projects
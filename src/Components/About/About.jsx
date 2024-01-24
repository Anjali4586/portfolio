import './About.css'
import logo from '../asset/logo.png';
import React from 'react'
import { Link } from 'react-router-dom';

const About = () => {

  return (
    <div className="about-page">
        <div className='head'>
        <h1>UI/UX Designer</h1>
        <h3>Hello,my name is Geetanjali</h3>
        <p>
        Self-disciplined and meticulous User Interface (UI) and User Experience (UX) Designer. Possesses strong analytical and User-Centered design skills to create holistic solutions that are functional and research-driven. Produces pixel-perfect visuals and includes usability heuristics into practice. Performs productively in working multi-task and eager to learn.
        <div>
       <Link to="/projects"><button className='primary-btn' >Projects</button></Link>
        <button className='second-btn'>LinkedIn</button>
        </div>
        </p>
        </div>
        <div className='image'>
            <img src={logo} alt="profile" className='profile-img'/>
        </div>
       
    </div>
  )
}

export default About
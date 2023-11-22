import React from 'react';
import AboutBackground from "../Assets/about-background.png"
import AboutBackgroundImage from "../Assets/9.png"
import { BsFillPlayCircleFill } from 'react-icons/bs';

const About = () => {
  return (
    <div className="about-section-container">
        <div className="about-background-image-container">
            <img src={AboutBackground} alt=""/>
        </div>
        <div className="about-section-image-container">
            <img style={{borderRadius:'500px'}}src={AboutBackgroundImage} alt=""/>
        </div>
        <div className="about-section-text-container">
            <p className="primary-subheading">About</p>
            <h1 style={{color:'whitesmoke'}}>We Are the Best Accountants</h1>
            <p className="primary-text">
            Take a tour of our powerful features designed to simplify your accounting processes. From invoicing to expense tracking, we've got you covered.
            </p>
            <p className='primary-text'>
            Dive into the world of seamless accounting by creating your account today. It only takes a few minutes!
            </p>

            <div className='about-buttons-container'>
                <button className='secondary-button'>Learn More</button>
                <button className='watch-video-button'><a href="https://www.youtube.com/"><BsFillPlayCircleFill/>Watch Video</a></button>
            </div>
        </div>
    </div>
  )
}

export default About

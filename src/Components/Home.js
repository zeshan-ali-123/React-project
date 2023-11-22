import React from 'react';
import Navbar from './Navbar';
import BannerBackground from "../Assets/ll.png";
import BannerImage from "../Assets/7.png";
import {FiArrowRight} from "react-icons/fi";

const Home = () => {
  return (
    <div className='home-container'>
      <Navbar/>
      <div className='home-banner-container' >
        <div className='home-bannerImage-container'>
            <img src={BannerBackground} alt=""/>
        </div>
        <div className="home-text-section">
            <h1 style={{color:'white'}} className="primary-heading">
                We Help You Buisness Innovate and Grow
            </h1>
            <p style={{color:'white'}}className="primary-text">
                your expert accounting and finance team.We help your online buisness scale successfully<br></br>
                utilizing automation,specilist advice and bespoke reporting. 
            </p>
            <button className="secondary-button">
                CONNECT WITH US <FiArrowRight/>
            </button>
        </div>
        <div className="home-image-container">
            <img style={{width:'600px',borderRadius:'20px',padding:"left"}}src={BannerImage} alt=''/>
        </div>
      </div>
    </div>
  );
};

export default Home

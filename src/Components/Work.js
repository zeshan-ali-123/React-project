import React from 'react';
import CustomGifts from "../Assets/11.png";
import ChooseMeals from "../Assets/S.png";
import Deliverymeals from "../Assets/fgg.png";

const Work = () => {
    const workInfoData = [
        {
            image:CustomGifts,
            title:"Stocks",
            text:"Stock Market Information",

        },
        {
            image:ChooseMeals,
            title:"Trading",
            text:"Get to Know About Trading",
        },
        {
            image:Deliverymeals,
            title:"Bitcoin",
            text:"Get to About Bitcoin!",
        },
    ]
  return (
    <div className='work-section-wrapper'>
        <div className='work-section-top'>
            <p className='primary-subheading'> Work</p>
            <h1 style={{color:'white'}} className='primary-heading'> How It Works</h1>
            <p className='primary-text'>
                Get the reviews from our Happy Customers 
            </p>
        </div>
        <div className="work-section-bottom">
            {
                workInfoData.map((data) => (
                    <div className="work-section-info">
                        <div className='info-boxes-img-container'>
                          <img src={data.image} alt=""/>
                        </div>
                        <h2>{data.title}</h2>
                        <p>{data.text}</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Work

import './Img.css';
import iconImg from './images/Shape.svg'
import { useState } from 'react';

function Images(){
    return (
        <div className="picture-div">
            {/* <img src={img1} alt="mainimage" className='Main-image'></img> */}
            <div className="transitionDiv">
            <img className="iconImg" src={iconImg} alt='iconImg'></img>
            </div>
        </div>
    )
}

export default Images;
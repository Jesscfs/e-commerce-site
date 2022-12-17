import React from 'react'
import { useState } from 'react';
import WestOutlinedIcon from '@mui/icons-material/WestOutlined';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import "./Slider.scss";


const Slider = () => {

    const [currentSlide, setCurrentSlide] = useState(0);


    const data = [
        "https://images.pexels.com/photos/2909097/pexels-photo-2909097.jpeg",
        "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg",
        "https://images.pexels.com/photos/2783837/pexels-photo-2783837.jpeg",
    ]

    const prevSlide = () =>{
        setCurrentSlide(currentSlide === 0 ? 2: (prev)=> prev - 1);
    }

    const nextSlide =()=>{
        setCurrentSlide(currentSlide === 2? 0: (prev)=> prev + 1);
    }


  return (
    <div className='slider'>
        <div className="container" style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
            <img src={data[0]} alt="" />
            <img src={data[1]} alt="" />
            <img src={data[2]} alt="" />
        </div>
        <div className="icons">
            <div className="icon">
                <WestOutlinedIcon onClick={prevSlide}/>
            </div>
            <div className="icon">
                <EastOutlinedIcon onClick={nextSlide}/>
            </div>
        </div>
    </div>
  )
}

export default Slider


























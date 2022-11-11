
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

const ControlledCarousel = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    return (
        <Carousel className='container' activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
         <div className='carousel-img'>
         <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="First slide"
            height="650px"
          />
         </div>
          <Carousel.Caption>
           
            <p>I'm Rachel Farnsworth. This is the place where I share restaurant quality recipes you can easily make at home. I'm bringing back the family dinner in a really delicious way!!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>

          <div className='carousel-img'>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Second slide"
            height="650px"
          />
          </div>
  
          <Carousel.Caption>
            <p>I'm john doe. This is the place where I share restaurant quality recipes you can easily make at home. I'm bringing back the family dinner in a really delicious way!!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
         
         <div className='carousel-img'>
         <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Third slide"
            height="650px"
          />
         </div>
  
          <Carousel.Caption>
            
            <p>
              I'm Rachel Farnsworth. This is the place where I share restaurant quality recipes you can easily make at home. I'm bringing back the family dinner in a really delicious way!!
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
    
};

export default ControlledCarousel;
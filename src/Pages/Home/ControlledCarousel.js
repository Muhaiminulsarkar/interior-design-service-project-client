
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
           
            <p>“As an interior brand, what you’re doing is really innovative. I haven’t seen this before in Bangladesh, so I appreciate it. It’s great that you’re getting in touch for feedback after the service has been completed, and looking to listen to clients about their experience. That’s great.”</p>
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
            <p>The Bengali ethnicity dwells in our hearts and souls. It has been an integral part of our identity for generations. Our deshi traits are quite often vividly portrayed in our daily lives in some way or the other. So why not incorporate a splash of our rich history and culture into your homes? In this blog, you will find 7 tips to spruce up your home interiors so that it exudes that ethnic charm!</p>
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
            One of the most effortless, yet effective methods to add a Bangaliyana touch to your home is by hanging framed traditional artwork. This adds an ethnic flair and a well-defined look. It can be a conventional Bengali painting, or even a tapestry consisting of deshi motifs, and/or pattern. You can attain this by hanging artwork of Nakshi Kantha, or Nakshi Kantha inspired artistry. Not only will this add a touch of locality into your room but it will also be successful
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
    
};

export default ControlledCarousel;
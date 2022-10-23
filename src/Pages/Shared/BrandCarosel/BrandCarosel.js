import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Brand1 from '../../../Asstes/Neon Blue & Purple Modern Futuristic Gaming Technology Desktop Wallpaper.png';
import Brand2 from '../../../Asstes/Blue Neon Modern Gaming Dekstop Wallpaper.png';
import Brand3 from '../../../Asstes/Fight for Your Fairytale Desktop Wallpaper .png';

const BrandCarosel = () => {
     return (
          <div>

               <Carousel>
                    <Carousel.Item>
                         <img
                              className="d-block w-100"
                              src={Brand1}
                              alt="First slide"
                         />
                         <Carousel.Caption>
                         </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                         <img
                              className="d-block w-100"
                              src={Brand2}
                              alt="Second slide"
                         />

                         <Carousel.Caption>
                            
                         </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                         <img
                              className="d-block w-100"
                              src={Brand3}
                              alt="Third slide"
                         />

                         <Carousel.Caption>
                         </Carousel.Caption>
                    </Carousel.Item>
               </Carousel>

          </div>
     );
};

export default BrandCarosel;
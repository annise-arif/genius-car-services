import React, { useState } from "react";
import { Carousel } from "react-bootstrap";

import banner1 from '../../../images/banner/banner1.jpg'
import banner2 from '../../../images/banner/banner2.jpg'
import banner3 from '../../../images/banner/banner3.jpg'

const Banner = () => {
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Sinior Engine testing Engineer</h3>
          <p>He is 8years of Experienced person to Engine Binding and testing.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>The Person in Sinior Body Testing and bulding Engineer Of Our Companye...</h3>
          <p>This Engineer in working Our Companyes After 17years for Building Body and Testing Self...</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Is he a Hidrolick Macanisom Engineer of our company,</h3>
          <p>
           The Engineer is verry faster to binding hidrolick spring and socket jumper...
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;

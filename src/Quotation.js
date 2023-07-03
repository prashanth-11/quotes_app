import React, { useEffect, useRef } from "react";
import image1 from "./images/1blue.jpg";
// import './Carousel.css';
import { Link } from "react-router-dom";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from "react-bootstrap/Carousel";
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
};
function Quotation() {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef?.current;
    const intervalId = setInterval(() => {
      if (slider) {
        slider?.slickNext();
      }
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  const banners = ["./pk.jpg", "./pk2.jpg", "./pk1.jpg"];
  return (
    // <Carousel>
    //   <Carousel.Item interval={1000}>
    //     <img
    //       height="10px"
    //       className="d-block w-100"
    //       src="./pk.jpg"
    //       alt="First slide"
    //     />
    //     <Carousel.Caption>
    //       <h3>First slide label</h3>
    //       <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    //     </Carousel.Caption>
    //   </Carousel.Item>
    //   <Carousel.Item interval={500}>
    //     <img className="d-block w-100" src="pk1.jpg" alt="Second slide" />
    //     <Carousel.Caption>
    //       <h3>Second slide label</h3>
    //       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    //     </Carousel.Caption>
    //   </Carousel.Item>
    //   <Carousel.Item>
    //     <img className="d-block w-100" src="./pk2.jpg" alt="Third slide" />
    //     <Carousel.Caption>
    //       <h3>Third slide label</h3>
    //       <p>
    //         Praesent commodo cursus magna, vel scelerisque nisl consectetur.
    //       </p>
    //     </Carousel.Caption>
    //   </Carousel.Item>
    // </Carousel>

    <div style={{ width: "40%", height: "500px",  }} className="pk">
      
      <Slider {...settings} ref={sliderRef}>
        {banners.map((item, index) => (
          <div key={index} style={{}}>
            <img
              style={{
                maxWidth: "500px",
                width: "100%",
                height: "300px",
              }}
              src={item}
              alt=""
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Quotation;

import React from "react";
import Slider from "react-slick";
import star from "../images/icons/star.svg";

import "./Testimonial.css";
const data = [
  {
    msg: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    name: "Vedika",
    rating: "4.4",
  },
  {
    msg: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",

    name: "Rahul",
    rating: "4.3",
  },
  {
    msg: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",

    name: "Rupesh",
    rating: "4.3",
  },
  {
    msg: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",

    name: "Ramesh",
    rating: "4.2",
  },
];

const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
const Testimonial = () => {
  return (
    <div>
      <h2 className="center-div" style={{ marginTop: "3rem" }}>
        What do people say about us?
      </h2>

      <div className="Testimonial">
        <div className="center-div">
          <Slider {...settings}>
            {data.map((item) => {
              return (
                <div key={item.name}>
                  <div className="TestimonialCard">
                    <div>{item.msg}</div>
                    <h4>{item.name}</h4>
                    <span>
                      {item.rating} <img src={star} alt="star" />
                    </span>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

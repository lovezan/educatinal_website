import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { testimonal } from "../../../dummydata";
import Heading from "../../common/heading/Heading";
import "./style.css";

const Testimonal = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <section className="testimonal padding">
        <div className="container">
          <Heading subtitle="TESTIMONIAL" title="Our Successful Students" />
          <div className="content grid2">
            <Slider {...settings}>
              {testimonal.map((val, index) => (
                <div key={index} className="items shadow">
                  <div className="box flex">
                    <div className="img">
                      <img src={val.cover} alt="" />
                      <i className="fa fa-quote-left icon"></i>
                    </div>
                    <div className="name">
                      <h2>{val.name}</h2>
                      <span>{val.post}</span>
                    </div>
                  </div>
                  <p>{val.desc}</p>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonal;

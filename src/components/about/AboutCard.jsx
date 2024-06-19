import React from "react";
import Heading from "../common/heading/Heading";
import "./about.css";
import { homeAbout } from "../../dummydata";

const AboutCard = () => {
  return (
    <>
      <section className="aboutHome">
     
           
        <div className="container flexSB">
       
         
          <div className="right row">
           <Heading
              subtitle="Why PhD Assistance"
              title="A Trusted & Academically Sound Mentors representing various Countries
"
            />
          
            <div className="items">
              {homeAbout.map((val) => {
                return (
                  <div className="item flexSB">
                    <div className="img">
                      <img src={val.cover} alt="" />
                    </div>
                    <div className="text">
                      <h2>{val.title}</h2>
                      <p>{val.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="left row">
            <img src="./images/about.webp" alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutCard;

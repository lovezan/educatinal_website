import React from "react";
import { blog } from "../../../dummydata";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <section className="newletter">
        <div className="container flexSB">
          <div className="left row">
            <h1>Newsletter - Stay tune and get the latest update</h1>
            <span>Far far away, behind the word mountains</span>
          </div>
          <div className="right row">
            <input type="text" placeholder="Enter email address" />
            <i className="fa fa-paper-plane"></i>
          </div>
        </div>
      </section>
      <footer>
        <div className="container padding">
          <div className="box logo">
            <h1>PhdAssistance</h1>
            <span>ONLINE EDUCATION & LEARNING</span>
            <hr />
            <h1>About</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              nulla nesciunt eum quae nam magni consectetur sed quam enim harum!
              Ad nisi sapiente est officiis aliquam repellat deserunt quis
              eveniet sunt consectetur cupiditate fuga, ut possimus quae quo
              ullam sit dolor aut, asperiores maxime molestias. Ad, id harum.
              Fuga temporibus, quam facilis corrupti iste explicabo eligendi
              culpa debitis quod tempore expedita quibusdam nobis, provident
              voluptate magnam, architecto libero. Sed ullam sapiente assumenda
              distinctio quos rerum eos quidem voluptatibus sunt! Ducimus unde
              maxime eos magnam sunt illum illo, architecto provident ad fugit
              nulla esse saepe inventore beatae.
            </p>

           <div className="iconshere">
           <i className="fab fa-facebook-f icon"></i>
            <i className="fab fa-twitter icon"></i>
            <i className="fab fa-instagram icon"></i>
           </div>
          </div>
          <div className="box link">
            <h3>Main Services</h3>
            <ul>
              <li>PhD Dissertation</li>
              <li>Coursework</li>
              <li>Literature Review</li>
              <li>PhD Research Methodology</li>
              <li>Data Analysis</li>
              <li>Manuscript</li>
              <li>Editing Services</li>
              <li>Animation</li>
              <li>Courses</li>
            </ul>
          </div>
          <div className="box link">
            <h3>Links</h3>
            <ul>
              <li>PhD Dissertation</li>
              <li>Coursework</li>
              <li>Literature Review</li>
              <li>PhD Research Methodology</li>
              <li>Data Analysis</li>
              <li>Manuscript</li>
              <li>Editing Services</li>
              <li>Animation</li>
              <li>Courses</li>
              <li>Blog</li>
              <li>Industries</li>
              <li>Pricing Details</li>
              <li>Insights</li>
              <li>Help-Guide</li>
              <li>Our Sample Work</li>
              <li>FAQ</li>
              <li>Career</li>
              <li>Contact us</li>
              <li>Terms and Conditions</li>
              <li>Privacy Policy</li>
              <li>Customer Centre</li>
              <li>XML Sitemap</li>
            </ul>
          </div>
          {/* <div className="box">
            <h3>Recent Post</h3>
            {blog.slice(0, 3).map((val) => (
              <div className="items flexSB">
                <div className="img">
                  <img src={val.cover} alt="" />
                </div>
                <div className="text">
                  <span>
                    <i className="fa fa-calendar-alt"></i>
                    <label htmlFor="">{val.date}</label>
                  </span>
                  <span>
                    <i className="fa fa-user"></i>
                    <label htmlFor="">{val.type}</label>
                  </span>
                  <h4>{val.title.slice(0, 40)}...</h4>
                </div>
              </div>
            ))}
          </div> */}
          <div className="box last">
            <h3>Contact Us</h3>
            <ul>
        <li><strong>UK:</strong> +44-7537 144372</li>
        <li><strong>India:</strong> +91-9176966446</li>
        <li><strong>Landline:</strong> +91-44-42124284 <br/>(Between 9.00 am – 6.00 pm IST)</li>
        <li><strong>For existing clients:</strong> +91-8754446693</li>
        <li><strong>Customer Care:</strong> +91-9384672299</li>
        <li><strong>Email:</strong> <a href="mailto:info@phdassistance.com">info@phdassistance.com</a></li>
    </ul>
          </div>
        </div>
      </footer>
      <div className="legal">
        <p>
          Copyright ©2022 All rights reserved <i className="fa fa-heart"></i> by
          Phdassistance
        </p>
      </div>
    </>
  );
};

export default Footer;

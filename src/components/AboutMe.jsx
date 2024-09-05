import React from "react";
import "../styles/aboutme.css";
import aboutman from "../assets/images/aboutman.png"
const AboutMe = () => {
  return (
    <div className="aboutman-body  d-flex align-items-center justify-content-center">
      <div className="container">
        <div className="row align-items-center justify-content-between gap-5">
          <div className="col col-lg-6 aboutman-div">
            <img className="img-fluid aboutmaan" src={aboutman} alt="" />
          </div>

          <div className="col col-lg-5 aboutme-details">
            <h3>About</h3>
            <h1>About Me</h1>
            <p>
              Passionate and dedicated full stack web developer with a strong
              desire to continuously learn and enhance my skills. I am a
              dependable, quick learner who thrives in team environments and
              values effective communication and organization.
            </p>
            <p>
              I am always ready to take on new challenges to achieve goals and
              gain the knowledge and expertise needed to grow and improve every
              day. My commitment to both frontend and backend development drives
              my enthusiasm for creating seamless, user-friendly web
              applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

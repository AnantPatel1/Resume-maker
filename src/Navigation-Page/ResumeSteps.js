import React from "react";
import classes from "./ResumeSteps.module.css";
import { NavLink } from "react-router-dom";

const ResumeSteps = () => {
  const steps = [
    {
      src: "https://images.pexels.com/photos/1181772/pexels-photo-1181772.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Pick a template",
    },
    {
      src: "https://images.pexels.com/photos/2928232/pexels-photo-2928232.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Make your resume in our app",
    },
    {
      src: "https://images.pexels.com/photos/733856/pexels-photo-733856.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Customize the design",
    },
    {
      src: "https://images.pexels.com/photos/768474/pexels-photo-768474.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Download in DOC or PDF",
    },
  ];

  return (
    <div className={classes["resume-steps"]}>
      {steps.map((image, index) => (
        <div
          key={index}
          className={classes.step}
          style={{ textAlign: "center" }}
        >
          {index < 3 ? (
            <svg
              className={classes.svg}
              xmlns="http://www.w3.org/2000/svg"
              width="200"
              height="50"
            >
              <path
                className={classes.dotted}
                d="M50,25 Q100,0 150,25"
                fill="none"
                stroke="black"
                stroke-width="2"
              />
              <polygon points="145,20 145,30 155,25" fill="black" />
            </svg>
          ) : (
            <div style={{ height: "50px" }}></div>
          )}

          <img src={image.src} alt={image.alt} />
          <h3>
            {index + 1}. {image.alt}
          </h3>
          <p>A brief description of the step.</p>
          <div style={{ position: "absolute", top: 0, right: 0 }}></div>
        </div>
      ))}
      <div className={classes.btn}>
        <NavLink to="/steps/build" end>
          <a href="#">Start Building</a>
        </NavLink>
      </div>
    </div>
  );
};

export default ResumeSteps;

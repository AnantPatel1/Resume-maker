import React from "react";
import classes from "./ResumeSteps.module.css";
const ResumeSteps = () => {
  const steps = [
    {
      src: "https://i.stack.imgur.com/5r5aT.png",
      alt: "Pick a template",
    },
    {
      src: "https://i.stack.imgur.com/y9X4U.png",
      alt: "Make your resume in our app",
    },
    {
      src: "https://i.stack.imgur.com/m1v2o.png",
      alt: "Customize the design",
    },
    {
      src: "https://i.stack.imgur.com/9n74c.png",
      alt: "Download in DOC or PDF",
    },
  ];

  return (
    <div className={classes["resume-steps"]}>
      {steps.map((image, index) => (
        <div key={index} className="step">
          <img src={image.src} alt={image.alt} />
          <h3>
            {index + 1}. {image.alt}
          </h3>
          <p>A brief description of the step.</p>
        </div>
      ))}
    </div>
  );
};

export default ResumeSteps;

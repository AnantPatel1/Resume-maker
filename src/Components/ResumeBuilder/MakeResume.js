import React from "react";
import Yourcv from "../../Assets/high-school-math-teacher-resume-template-hero-banner-removebg-preview.png";
import blank from "../../Assets/images-removebg-preview.png";
import doc from "../../Assets/download-removebg-preview.png";
import classes from "./MakeResume.module.css";
export default function MakeResume() {
  return (
    <div className={classes.make}>
      <div class="container" style={{ padding: "100px 50px" }}>
        <div class="row">
          <div class="col-lg-4 col-md-6">
            <a href="#">
              <img className={classes.cvimage} src={Yourcv} alt="Hire us" />
            </a>
            <p className={classes.text}> Pick CV Template</p>
            <p className={classes.description}>
              {" "}
              Choose a sleek design and layout to get started.
            </p>
          </div>
          <div class="col-lg-4 col-md-6">
            <a href="#">
              <img className={classes.cvimage} src={blank} alt="blank" />
            </a>
            <p className={classes.text}>Fill in the blanks</p>
            <p className={classes.description}>
              {" "}
              Type in a few words. Let the Zety CV wizard fill the rest.
            </p>
          </div>
          <div class="col-lg-4">
            <a href="#">
              {" "}
              <img className={classes.cvimage} src={doc} alt="document" />
            </a>
            <p className={classes.text}>Customise your document</p>
            <p className={classes.description}>
              Make it truly yours. Uniqueness in a few clicks.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

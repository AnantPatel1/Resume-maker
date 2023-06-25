import React from "react";
import Navbar from "../../Layout/Navbar";
import BuildResume from "../../ResumeBuilder/BuildResume.js";
import MakeResume from "../../ResumeBuilder/MakeResume.js";
import classes from "./MainPage.module.css";
export default function mainpage() {
  return (
    <div className={classes.home}>
      <Navbar />
      <BuildResume />
      <MakeResume />
    </div>
  );
}

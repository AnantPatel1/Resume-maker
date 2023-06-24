import React from "react";
import Navbar from "../../Layout/Navbar.js";
import LandingPage from "../LandingPage.js";
import BuildResume from "../../ResumeBuilder/BuildResume.js";
import MakeResume from "../../ResumeBuilder/MakeResume.js";
import ResumeTemplates from "../Templates/ResumeTemplates.js";
import { BrowserRouter } from "react-router-dom";
import classes from "./MainPage.module.css";
export default function mainpage() {
  return (
    <div className={classes.home}>
      <BrowserRouter>
        <Navbar />
        <LandingPage />
        <BuildResume />
        <MakeResume />
        <ResumeTemplates />
      </BrowserRouter>
    </div>
  );
}

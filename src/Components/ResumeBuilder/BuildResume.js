import React from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import classes from "./BuildResume.module.css";
export default function BuildResume() {
  return (
    <div className={classes.build}>
      <div className={classes.container}>
        <div className={classes.redbox}></div>
        <div className={`${classes.greenbox} ${classes.redbox}`}></div>
        <div className={classes.description}>
          <p>Create a professional resume for Free in a minute</p>
        </div>
        <SettingsIcon
          className={classes.icon}
          fontSize={"large"}
          sx={{ transform: "scale(5)" }}
        />
      </div>
    </div>
  );
}

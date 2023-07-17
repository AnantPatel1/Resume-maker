import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Theme1 from "../Themes/Theme1";
import PersonalInfoForm from "./UserDeatils/PersonalDeatils/PersonalDetails";
import ProjectDetails from "./UserDeatils/ProjectDetails/ProjectDetails";
import WorkDetails from "./UserDeatils/WrokDeatails/WorkDetails";
import Education from "./UserDeatils/EducationDetails/Education";
import Skills from "./UserDeatils/Skills/Skills";
import classes from "./BuildResume.module.css";
export default function BuildResume() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.container}>
      <div className={classes.item}>
        {" "}
        <Box sx={{ width: "100%", typography: "body1", marginTop: "30px" }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <Tab label="Details" value="1" />
                <Tab label="Skills" value="2" />
                <Tab label="Education" value="3" />
                <Tab label="Project Details" value="4" />
                <Tab label="Work Details" value="5" />
              </TabList>
            </Box>
            <TabPanel value="1">
              <PersonalInfoForm />
            </TabPanel>
            <TabPanel value="2">
              <Skills />
            </TabPanel>
            <TabPanel value="3">
              <Education />
            </TabPanel>
            <TabPanel value="4">
              <ProjectDetails />
            </TabPanel>
            <TabPanel value="5">
              <WorkDetails />
            </TabPanel>
          </TabContext>
        </Box>
      </div>
      <div className={`${classes.item} ${classes.imageItem} `}>
        <Theme1 />
      </div>
    </div>
  );
}

import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Template from "../../Assets/Resume Theme - 1.png";
import PersonalInfoForm from "./PersonalDetails";
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
                <Tab label="Item Two" value="2" />
                <Tab label="Item Three" value="3" />
                <Tab label="Item Three" value="4" />
                <Tab label="Item Three" value="5" />
              </TabList>
            </Box>
            <TabPanel value="1">
              <PersonalInfoForm />
            </TabPanel>
            <TabPanel value="2">Item Two</TabPanel>
            <TabPanel value="3">Item Three</TabPanel>
            <TabPanel value="4">Item One</TabPanel>
            <TabPanel value="5">Item One</TabPanel>
          </TabContext>
             
        </Box>
      </div>
      <div className={`${classes.item} ${classes.imageItem} `}>
        <img className={classes.template1} src={Template} alt="Template1" />
      </div>
    </div>
  );
}

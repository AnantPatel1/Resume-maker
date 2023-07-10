import React, { useState } from "react";
import { TextField } from "@mui/material";
import classes from "./PersonalDetails.module.css";

const PersonalDetails = () => {
  const [file, setFile] = useState(null);
  const [name, setName] = useState("");
  const [summary, setSummary] = useState("");
  const [workProfile, setWorkProfile] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [emailId, setEmailId] = useState("");

  const handleUpload = (event) => {
    setFile(event.target.files[0]);
    console.log(file);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name);
    console.log(value);
    switch (name) {
      case "name":
        setName(value);
        break;
      case "summary":
        setSummary(value);
        break;
      case "workProfile":
        setWorkProfile(value);
        break;
      case "address":
        setAddress(value);
        break;
      case "phoneNumber":
        setPhoneNumber(value);
        break;
      case "emailId":
        setEmailId(value);
        break;
      default:
        break;
    }
  };

  return (
    <div className={classes.container}>
      <h2>Personal Details</h2>
      <input
        type="file"
        accept="image/jpeg, image/png"
        className={classes.inputFile}
        onChange={handleUpload}
      />
      <TextField
        label="Your Name"
        name="name"
        value={name}
        onChange={handleChange}
        className={classes.textInput}
        margin="normal"
        fullWidth
      />
      <TextField
        label="Your Summary"
        name="summary"
        value={summary}
        onChange={handleChange}
        className={classes.textInput}
        margin="normal"
        fullWidth
      />
      <TextField
        label="Work Profile"
        name="workProfile"
        value={workProfile}
        onChange={handleChange}
        className={classes.textInput}
        margin="normal"
        fullWidth
      />
      <TextField
        label="Address"
        name="address"
        value={address}
        onChange={handleChange}
        className={classes.textInput}
        margin="normal"
        fullWidth
      />
      <TextField
        label="Phone Number"
        name="phoneNumber"
        value={phoneNumber}
        onChange={handleChange}
        className={classes.textInput}
        margin="normal"
        fullWidth
      />
      <TextField
        label="Email ID"
        name="emailId"
        value={emailId}
        onChange={handleChange}
        className={classes.textInput}
        margin="normal"
        fullWidth
      />
    </div>
  );
};

export default PersonalDetails;

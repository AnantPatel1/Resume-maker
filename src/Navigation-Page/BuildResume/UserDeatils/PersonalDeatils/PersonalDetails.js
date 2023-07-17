import React, { useContext, useEffect, useState } from "react";
import { IoMdCloudUpload } from "react-icons/io";
import { FormControl, Input, Heading } from "@chakra-ui/react";
import ResumeContext from "../../../../Context/ResumeContext";
import { Fragment } from "react";
const PersonalDetails = () => {
  const { themeData, setThemeData } = useContext(ResumeContext);

  const [personalData, setPersonalData] = useState({
    profileImage: "https://www.w3schools.com/howto/img_avatar.png",
    name: "Your Name",
    summary: "Lorem ipsum dolor sit amet, consectetur adipiscing eli",
    profile: "Work Profile",
    address: "Address Line",
    phone: "Phone Number",
    email: "Email Address",
    skill: "Your, Skills, are, shown, here",
  });
  // To Add Personal Data to the State
  const handleChangePersonal = (e) => {
    const { name, value } = e.target;
    setPersonalData({ ...personalData, [name]: value });
    if (e.target.name === "profileImage") {
      setPersonalData({
        ...personalData,
        profileImage: URL.createObjectURL(e.target.files[0]),
      });
    }
  };

  useEffect(() => {
    setThemeData({
      ...themeData,
      personalData,
    });
  }, [themeData, personalData, setThemeData]);

  return (
    <Fragment>
      <div id="form-collect">
        {/* Personal Details Area  */}
        <div id="form-personal" className="mb-2">
          <Heading as="h4" size="md" className="mb-2">
            Personal Details
          </Heading>
          <hr />

          <FormControl isRequired className="my-2">
            <div className="file">
              <label htmlFor="input-file">
                <i className="material-icons">
                  <IoMdCloudUpload size={30} />
                </i>
                Select a file
              </label>
              <input
                accept="image/*"
                name="profileImage"
                onChange={handleChangePersonal}
                id="input-file"
                type="file"
              />
              <img
                className="blah"
                src={personalData.profileImage}
                alt="your profile preview"
              />
            </div>
          </FormControl>
          <FormControl isRequired className="my-2">
            <Input
              name="name"
              onChange={handleChangePersonal}
              type={"text"}
              placeholder="Your Name"
            />
          </FormControl>
          <FormControl isRequired className="my-2">
            <Input
              name="summary"
              onChange={handleChangePersonal}
              type={"text"}
              placeholder="Your Summary"
            />
          </FormControl>
          <FormControl isRequired className="my-2">
            <Input
              name="profile"
              onChange={handleChangePersonal}
              type={"text"}
              placeholder="Work Profile"
            />
          </FormControl>
          <FormControl isRequired className="my-2">
            <Input
              name="address"
              onChange={handleChangePersonal}
              type={"text"}
              placeholder="Address"
            />
          </FormControl>
          <FormControl isRequired className="my-2">
            <Input
              name="phone"
              onChange={handleChangePersonal}
              type={"tel"}
              placeholder="Phone number"
            />
          </FormControl>
          <FormControl isRequired className="my-2">
            <Input
              name="email"
              onChange={handleChangePersonal}
              type={"email"}
              placeholder="Email id"
            />
          </FormControl>
        </div>
      </div>
    </Fragment>
  );
};

export default PersonalDetails;

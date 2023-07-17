import React, { useContext, useEffect, useState } from "react";
// import { IoMdCloudUpload } from "react-icons/io";
import { FormControl, Input, Heading } from "@chakra-ui/react";
import ResumeContext from "../../../../Context/ResumeContext";
import { Fragment } from "react";
const Skills = () => {
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
  const handleChangePersonal = (event) => {
    const { name, value } = event.target;
    setPersonalData({ ...personalData, [name]: value });
    if (event.target.name === "profileImage") {
      setPersonalData({
        ...personalData,
        profileImage: URL.createObjectURL(event.target.files[0]),
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
      <div>
        <div className="mb-2">
          <Heading as="h4" size="md" className="my-2">
            Technical Skills
          </Heading>
          <hr />
          <FormControl isRequired className="my-2">
            <Input
              name="skill"
              onChange={handleChangePersonal}
              type={"text"}
              placeholder="Separate skills by comma"
            />
          </FormControl>
          <FormControl isRequired className="my-2">
            <Input
              name="skill"
              onChange={handleChangePersonal}
              type={"text"}
              placeholder="Separate skills by comma"
            />
          </FormControl>
        </div>
      </div>
    </Fragment>
  );
};

export default Skills;

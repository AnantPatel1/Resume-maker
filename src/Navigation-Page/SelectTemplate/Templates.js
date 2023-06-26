import { NavLink } from "react-router-dom";
import { Heading, Text, Box } from "@chakra-ui/react";
import ThemeTemplateData from "../db/ThemeTemplateData";
import ResumeContext from "../../Context/ResumeContext";
import "./Templates.css";

export default function Templates() {
  return (
    <div class="container">
      <div class="row">
        <div
          class="col-lg-6"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Heading
            m={"1.5"}
            textAlign={{ base: "center", md: "start" }}
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
            lineHeight={"110%"}
          >
            Select a{" "}
            <Text as={"span"} color={"#38B2AC"}>
              Template{" "}
            </Text>
            from the list
          </Heading>
        </div>
        <div class="col-lg-6">
          <Box maxW={{ base: "100%", md: "61%" }} className="templatesList">
            {ThemeTemplateData.map((item, index) => {
              return (
                <div key={index} className="template">
                  <NavLink to="/steps/select-template/build-resume">
                    <img id={item.id} src={item.imageSrc} alt={item.imageAlt} />
                  </NavLink>
                </div>
              );
            })}
          </Box>
        </div>
      </div>
    </div>
  );
}

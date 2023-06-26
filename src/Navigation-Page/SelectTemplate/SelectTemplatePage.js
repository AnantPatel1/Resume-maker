import React from "react";
import { NavLink } from "react-router-dom";
import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
  Box,
} from "@chakra-ui/react";
import "./SelectTemplatePage.css";
import homeLogo from "./../../Assets/home-logo.png";
import { Image } from "@chakra-ui/react";
export default function SelectTemplate() {
  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <Container
              my={{ base: 1.5, md: 16 }}
              justifyContent={"space-between"}
              flexDirection={{ base: "column", md: "row", sm: "column" }}
              display={"flex"}
              alignItems={"center"}
              maxW={"7xl"}
            >
              <Stack
                width={{ base: "95%", md: "47%" }}
                textAlign={"center"}
                align={"center"}
                spacing={{ base: 8, md: 10 }}
                py={{ base: 1.5, md: 10, sm: "14" }}
              >
                <Heading
                  fontWeight={600}
                  fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
                  lineHeight={"110%"}
                >
                  Your resume in three{" "}
                  <Text as={"span"} color={"#38B2AC"}>
                    easy{" "}
                  </Text>
                  steps
                </Heading>

                <Text color={"gray.500"} maxW={"3xl"}>
                  Resume builder tools that assemble well-formatted resume.
                  Through a resume builder, you can create a
                  professional-looking resume in a few easy steps. This resume
                  builder offer different template options, so you can select
                  the template that best fits your needs and style.
                </Text>

                <Flex
                  _dark={{ color: "gray.50" }}
                  textAlign={"start"}
                  flexDirection={"column"}
                  w={"full"}
                >
                  <Box className="Bullet_Points">
                    <Button>1</Button>
                    <Text
                      _dark={{ color: "gray.400" }}
                      color={"gray.900"}
                      fontSize={"xl"}
                    >
                      Select a template from our collection.
                    </Text>
                  </Box>
                  <Box className="Bullet_Points">
                    <Button>2</Button>
                    <Text
                      _dark={{ color: "gray.400" }}
                      color={"gray.900"}
                      fontSize={"xl"}
                    >
                      Build you resume using our easy to use resume builder.
                    </Text>
                  </Box>
                  <Box className="Bullet_Points">
                    <Button>3</Button>
                    <Text
                      _dark={{ color: "gray.400" }}
                      color={"gray.900"}
                      fontSize={"xl"}
                    >
                      Download your resume.
                    </Text>
                  </Box>
                </Flex>
              </Stack>
            </Container>
          </div>
          <div class="col-lg-6">
            <Stack>
              <Image src={homeLogo} alt="home logo" my={"4"} />
              <NavLink className="btn" to="/steps/select-template" end>
                <Button
                  style={{ width: "100%" }}
                  rounded={"full"}
                  px={6}
                  className="mb-4"
                  colorScheme={"teal"}
                  bg={"#38B2AC"}
                  _hover={{ bg: "#319795" }}
                >
                  Select Template
                </Button>
              </NavLink>
            </Stack>
          </div>
        </div>
      </div>
    </>
  );
}

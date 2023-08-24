import {
    Box,
    Button,
    Center,
    Flex,
    Grid,
    Heading,
    Text,
  
  } from "@chakra-ui/react";
  import { ThemeContext } from "./ThemeContext";
  import { useContext, useEffect, useRef } from "react";
  import { EducationList } from "../db/educationdb";
  import { Link } from "react-router-dom";
  
  export default function Education() {
    const mainTheme = useContext(ThemeContext);
  
    const boxRef = useRef(null);
  
    return (
      <Box
        bg={mainTheme.theme.bg}
        p={{ base: "15px", sm: "20px", md: "45px" }}
        id="education"
      >
        {/* bar for decoration  */}
        <Box w="80%" margin="auto" borderTop="1.5px solid #ff651c">
          {/* box 1 for main projects  */}
        </Box>
        <Box m="auto" textAlign="center">
          <Box pt="55px">
            <Heading color="#ff651c" size="2xl">
              Education
            </Heading>
          </Box>
          <Grid
            templateColumns={{
              base: "1fr",   
            }}
            gap=" 20px 40px"
            mt="45px"
            ref={boxRef}
          >
            {EducationList?.map((education) => {
              return (
                <Box
                  p="0 20px"
                  textAlign="left"
                  className="education-card"
                  boxShadow="0px 3px 6px rgba(255, 101, 28, 0.5)"
                  _hover={{ background: mainTheme.theme.hover }}
                >
                  <Box>
                    <Heading
                      p="15px 0"
                      size="lg"
                      color="white"
                      className="education-title"
                      
                    >
                        <Text textAlign={"center"}>{education.heading}</Text>
                      
                    </Heading>
                  </Box>
  
    
                  <Box p="15px 0">
                    <Text fontWeight="bold" m="5px 0" color="#71797E" textAlign={"center"} fontSize="20px">
                      {education.title}
                    </Text>
                    <Box w="60%" ></Box>
                    <Text
                      color="#71797E"
                      className="education-description"
                      textAlign={"center"} fontSize="20px"
                    >
                      {education.description}
                    </Text>
                    <Box w="60%" ></Box>
                    <Text
                      color="#71797E"
                      className="education-description"
                      textAlign={"center"} fontSize="20px"
                    >
                      {education.passingYear}
                    </Text>
                  </Box>
                </Box> 
              );
            })}
          </Grid>
        </Box>
      </Box>
    );
  }
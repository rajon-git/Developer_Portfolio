import {
    Box,
    Grid,
    Heading,
    Text,
  
  } from "@chakra-ui/react";
  import { ThemeContext } from "./ThemeContext";
  import { useContext, useRef } from "react";
  import { EducationList } from "../db/educationdb";
  
  export default function Education() {
    const mainTheme = useContext(ThemeContext);
  
    const boxRef = useRef(null);
  
    return (
      <Box
        bg={mainTheme.theme.bg}
        p={{ base: "15px", sm: "1px", md: "45px" }}
        id="education"
      >
        {/* bar for decoration  */}
        <Box w="80%" margin="auto" borderTop="1.5px solid #26A69A">
          {/* box 1 for main projects  */}
        </Box>
        <Box m="auto" textAlign="center">
          <Box pt="55px">
            <Heading color="#26A69A" size="2xl">
              Education
            </Heading>
          </Box>
          <Grid
            templateColumns={{
              base: "1fr"  
            }}
            gap=" 20px 40px"
            mt="45px"
            ref={boxRef}
          >
            {EducationList?.map((education) => {
              return (
                <Box
                p={{ base: "0 10px", sm: "0 15px", md: "0 20px" }} // Adjust padding for responsiveness
                textAlign="left"
                width={{ base: "100%", sm: "95%", md: "60%" }} // Adjust width for responsiveness
                margin="auto"
                className="education-card"
                boxShadow="0px 3px 6px rgba(38, 166, 154, 0.5)"
                _hover={{ background: mainTheme.theme.hover }}
              >
                
              
                  <Box>
                    <Heading
                      p="1px 3px"
                      size="lg"
                      color="#26A69A"
                      className="education-title"
                      
                    >
                        <Text textAlign={"center"}>{education.heading}</Text>
                      
                    </Heading>
                  </Box>
  
    
                  <Box p="1px 3px">
                    <Text fontWeight="bold" m="1px 0" color="#71797E" textAlign={"center"} fontSize="20px">
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
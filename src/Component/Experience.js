import {
    Box,
    Flex,
    Grid,
    Heading,
    Text,
  } from "@chakra-ui/react";
  import { ThemeContext } from "./ThemeContext";
  import { useContext, useRef } from "react";
  import { ExperienceList } from "../db/experiencedb";
  import { MdLocationPin } from "react-icons/md";
  import { MdHomeRepairService } from "react-icons/md";
  
  export default function Experience() {
    const mainTheme = useContext(ThemeContext);
  
    const boxRef = useRef(null);
  
    return (
      <Box
        bg={mainTheme.theme.bg}
        p={{ base: "15px", sm: "1px", md: "45px" }}
        id="experience"
      >
        {/* bar for decoration  */}
        <Box w="80%" margin="auto" borderTop="1.5px solid #26A69A">
          {/* box 1 for main projects  */}
        </Box>
        <Box m="auto" textAlign="center">
          <Box pt="55px">
            <Heading color="#26A69A" size="xl">
              Professional Experience
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
            {ExperienceList?.map((experience) => {
              return (
                <Box
                p={{ base: "0 10px", sm: "0 15px", md: "0 20px", lg: "10px"}} // Adjust padding for responsiveness
                textAlign="left"
                width={{ base: "100%", sm: "95%", md: "60%" }} // Adjust width for responsiveness
                margin="auto"
                className="education-card"
                boxShadow= '0px 2px 6px rgba(38, 166, 154, 0.5), 0px -2px 6px rgba(38, 166, 154, 0.5)'
                _hover={{ background: mainTheme.theme.hover }}
              >
                
              
                  <Box>
                    <Flex justifyContent="space-between" alignItems="center">
                    <Heading
                      p="1px 3px"
                      size="lg"
                      color="#cc8360"
              
                    >
                        <Text>{experience.heading}</Text>
                      
                    </Heading>
                    <Text fontWeight="bold" m="1px 0" color="#71797E" fontSize="15px">
                      {experience.year}
                    </Text>
                    </Flex>
                  </Box>
  
    
                  <Box p="1px 3px">
                    <Text fontWeight="bold" m="1px 0" color="#71797E" fontSize="20px">
                    <Flex alignItems="center" gap="5px">
                    <MdHomeRepairService /> {experience.title}
                    </Flex>
                    </Text>
                    
                    <Text m="1px 0" color="#71797E" fontSize="15px">
                    <Flex alignItems="center" gap="5px">
                      <MdLocationPin /> {experience.address}
                    </Flex>
                    </Text>

                    <br></br>
                    
                    <Text fontWeight="bold" m="1px 0" color="#71797E" fontSize="15px">
                    Working Role:
                    </Text>
                    
                    <Text
                      color="#71797E"
                      className="education-description"
                     fontSize="15px"
                     style={{ marginLeft: "20px" }}
                     dangerouslySetInnerHTML={{ __html: experience.description }}
                    >
                      
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
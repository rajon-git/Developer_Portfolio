import { Box, Button, Flex, Grid, Heading, Text } from "@chakra-ui/react";
import { ThemeContext } from "./ThemeContext";
import { useContext, useRef } from "react";
import { ProjectList } from "../db/projectdb";
import { Link } from "react-router-dom";

export default function Project() {
  const mainTheme = useContext(ThemeContext);

  const boxRef = useRef(null);

  return (
    <Box
      bg={mainTheme.theme.bg}
      p={{ base: "15px", sm: "20px", md: "45px" }}
      id="projects"
    >
      {/* bar for decoration  */}
      <Box w="80%" margin="auto" borderTop="1.5px solid #26A69A">
        {/* box 1 for main projects  */}
      </Box>
      <Box m="auto" textAlign="center" w="80%">
        <Box pt="55px">
          <Heading color="#26A69A" size="xl">
            PROJECTS
          </Heading>
        </Box>
        <Grid
          templateColumns={{
            base: "repeat(1,1fr)",
            sm: "repeat(1,1fr)",
            md: "repeat(2,1fr)",
            lg: "repeat(3,1fr)",
          }}
          gap=" 20px 40px"
          mt="45px"
          ref={boxRef}
        >
          {ProjectList?.map((project) => {
            return (
              <Box
                p="0 20px"
                textAlign="left"
                className="project-card"
                boxShadow="0px 3px 6px rgba(38, 166, 154, 0.5)"
                _hover={{ background: mainTheme.theme.hover }}
              >
                <Box>
                  <Heading
                    p="15px 0"
                    fontSize="20px"
                    color="#26A69A"
                    className="project-title"
                  >
                    {project.heading}
                  </Heading>
                </Box>
                <Box pb="25px" w="80%" borderTop="1.5px solid #00796B"></Box>

                <Box w={{ base: "105%", sm: "100%" }}>
                  <Link to={project.liveLink} target="_blank"  rel="noopener noreferrer">
                    <img
                      style={{ width: "100%" }}
                      src={project.img}
                      alt="project"
                    />
                  </Link>
                </Box>
                <Box p="15px 0">
                  <Box w="60%" borderTop="1.5px solid #00796B"></Box>
                  <Text
                    textAlign="justify"
                    color={mainTheme.theme.dText}
                    className="project-description"
                    style={{ marginLeft: "5px" }}
                    dangerouslySetInnerHTML={{ __html: project.description }}
                  />
                </Box>
                {/* tech Stack */}
                <Box className="project-tech-stack">
                  <Heading size="sm" color="#26A69A">
                    Tech Stack
                  </Heading>
                  <Box w="60%" borderTop="1.5px solid #00796B"></Box>
                  <Grid
                    p="15px 0"
                    gap="15px"
                    templateColumns={{
                      base: "repeat(4,1fr)",
                      sm: "repeat(4,1fr)",
                      md: "repeat(4,1fr)",
                      lg: "repeat(5,1fr)",
                    }}
                    textAlign="center"
                  >
                    {project.techStack?.map((tech) => {
                      return (
                        <Box>
                          <Flex justifyContent="center">
                            <img
                              src={tech.img}
                              style={{ width: tech.wid }}
                              alt="tech"
                            />
                          </Flex>
                        </Box>
                      );
                    })}
                  </Grid>
                </Box>

                {/* access links */}
                <Box m="15px 0">
                  <Flex justify="space-around">
                    <Box>
                      <a href={project.gitLink} target="_blank"  rel="noopener noreferrer">
                        <Button
                          className="project-github-link"
                          background="none"
                          color="#26A69A"
                          outline="1px solid #26A69A"
                          _hover={{ background: "#ff651c", color: "white" }}
                          borderRadius="0px"
                          mt="10px"
                        >
                          GitHub
                        </Button>
                      </a>
                    </Box>
                    <Box>
                      <a href={project.liveLink} target="_blank"  rel="noopener noreferrer">
                        <Button
                          className="project-deployed-link"
                          background="none"
                          color="#26A69A"
                          outline="1px solid #26A69A"
                          _hover={{ background: "#26A69A", color: "white" }}
                          mt="10px"
                          borderRadius="0"
                        >
                          Live Demo
                        </Button>
                      </a>
                    </Box>
                  </Flex>
                </Box>
              </Box>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
}

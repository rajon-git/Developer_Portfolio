import { Box, Flex, Grid, Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { ThemeContext } from "./ThemeContext";
import { useContext } from "react";
import {
  chakra,
  css,
  express,
  git,
  html,
  javascript,
  mongodb,
  node,
  python,
  react,
  redux,
  tailwind,
  C,
  cplus,
  Django,
  mysql

} from "../db/techstack";

export default function Skills() {
  const mainTheme = useContext(ThemeContext);

  const skills = [
    html,
    css,
    javascript,
    react,
    express,
    mongodb,
    node,
    redux,
    chakra,
    tailwind,
    git,
    python,
    C,
    cplus,
    Django,
    mysql
  ];

  return (
    <Box
      bg={mainTheme.theme.bg}
      p={{ base: "5px", sm: "10px", md: "45px" }}
      id="skills"
      pb="50px"
    >
      <Box w="80%" margin="auto" borderTop="1.5px solid #26A69A"></Box>

      <Box textAlign="center" margin="auto" p={{ base: "25px" }}>
        <Box p="35px">
          <Heading color="#26A69A">SKILLS</Heading>
        </Box>
        <Grid
          gap={{ base: "15px", sm: "10px", md: "25px", lg: "25px" }}
          templateColumns={{
            base: "repeat(2,1fr)",
            sm: "repeat(3,1fr)",
            md: "repeat(4,1fr)",
            lg: "repeat(5,1fr)",
          }}
          m="auto"
          w={{ base: "100%", sm: "100%", md: "100%", lg: "77%" }}
        >
          {skills?.map((skill) => {
            return (
              <motion.div
                style={{ background: "transparent" }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 3px 6px rgba(38, 166, 154, 0.5)",
                  background: mainTheme.theme.hover,
                }}
                className="skills-card"
              >
                <Flex justifyContent="center">
                  <img
                    className="skills-card-img"
                    style={{ width: skill.swid }}
                    src={skill.img} 
                    alt="skills"
                  />
                </Flex>
                <Box alignContent="center" p="15px">
                  <Heading
                    size="md"
                    color="#71797E"
                    className="skills-card-name"
                  >
                    {skill.title}
                  </Heading>
                </Box>
              </motion.div>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
}
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import imgOlive from './../Banner/rajon.jpg'
import resume from './../Banner/RAJON_MERN.pdf'
import { motion } from "framer-motion";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default function About() {
  const theme = useContext(ThemeContext);
  return (
    <Box>
      <Flex
        id="about"
        className="section about"
        w={{ base: "90%", sm: "75%", md: "50%" }}
        p="10px"
        m="auto"
        borderTop="1.5px solid #ff651c"
        flexDirection="column"
        justify="center"
        align="center"
        textAlign="center"
      >
        <Flex mt="55px" w={{ base: "100%", sm: "70%", md: "80%", lg: "50%" }}>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Image
              _hover={{
                boxShadow:
                  "0px 3px 6px rgba(255, 101, 28, 0.5), 0px 3px 6px rgba(255, 101, 28, 0.3), 0px 3px 6px rgba(255, 101, 28, 0.1), 0px 3px 6px rgba(255, 101, 28, 0.9)",
              }}
              className="home-img"
              style={{
                borderRadius: "50% 50% 50% 50% / 75% 75% 25% 25%",
                width: "80%",
              }}
              m="auto"
              src={imgOlive}
            />
          </motion.div>
        </Flex>
        <Heading color="#ff651c" mt="25px">
          About Me
        </Heading>
        <Box mt="5px">
          <Text
            id="user-detail-intro"
            letterSpacing="1px"
            color={theme.theme.dText}
          >
            An Aspiring Full Stack Web Developer with a passion for MERN Stack
            development and proficiency in HTML, CSS, JavaScript, React, Redux.js, Node.js, Next.js , MongoDB , Express.js
            and ChakraUI is seeking opportunities to work in organizations that
            can challenge their abilities as a web developer. They are eager to
            undertake challenging projects and deliver exceptional results
          </Text>
        </Box>
        <Box p="5px 15px" fontWeight="bolder" color="#ff651c">
          <Link
            href={resume}
            target="_blank"
            download="Rajon-Ahamad-Resume"
            id="resume-link-2"
          >
            <Button
              background="none"
              color="#ff651c"
              outline="1px solid #ff651c"
              _hover={{ background: "#ff651c", color: "white" }}
              borderRadius="0px"
              mt="10px"
              id="resume-button-2"
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1rBwqvqWOO2JT82jHw-QfALzRaSNxdDeM/view?usp=sharing"
                )
              }
            >
              Resume
            </Button>
          </Link>
        </Box>
      </Flex>
    </Box>
  );
}
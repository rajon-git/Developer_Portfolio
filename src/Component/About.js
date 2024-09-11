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
import resume from './../Banner/MD_RAJON_AHAMAD_SHARIATPUR_CSE.pdf'
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
        w={{ base: "90%", sm: "75%", md: "50%", lg:"70%" }}
        p="10px"
        m="auto"
        borderTop="1.5px solid #26A69A"
        flexDirection="column"
        justify="center"
        align="center"
        textAlign="center"
        mt="-40px"
      >
        <Flex mt="20px" w={{ base: "100%", sm: "70%", md: "80%", lg: "50%" }}>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Image
              _hover={{
                boxShadow:
                  "0px 3px 6px rgba(38, 166, 154, 0.5), 0px 3px 6px rgba(38, 166, 154, 0.5), 0px 3px 6px rgba(38, 166, 154, 0.5), 0px 3px 6px rgba(38, 166, 154, 0.5)",
              }}
              className="home-img"
              style={{
                borderRadius: "50% 50% 50% 50% / 75% 75% 25% 25%",
                width: "70%",
              }}
              m="auto"
              src={imgOlive}
            />
          </motion.div>
        </Flex>
        <Heading color="#26A69A" mt="20px">
          About Me
        </Heading>
        <Box mt="5px">
          <Text
            id="user-detail-intro"
            letterSpacing="1px"
            color={theme.theme.dText}
            textAlign="justify"
          > 
            As a dedicated software developer, I bring proficiency in leveraging the C, C++, JavaScript, 
            Python, Reactjs, Django framework to build robust web applications. With a strong foundation 
            in Python programming and a keen eye for scalable design, I am passionate about crafting 
            efficient solutions that meet client needs and exceed expectations. My experience spans more than
            2 years, during which I have collaborated effectively in agile environments, ensuring high 
            standards of code quality and application performance. I am adept at translating complex 
            requirements into clean, maintainable code while staying abreast of industry best practices 
            and emerging technologies.

          </Text>
        </Box>
        <Box p="5px 15px" fontWeight="bolder" color="#26A69A">
          <Link
            href={resume}
            target="_blank"
            download="MD_Rajon-Ahamad-Shariatpur"
            id="resume-link-2"
          >
            <Button
              background="none"
              color="#26A69A"
              outline="1px solid #26A69A"
              _hover={{ background: "#26A69A", color: "white" }}
              borderRadius="0px"
              mt="10px"
              id="resume-button-2"
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1TNfXqfqLdt6uiL0a3mCIw0E-3hdlRfj2/view?usp=sharing"
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
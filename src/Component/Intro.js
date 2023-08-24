import {
  Box,
  Text,
  Flex,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import { MdEmail } from "react-icons/md";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export default function Intro() {
  const theme = useContext(ThemeContext);

  function handleDark() {
    theme.handleTheme("dark");
  }
  function handleLight() {
    theme.handleTheme("light");
  }

  function handleBlue() {
    theme.handleTheme("blue");
  }

  function handleGreen() {
    theme.handleTheme("green");
  }

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2,
        when: "beforeChildren",
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div variants={container} initial="hidden" animate="visible">
      <Box
        id="home"
        className="about section"
        background={theme && theme.bg}
        p="15px"
      >
        <Box
          p="15px"
          display={{ base: "none", sm: "none", md: "block" }}
          position="fixed"
          left="0"
          top="35%"
        >
          <motion.div variants={item}>
            <Flex mt="15px" justify="start">
              <MdEmail color="#ff651c" size="25px" />
            </Flex>
          </motion.div>

          <motion.div variants={item}>
            <Flex mt="25px">
              <Box w="10%">
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/md-rajon-ahamad-23938825b/"
                >
                  <AiFillLinkedin color="#ff651c" size="25px" />
                </a>
              </Box>
            </Flex>
          </motion.div>

          <motion.div variants={item}>
            <Flex mt="25px">
              <Box w="10%">
                <a target="_blank" href="https://github.com/rajon-git">
                  <AiFillGithub color="#ff651c" size="25px" />
                </a>
              </Box>
            </Flex>
          </motion.div>
        </Box>
        <Flex
          pt={{ base: "55px", sm: "45px", md: "55px" }}
          pb="50px"
          margin="auto"
          flexDirection={{ base: "column", sm: "column", md: "column" }}
          w="90%"
        >
          <Flex
            w={{ base: "90%", sm: "75%", md: "50%" }}
            p="10px"
            margin="auto"
            flexDirection="column"
            justify="center"
            align="center"
            textAlign="center"
          >
            <motion.div variants={item}>
              <Box mb="10px">
                <Text fontWeight="bold" color="#ff651c" fontSize="2xl">
                  Hello, I am
                </Text>
              </Box>
            </motion.div>

            <motion.div variants={item}>
              <Box mt="15px">
                <Text
                  fontWeight="500"
                  fontSize="55px"
                  display="inline"
                  color="#ff651c"
                  id="user-detail-name"
                  letterSpacing="2px"
                >
                  MD. Rajon Ahamad
                </Text>
              </Box>
            </motion.div>

            <motion.div variants={item}>
              <Box mb="10px">
                <Text fontWeight="bold" color="#ff651c" fontSize="2xl">
                  Mern Developer
                </Text>
              </Box>
            </motion.div>

          </Flex>

          {/* About Me */}
        </Flex>
      </Box>
    </motion.div>
  );
}

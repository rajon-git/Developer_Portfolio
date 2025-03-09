import {
  Box,
  Text,
  Flex,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import { MdEmail } from "react-icons/md";
import { AiFillGithub, AiFillLinkedin  } from "react-icons/ai";
import { GiHeraldicSun } from "react-icons/gi";
import { SiCodeforces, SiLeetcode } from "react-icons/si";


export default function Intro() {
  const theme = useContext(ThemeContext);

  function handleDark() {
    theme.handleTheme("dark");
  }
  function handleLight() {
    theme.handleTheme("light");
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
        <Popover>
          <PopoverTrigger>
            <Box
              position="fixed"
              right={{ base: "31px", sm: "42px", md: "50px", lg: "4" }}
              top={{ base: "65px", sm: "65px", md: "60px", lg: "3" }}
            >
              <GiHeraldicSun size="30px" color="#26A69A" />
            </Box>
          </PopoverTrigger>
          <PopoverContent
            mr="20px"
            mt="10px"
            
            w="100px"
            h="50"
            bg="gray.600"
            border="1px solid #00796B"
          >
            <PopoverBody>
              <Flex justify="center" >
                {/* light theme  */}
                <Box
                  border="1px solid #00796B"
                  borderRadius="50%"
                  onClick={handleLight}
                >
                  <Box
                    bg="#ffffff"
                    borderRadius="50%"
                    m="3px"
                    width="30px"
                    height="30px"
                  ></Box>
                </Box>
                {/* dark theme */}
                <Box
                  border="1px solid #00796B"
                  borderRadius="50%"
                  onClick={handleDark}
                >
                  <Box
                    bg="black"
                    borderRadius="50%"
                    m="3px"
                    width="30px"
                    height="30px"
                  ></Box>
                </Box>
              </Flex>
            </PopoverBody>
          </PopoverContent>
        </Popover>

        <Box
          p="15px"
          display={{ base: "none", sm: "none", md: "block" }}
          position="fixed"
          left="0"
          top="35%"
        >
          <motion.div variants={item}>
            <Flex mt="15px" justify="start">
              <a href="mailto:rajon.zhsust15@gmail.com" target="_blank"  rel="noopener noreferrer">
                <MdEmail color="#26A69A" size="25px" />
              </a>
            </Flex>
          </motion.div>

          <motion.div variants={item}>
            <Flex mt="25px">
              <Box w="10%">
                <a
                  href="https://www.linkedin.com/in/md-rajon-ahamad-23938825b/" target="_blank"  rel="noopener noreferrer">
                  <AiFillLinkedin color="#26A69A" size="25px" />
                </a>
              </Box>
            </Flex>
          </motion.div>

          <motion.div variants={item}>
            <Flex mt="25px">
              <Box w="10%">
                <a href="https://github.com/rajon-git" target="_blank"  rel="noopener noreferrer">
                  <AiFillGithub color="#26A69A" size="25px" />
                </a>
              </Box>
            </Flex>
          </motion.div>

          <motion.div variants={item}>
            <Flex mt="25px">
              <Box w="10%">
                <a href="https://codeforces.com/profile/hacker_04" target="_blank"  rel="noopener noreferrer">
                  <SiCodeforces color="#26A69A" size="25px" />
                </a>
              </Box>
            </Flex>
          </motion.div>

          <motion.div variants={item}>
            <Flex mt="25px">
              <Box w="10%">
                <a href="https://leetcode.com/rajon_bd/" target="_blank"  rel="noopener noreferrer">
                <SiLeetcode color="#26A69A" size="25px" />
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
                <Text fontWeight="bold" color="#26A69A" fontSize="2xl">
                  Hello, I am
                </Text>
              </Box>
            </motion.div>

            <motion.div variants={item}>
              <Box mt="15px">
                <Text
                  fontWeight="600"
                  fontSize={{ base: "lg", sm: "2xl", md: "3xl" }}
                  display="inline"
                  color="#cc8360"
                  id="user-detail-name"
                  letterSpacing="2px"
                >
                  MD. Rajon Ahamad
                </Text>
              </Box>
            </motion.div>

            <motion.div variants={item}>
              <Box mt="15px" color="#ff651c">
                <img
                  src="https://readme-typing-svg.demolab.com?weight=400&size=25&pause=1000&color=26A69A&background=FFFFFF00&center=true&vCenter=true&width=435&lines=Software Engineer;Full+Stack+Web+Developer;Problem+Solver"
                  alt="Typing SVG"
                /> 
              </Box>
            </motion.div>
          </Flex>
        </Flex>
      </Box>
    </motion.div>
  );
}

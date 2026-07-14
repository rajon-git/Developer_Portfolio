import {
  Badge,
  Box,
  Button,
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  Image,
  Link as ChakraLink,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useContext } from "react";
import { motion } from "framer-motion";
import { FiExternalLink, FiGithub, FiLayers } from "react-icons/fi";

import { ThemeContext } from "./ThemeContext";
import { ProjectList } from "../db/projectdb";

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

export default function Project() {
  const mainTheme = useContext(ThemeContext);

  const primaryColor = "#26A69A";
  const darkBg = "#071A1C";
  const darkText = "#0F172A";
  const bodyText = mainTheme?.theme?.dText || "#475569";
  const sectionBg = mainTheme?.theme?.bg || "#F8FAFC";

  return (
    <Box
      as="section"
      id="projects"
      bg={sectionBg}
      py={{ base: "64px", md: "96px" }}
      px={{ base: "16px", md: "28px" }}
      overflow="hidden"
      position="relative"
    >
      {/* Animated Background Glow */}
      <MotionBox
        position="absolute"
        top="-120px"
        right="-100px"
        w={{ base: "260px", md: "420px" }}
        h={{ base: "260px", md: "420px" }}
        borderRadius="full"
        bg="rgba(38,166,154,0.14)"
        filter="blur(80px)"
        animate={{
          y: [0, 24, 0],
          x: [0, -18, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <MotionBox
        position="absolute"
        bottom="-160px"
        left="-120px"
        w={{ base: "260px", md: "460px" }}
        h={{ base: "260px", md: "460px" }}
        borderRadius="full"
        bg="rgba(14,165,233,0.10)"
        filter="blur(90px)"
        animate={{
          y: [0, -24, 0],
          x: [0, 18, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <Box maxW="1180px" mx="auto" position="relative" zIndex="1">
        {/* Header */}
        <Grid
          templateColumns={{ base: "1fr", lg: "0.8fr 1.2fr" }}
          gap={{ base: 6, lg: 12 }}
          alignItems="end"
          mb={{ base: 10, md: 14 }}
        >
          <MotionBox
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            viewport={{ once: true }}
          >
            <HStack spacing="3" mb="4">
              <Box w="44px" h="2px" bg={primaryColor} borderRadius="full" />

              <Text
                fontSize="xs"
                fontWeight="900"
                letterSpacing="3px"
                color={primaryColor}
                textTransform="uppercase"
              >
                Portfolio
              </Text>
            </HStack>

            <Heading
              as="h2"
              fontSize={{ base: "3xl", md: "5xl" }}
              lineHeight="1.08"
              color={darkText}
              fontWeight="950"
              letterSpacing="-1px"
            >
              Featured Projects
            </Heading>
          </MotionBox>

          <MotionBox
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            viewport={{ once: true }}
          >
            <Text
              fontSize={{ base: "sm", md: "md" }}
              color={bodyText}
              lineHeight="1.9"
              maxW="680px"
            >
              Selected work across ERP customization, business automation,
              dashboards, reporting systems, and full-stack web application
              development.
            </Text>
          </MotionBox>
        </Grid>

        {/* Projects */}
        <VStack spacing={{ base: 7, md: 9 }} align="stretch">
          {(ProjectList || []).map((project, index) => {
            const title = project.heading || project.title || "Project Title";
            const description =
              project.description || "Project description is not available.";
            const liveLink = project.liveLink || "#";
            const gitLink = project.gitLink || "#";
            const techStack = Array.isArray(project.techStack)
              ? project.techStack
              : [];

            const isReverse = index % 2 !== 0;
            const projectNumber = String(index + 1).padStart(2, "0");

            return (
              <MotionBox
                key={`${title}-${index}`}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: index * 0.08 }}
                viewport={{ once: true, amount: 0.2 }}
                className="project-card"
              >
                <MotionBox
                  bg="rgba(255,255,255,0.92)"
                  border="1px solid"
                  borderColor="gray.200"
                  borderRadius="34px"
                  overflow="hidden"
                  boxShadow="0 24px 80px rgba(15, 23, 42, 0.09)"
                  backdropFilter="blur(14px)"
                  whileHover={{
                    y: -6,
                    boxShadow: "0 34px 100px rgba(15, 23, 42, 0.16)",
                  }}
                  transition={{ duration: 0.28, ease: "easeOut" }}
                  _hover={{
                    borderColor: "teal.200",
                  }}
                >
                  <Grid
                    templateColumns={{ base: "1fr", lg: "1.05fr 0.95fr" }}
                    minH={{ base: "auto", lg: "440px" }}
                  >
                    {/* Content */}
                    <GridItem order={{ base: 2, lg: isReverse ? 2 : 1 }}>
                      <Flex
                        h="100%"
                        direction="column"
                        justify="space-between"
                        p={{ base: 6, md: 8, lg: 10 }}
                      >
                        <Box>
                          <HStack spacing="3" mb="5" flexWrap="wrap">
                            <Badge
                              px="3"
                              py="1.5"
                              borderRadius="full"
                              bg="teal.50"
                              color="teal.700"
                              border="1px solid"
                              borderColor="teal.100"
                              fontSize="10px"
                              fontWeight="900"
                            >
                              Case Study
                            </Badge>

                            <Badge
                              px="3"
                              py="1.5"
                              borderRadius="full"
                              bg="gray.100"
                              color="gray.700"
                              fontSize="10px"
                              fontWeight="900"
                            >
                              Project {projectNumber}
                            </Badge>
                          </HStack>

                          <Heading
                            as="h3"
                            fontSize={{ base: "1xl", md: "2xl" }}
                            color={darkText}
                            fontWeight="950"
                            lineHeight="1.16"
                            letterSpacing="-0.4px"
                            className="project-title"
                          >
                            {title}
                          </Heading>

                          <MotionBox
                            w="82px"
                            borderTop={`4px solid ${primaryColor}`}
                            my="5"
                            borderRadius="full"
                            initial={{ width: "0px" }}
                            whileInView={{ width: "82px" }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                          />

                          <Box
                            color={bodyText}
                            fontSize={{ base: "sm", md: "15px" }}
                            lineHeight="1.9"
                            className="project-description"
                            sx={{
                              ul: {
                                paddingLeft: "18px",
                                marginTop: "8px",
                              },
                              li: {
                                marginBottom: "7px",
                              },
                              strong: {
                                color: darkText,
                                fontWeight: "900",
                              },
                            }}
                            dangerouslySetInnerHTML={{ __html: description }}
                          />
                        </Box>
                  
                      </Flex>
                    </GridItem>

                    {/* Image */}
                    <GridItem order={{ base: 1, lg: isReverse ? 1 : 2 }}>
                      <Box
                        h="100%"
                        minH={{ base: "280px", md: "360px", lg: "100%" }}
                        bg={darkBg}
                        position="relative"
                        overflow="hidden"
                        p={{ base: 4, md: 6 }}
                      >
                        <MotionBox
                          position="absolute"
                          top="-110px"
                          right="-90px"
                          w="260px"
                          h="260px"
                          borderRadius="full"
                          bg="rgba(38,166,154,0.28)"
                          filter="blur(55px)"
                          animate={{
                            scale: [1, 1.12, 1],
                            x: [0, -14, 0],
                            y: [0, 12, 0],
                          }}
                          transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        />

                        <MotionBox
                          position="absolute"
                          bottom="-120px"
                          left="-90px"
                          w="260px"
                          h="260px"
                          borderRadius="full"
                          bg="rgba(14,165,233,0.14)"
                          filter="blur(65px)"
                          animate={{
                            scale: [1, 1.14, 1],
                            x: [0, 14, 0],
                            y: [0, -12, 0],
                          }}
                          transition={{
                            duration: 7,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        />

                        <ChakraLink
                          href={liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          _hover={{ textDecoration: "none" }}
                          display="block"
                          h="100%"
                          position="relative"
                          zIndex="1"
                        >
                          <MotionFlex
                            h="100%"
                            align="center"
                            justify="center"
                            borderRadius="28px"
                            border="1px solid rgba(255,255,255,0.16)"
                            bg="rgba(255,255,255,0.08)"
                            backdropFilter="blur(16px)"
                            p={{ base: 3, md: 4 }}
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.25 }}
                          >
                            <Image
                              src={project.img}
                              alt={title}
                              w="100%"
                              h="100%"
                              maxH={{
                                base: "280px",
                                md: "340px",
                                lg: "390px",
                              }}
                              objectFit="cover"
                              borderRadius="22px"
                              border="1px solid rgba(255,255,255,0.14)"
                              className="project-img"
                            />
                          </MotionFlex>
                        </ChakraLink>
                      </Box>
                    </GridItem>
                  </Grid>
                </MotionBox>
              </MotionBox>
            );
          })}
        </VStack>
      </Box>
    </Box>
  );
}
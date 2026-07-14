import {
  Badge,
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useContext } from "react";
import { motion } from "framer-motion";
import {
  MdHomeRepairService,
  MdLocationPin,
  MdOutlineCalendarMonth,
  MdWorkOutline,
} from "react-icons/md";
import { FiBriefcase, FiCheckCircle } from "react-icons/fi";

import { ThemeContext } from "./ThemeContext";
import { ExperienceList } from "../db/experiencedb";

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

export default function Experience() {
  const mainTheme = useContext(ThemeContext);

  const primaryColor = "#26A69A";
  const darkBg = "#071A1C";
  const darkText = "#0F172A";
  const bodyText = mainTheme?.theme?.dText || "#475569";
  const sectionBg = mainTheme?.theme?.bg || "#F8FAFC";

  const getCompany = (experience) =>
    experience.company || experience.heading || "Company Name";

  const getRole = (experience) =>
    experience.role || experience.title || "Software Developer";

  const getLocation = (experience) =>
    experience.location || experience.address || "Dhaka, Bangladesh";

  const getPeriod = (experience) =>
    experience.period || experience.year || "Present";

  const getType = (experience) =>
    experience.type ||
    (getPeriod(experience).toLowerCase().includes("present")
      ? "Current"
      : "Full Time");

  const getResponsibilities = (experience) => {
    if (Array.isArray(experience.responsibilities)) {
      return experience.responsibilities;
    }

    return [];
  };

  const getSkills = (experience) => {
    if (Array.isArray(experience.skills)) {
      return experience.skills;
    }

    return [];
  };

  return (
    <Box
      as="section"
      id="experience"
      bg={sectionBg}
      py={{ base: "64px", md: "96px" }}
      px={{ base: "16px", md: "28px" }}
      overflow="hidden"
      position="relative"
    >
      {/* Animated Background Glow */}
      <MotionBox
        position="absolute"
        top="-140px"
        left="-110px"
        w={{ base: "260px", md: "430px" }}
        h={{ base: "260px", md: "430px" }}
        borderRadius="full"
        bg="rgba(38,166,154,0.13)"
        filter="blur(85px)"
        animate={{
          x: [0, 22, 0],
          y: [0, 18, 0],
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
        right="-120px"
        w={{ base: "260px", md: "460px" }}
        h={{ base: "260px", md: "460px" }}
        borderRadius="full"
        bg="rgba(14,165,233,0.10)"
        filter="blur(95px)"
        animate={{
          x: [0, -22, 0],
          y: [0, -18, 0],
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
                Work Experience
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
              Work Experience
            </Heading>
          </MotionBox>

          <MotionBox
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            viewport={{ once: true }}
          >
            <Text
              maxW="680px"
              fontSize={{ base: "sm", md: "md" }}
              lineHeight="1.9"
              color={bodyText}
            >
              Practical experience in ERP customization, backend engineering,
              frontend implementation, business automation, dashboards, reports,
              workflows, and production support.
            </Text>
          </MotionBox>
        </Grid>

        {/* Timeline */}
        <Box position="relative">
          <Box
            display={{ base: "none", lg: "block" }}
            position="absolute"
            top="0"
            bottom="0"
            left="139px"
            w="2px"
            bg="linear-gradient(180deg, rgba(38,166,154,0), rgba(38,166,154,0.65), rgba(38,166,154,0))"
          />

          <VStack spacing={{ base: 7, md: 9 }} align="stretch">
            {(ExperienceList || []).map((experience, index) => {
              const company = getCompany(experience);
              const role = getRole(experience);
              const location = getLocation(experience);
              const period = getPeriod(experience);
              const type = getType(experience);
              const responsibilities = getResponsibilities(experience);
              const skills = getSkills(experience);

              return (
                <MotionBox
                  key={`${company}-${role}-${period}-${index}`}
                  initial={{ opacity: 0, y: 36 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.65, delay: index * 0.08 }}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <Grid
                    templateColumns={{ base: "1fr", lg: "280px 1fr" }}
                    gap={{ base: 5, lg: 7 }}
                    alignItems="stretch"
                    position="relative"
                  >
                    {/* Timeline Dot */}
                    <MotionFlex
                      display={{ base: "none", lg: "flex" }}
                      position="absolute"
                      left="121px"
                      top="34px"
                      w="38px"
                      h="38px"
                      borderRadius="full"
                      align="center"
                      justify="center"
                      bg={darkBg}
                      color={primaryColor}
                      border="4px solid"
                      borderColor={sectionBg}
                      boxShadow="0 0 0 4px rgba(38,166,154,0.18)"
                      zIndex="3"
                      initial={{ scale: 0.7, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.35, delay: index * 0.08 }}
                      viewport={{ once: true }}
                    >
                      <FiBriefcase />
                    </MotionFlex>

                    {/* Left Meta Card */}
                    <GridItem>
                      <MotionBox
                        h="100%"
                        bg={darkBg}
                        color="white"
                        borderRadius="28px"
                        p={{ base: 5, md: 6 }}
                        position="relative"
                        overflow="hidden"
                        boxShadow="0 24px 80px rgba(15, 23, 42, 0.16)"
                        whileHover={{
                          y: -5,
                          boxShadow: "0 34px 95px rgba(15, 23, 42, 0.22)",
                        }}
                        transition={{ duration: 0.25 }}
                      >
                        <MotionBox
                          position="absolute"
                          top="-80px"
                          right="-80px"
                          w="190px"
                          h="190px"
                          borderRadius="full"
                          bg="rgba(38,166,154,0.30)"
                          filter="blur(48px)"
                          animate={{
                            scale: [1, 1.12, 1],
                            x: [0, -10, 0],
                            y: [0, 10, 0],
                          }}
                          transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        />

                        <Box position="relative" zIndex="1">
                          <Flex
                            w="54px"
                            h="54px"
                            borderRadius="18px"
                            align="center"
                            justify="center"
                            bg="rgba(38,166,154,0.16)"
                            border="1px solid rgba(38,166,154,0.34)"
                            color={primaryColor}
                            mb="5"
                          >
                            <MdWorkOutline size="27px" />
                          </Flex>

                          <Badge
                            px="3"
                            py="1.5"
                            borderRadius="full"
                            bg={
                              type === "Current"
                                ? "teal.400"
                                : "whiteAlpha.200"
                            }
                            color={type === "Current" ? darkBg : "white"}
                            fontSize="10px"
                            fontWeight="900"
                            mb="4"
                          >
                            {type}
                          </Badge>

                          <Heading
                            as="h3"
                            fontSize={{ base: "xl", md: "2xl" }}
                            lineHeight="1.2"
                            fontWeight="900"
                          >
                            {role}
                          </Heading>

                          <Text
                            mt="3"
                            color="gray.300"
                            fontSize="sm"
                            lineHeight="1.7"
                            fontWeight="700"
                          >
                            {company}
                          </Text>

                          <VStack align="stretch" spacing="3" mt="6">
                            <HStack align="flex-start" spacing="2">
                              <Box color={primaryColor} pt="2px">
                                <MdLocationPin />
                              </Box>
                              <Text
                                fontSize="xs"
                                color="gray.300"
                                lineHeight="1.7"
                              >
                                {location}
                              </Text>
                            </HStack>

                            <HStack align="flex-start" spacing="2">
                              <Box color={primaryColor} pt="2px">
                                <MdOutlineCalendarMonth />
                              </Box>
                              <Text
                                fontSize="xs"
                                color="gray.300"
                                lineHeight="1.7"
                              >
                                {period}
                              </Text>
                            </HStack>
                          </VStack>
                        </Box>
                      </MotionBox>
                    </GridItem>

                    {/* Right Details Card */}
                    <GridItem>
                      <MotionBox
                        h="100%"
                        bg="rgba(255,255,255,0.94)"
                        border="1px solid"
                        borderColor="gray.200"
                        borderRadius="28px"
                        p={{ base: 5, md: 7 }}
                        boxShadow="0 24px 80px rgba(15, 23, 42, 0.08)"
                        backdropFilter="blur(14px)"
                        whileHover={{
                          y: -5,
                          boxShadow: "0 34px 95px rgba(15, 23, 42, 0.13)",
                        }}
                        transition={{ duration: 0.25 }}
                        _hover={{
                          borderColor: "teal.200",
                        }}
                      >
                        <Flex
                          direction={{ base: "column", md: "row" }}
                          align={{ base: "flex-start", md: "center" }}
                          justify="space-between"
                          gap="4"
                          mb="6"
                        >
                          <Box>
                            <Text
                              fontSize="xs"
                              fontWeight="900"
                              color={primaryColor}
                              textTransform="uppercase"
                              letterSpacing="2px"
                            >
                              {company}
                            </Text>

                            <Heading
                              mt="2"
                              as="h3"
                              fontSize={{ base: "xl", md: "2xl" }}
                              color={darkText}
                              fontWeight="950"
                              lineHeight="1.25"
                            >
                              {role}
                            </Heading>
                          </Box>

                          <HStack
                            px="3"
                            py="2"
                            borderRadius="full"
                            bg="teal.50"
                            color="teal.700"
                            border="1px solid"
                            borderColor="teal.100"
                            fontSize="xs"
                            fontWeight="900"
                            whiteSpace="nowrap"
                          >
                            <MdHomeRepairService />
                            <Text>{period}</Text>
                          </HStack>
                        </Flex>

                        <Box
                          borderLeft="3px solid"
                          borderColor={primaryColor}
                          pl={{ base: 4, md: 5 }}
                          mb="7"
                        >
                          <Text
                            fontSize="sm"
                            fontWeight="900"
                            color={darkText}
                            mb="4"
                          >
                            Key Responsibilities
                          </Text>

                          {responsibilities.length > 0 ? (
                            <VStack align="stretch" spacing="3">
                              {responsibilities.map((item, idx) => (
                                <MotionFlex
                                  key={`${company}-responsibility-${idx}`}
                                  align="flex-start"
                                  gap="3"
                                  initial={{ opacity: 0, x: 18 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  transition={{
                                    duration: 0.35,
                                    delay: idx * 0.035,
                                  }}
                                  viewport={{ once: true }}
                                >
                                  <Flex
                                    w="24px"
                                    h="24px"
                                    align="center"
                                    justify="center"
                                    borderRadius="full"
                                    bg="teal.50"
                                    color={primaryColor}
                                    border="1px solid"
                                    borderColor="teal.100"
                                    flexShrink={0}
                                    mt="2px"
                                  >
                                    <FiCheckCircle size="13px" />
                                  </Flex>

                                  <Text
                                    fontSize={{ base: "sm", md: "15px" }}
                                    color={bodyText}
                                    lineHeight="1.8"
                                  >
                                    {item}
                                  </Text>
                                </MotionFlex>
                              ))}
                            </VStack>
                          ) : (
                            <Box
                              color={bodyText}
                              fontSize={{ base: "sm", md: "15px" }}
                              lineHeight="1.8"
                              sx={{
                                p: {
                                  marginBottom: "10px",
                                },
                              }}
                              dangerouslySetInnerHTML={{
                                __html:
                                  experience.description ||
                                  "No responsibility details added.",
                              }}
                            />
                          )}
                        </Box>

                        {skills.length > 0 && (
                          <Box>
                            <Text
                              fontSize="xs"
                              fontWeight="900"
                              color="gray.500"
                              textTransform="uppercase"
                              letterSpacing="1.5px"
                              mb="3"
                            >
                              Technologies / Domains
                            </Text>

                            <HStack
                              spacing="2"
                              flexWrap="wrap"
                              align="flex-start"
                            >
                              {skills.map((skill, skillIndex) => (
                                <MotionBox
                                  key={`${company}-${skill}-${skillIndex}`}
                                  initial={{ opacity: 0, scale: 0.9 }}
                                  whileInView={{ opacity: 1, scale: 1 }}
                                  transition={{
                                    duration: 0.28,
                                    delay: skillIndex * 0.025,
                                  }}
                                  viewport={{ once: true }}
                                >
                                  <Badge
                                    px="3"
                                    py="1.5"
                                    mb="2"
                                    borderRadius="full"
                                    bg="#F0FDFA"
                                    color="teal.700"
                                    border="1px solid"
                                    borderColor="teal.100"
                                    fontSize="11px"
                                    fontWeight="800"
                                    _hover={{
                                      bg: "teal.100",
                                      transform: "translateY(-2px)",
                                    }}
                                    transition="all 0.2s ease"
                                  >
                                    {skill}
                                  </Badge>
                                </MotionBox>
                              ))}
                            </HStack>
                          </Box>
                        )}
                      </MotionBox>
                    </GridItem>
                  </Grid>
                </MotionBox>
              );
            })}
          </VStack>
        </Box>
      </Box>
    </Box>
  );
}
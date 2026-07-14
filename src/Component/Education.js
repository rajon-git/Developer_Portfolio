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
import { FaUniversity } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa6";
import { FcDepartment } from "react-icons/fc";
import { FaBusinessTime } from "react-icons/fa";
import { FiAward, FiBookOpen, FiCalendar } from "react-icons/fi";

import { ThemeContext } from "./ThemeContext";
import { EducationList } from "../db/educationdb";

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

export default function Education() {
  const mainTheme = useContext(ThemeContext);

  const primaryColor = "#26A69A";
  const darkBg = "#071A1C";
  const darkText = "#0F172A";
  const bodyText = mainTheme?.theme?.dText || "#475569";
  const sectionBg = mainTheme?.theme?.bg || "#F8FAFC";

  const getDegree = (education) =>
    education.heading || education.degree || "Degree / Certification";

  const getInstitute = (education) =>
    education.title || education.institute || "Institution Name";

  const getDepartment = (education) =>
    education.description || education.department || "Department / Field of Study";

  const getPassingYear = (education) =>
    education.passingYear ||
    education.year ||
    education.duration ||
    "Passing Year";

  return (
    <Box
      as="section"
      id="education"
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
        right="-120px"
        w={{ base: "260px", md: "430px" }}
        h={{ base: "260px", md: "430px" }}
        borderRadius="full"
        bg="rgba(38,166,154,0.13)"
        filter="blur(85px)"
        animate={{
          x: [0, -22, 0],
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
        bottom="-170px"
        left="-130px"
        w={{ base: "260px", md: "460px" }}
        h={{ base: "260px", md: "460px" }}
        borderRadius="full"
        bg="rgba(14,165,233,0.10)"
        filter="blur(95px)"
        animate={{
          x: [0, 22, 0],
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
                Academic Background
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
              Education
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
              Academic foundation supporting software engineering, ERP
              development, backend architecture, and business application
              development.
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
            left="129px"
            w="2px"
            bg="linear-gradient(180deg, rgba(38,166,154,0), rgba(38,166,154,0.65), rgba(38,166,154,0))"
          />

          <VStack spacing={{ base: 7, md: 9 }} align="stretch">
            {(EducationList || []).map((education, index) => {
              const degree = getDegree(education);
              const institute = getInstitute(education);
              const department = getDepartment(education);
              const passingYear = getPassingYear(education);

              return (
                <MotionBox
                  key={`${degree}-${institute}-${passingYear}-${index}`}
                  initial={{ opacity: 0, y: 36 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.65, delay: index * 0.08 }}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <Grid
                    templateColumns={{ base: "1fr", lg: "260px 1fr" }}
                    gap={{ base: 5, lg: 7 }}
                    alignItems="stretch"
                    position="relative"
                  >
                    {/* Timeline Dot */}
                    <MotionFlex
                      display={{ base: "none", lg: "flex" }}
                      position="absolute"
                      left="111px"
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
                      <FiBookOpen />
                    </MotionFlex>

                    {/* Left Academic Card */}
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
                            w="56px"
                            h="56px"
                            borderRadius="18px"
                            align="center"
                            justify="center"
                            bg="rgba(38,166,154,0.16)"
                            border="1px solid rgba(38,166,154,0.34)"
                            color={primaryColor}
                            mb="5"
                          >
                            <FaUserGraduate size="27px" />
                          </Flex>

                          <Badge
                            px="3"
                            py="1.5"
                            borderRadius="full"
                            bg="teal.400"
                            color={darkBg}
                            fontSize="10px"
                            fontWeight="900"
                            mb="4"
                          >
                            Education
                          </Badge>

                          <Heading
                            as="h3"
                            fontSize={{ base: "xl", md: "2xl" }}
                            lineHeight="1.25"
                            fontWeight="900"
                          >
                            {degree}
                          </Heading>

                          <VStack align="stretch" spacing="3" mt="6">
                            <HStack align="flex-start" spacing="2">
                              <Box color={primaryColor} pt="2px">
                                <FaUniversity />
                              </Box>

                              <Text
                                fontSize="xs"
                                color="gray.300"
                                lineHeight="1.7"
                              >
                                {institute}
                              </Text>
                            </HStack>

                            <HStack align="flex-start" spacing="2">
                              <Box color={primaryColor} pt="2px">
                                <FaBusinessTime />
                              </Box>

                              <Text
                                fontSize="xs"
                                color="gray.300"
                                lineHeight="1.7"
                              >
                                {passingYear}
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
                              {degree}
                            </Text>

                            <Heading
                              mt="2"
                              as="h3"
                              fontSize={{ base: "xl", md: "2xl" }}
                              color={darkText}
                              fontWeight="950"
                              lineHeight="1.25"
                            >
                              {institute}
                            </Heading>
                          </Box>

                          <Badge
                            px="4"
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
                            {passingYear}
                          </Badge>
                        </Flex>

                        <VStack align="stretch" spacing="4">
                          <MotionFlex
                            align="flex-start"
                            gap="3"
                            initial={{ opacity: 0, x: 18 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.35 }}
                            viewport={{ once: true }}
                          >
                            <Flex
                              w="42px"
                              h="42px"
                              borderRadius="15px"
                              align="center"
                              justify="center"
                              bg="teal.50"
                              color="teal.700"
                              border="1px solid"
                              borderColor="teal.100"
                              flexShrink={0}
                            >
                              <FaUniversity />
                            </Flex>

                            <Box>
                              <Text
                                fontSize="xs"
                                fontWeight="900"
                                color="gray.500"
                                textTransform="uppercase"
                                letterSpacing="1.5px"
                              >
                                Institution
                              </Text>

                              <Text
                                mt="1"
                                fontSize={{ base: "sm", md: "15px" }}
                                color={bodyText}
                                lineHeight="1.8"
                                fontWeight="700"
                              >
                                {institute}
                              </Text>
                            </Box>
                          </MotionFlex>

                          <MotionFlex
                            align="flex-start"
                            gap="3"
                            initial={{ opacity: 0, x: 18 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.35, delay: 0.06 }}
                            viewport={{ once: true }}
                          >
                            <Flex
                              w="42px"
                              h="42px"
                              borderRadius="15px"
                              align="center"
                              justify="center"
                              bg="gray.50"
                              border="1px solid"
                              borderColor="gray.200"
                              flexShrink={0}
                            >
                              <FcDepartment size="22px" />
                            </Flex>

                            <Box>
                              <Text
                                fontSize="xs"
                                fontWeight="900"
                                color="gray.500"
                                textTransform="uppercase"
                                letterSpacing="1.5px"
                              >
                                Department / Field
                              </Text>

                              <Text
                                mt="1"
                                fontSize={{ base: "sm", md: "15px" }}
                                color={bodyText}
                                lineHeight="1.8"
                                fontWeight="700"
                              >
                                {department}
                              </Text>
                            </Box>
                          </MotionFlex>

                          <MotionFlex
                            align="flex-start"
                            gap="3"
                            initial={{ opacity: 0, x: 18 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.35, delay: 0.12 }}
                            viewport={{ once: true }}
                          >
                            <Flex
                              w="42px"
                              h="42px"
                              borderRadius="15px"
                              align="center"
                              justify="center"
                              bg="teal.50"
                              color="teal.700"
                              border="1px solid"
                              borderColor="teal.100"
                              flexShrink={0}
                            >
                              <FiCalendar />
                            </Flex>

                            <Box>
                              <Text
                                fontSize="xs"
                                fontWeight="900"
                                color="gray.500"
                                textTransform="uppercase"
                                letterSpacing="1.5px"
                              >
                                Passing Year / Duration
                              </Text>

                              <Text
                                mt="1"
                                fontSize={{ base: "sm", md: "15px" }}
                                color={bodyText}
                                lineHeight="1.8"
                                fontWeight="700"
                              >
                                {passingYear}
                              </Text>
                            </Box>
                          </MotionFlex>

                          
                        </VStack>
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
import { useMemo, useContext } from "react";
import {
  Badge,
  Box,
  Flex,
  Heading,
  HStack,
  Image,
  SimpleGrid,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import GitHubCalendar from "react-github-calendar";
import { FiGithub, FiActivity, FiBarChart2 } from "react-icons/fi";

import { ThemeContext } from "./ThemeContext";

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

export default function GitCalendar() {
  const mainTheme = useContext(ThemeContext);

  const githubUsername = "rajon-git";

  const primaryColor = "#26A69A";
  const darkBg = "#071A1C";
  const darkText = "#0F172A";
  const bodyText = mainTheme?.theme?.dText || "#475569";
  const sectionBg = mainTheme?.theme?.bg || "#F8FAFC";

  const blockSize = useBreakpointValue({
    base: 10,
    sm: 11,
    md: 13,
    lg: 14,
  });

  const blockMargin = useBreakpointValue({
    base: 4,
    sm: 5,
    md: 6,
    lg: 7,
  });

  const statCards = useMemo(
    () => [
      {
        id: "github-stats-card",
        title: "GitHub Stats",
        label: "Repository Activity",
        src: `https://github-readme-stats.vercel.app/api?username=${githubUsername}&custom_title=GitHub%20Stats&show_icons=true&theme=default&hide_border=true`,
      },
      {
        id: "github-streak-stats",
        title: "GitHub Streak",
        label: "Contribution Streak",
        src: `https://github-readme-streak-stats.herokuapp.com?user=${githubUsername}&theme=default&hide_border=true`,
      },
      {
        id: "github-top-langs",
        title: "Top Languages",
        label: "Language Usage",
        src: `https://github-readme-stats.vercel.app/api/top-langs/?username=${githubUsername}&layout=compact&theme=default&hide_border=true`,
      },
    ],
    [githubUsername]
  );

  return (
    <Box
      as="section"
      id="github"
      bg={sectionBg}
      py={{ base: "64px", md: "96px" }}
      px={{ base: "16px", md: "28px" }}
      overflow="hidden"
      position="relative"
    >
      {/* Animated Background Glow */}
      <MotionBox
        position="absolute"
        top="-150px"
        right="-120px"
        w={{ base: "270px", md: "460px" }}
        h={{ base: "270px", md: "460px" }}
        borderRadius="full"
        bg="rgba(38,166,154,0.13)"
        filter="blur(90px)"
        animate={{
          x: [0, -24, 0],
          y: [0, 20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <MotionBox
        position="absolute"
        bottom="-180px"
        left="-130px"
        w={{ base: "270px", md: "480px" }}
        h={{ base: "270px", md: "480px" }}
        borderRadius="full"
        bg="rgba(14,165,233,0.10)"
        filter="blur(95px)"
        animate={{
          x: [0, 24, 0],
          y: [0, -20, 0],
          scale: [1, 1.12, 1],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <Box maxW="1180px" mx="auto" position="relative" zIndex="1">
        {/* Section Header */}
        <VStack spacing="3" textAlign="center" mb={{ base: 10, md: 14 }}>
          <MotionBox
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            viewport={{ once: true }}
          >
            <HStack spacing="3" justify="center">
              <Box w="44px" h="2px" bg={primaryColor} borderRadius="full" />

              <Text
                fontSize="xs"
                fontWeight="900"
                letterSpacing="3px"
                color={primaryColor}
                textTransform="uppercase"
              >
                GitHub Activity
              </Text>

              <Box w="44px" h="2px" bg={primaryColor} borderRadius="full" />
            </HStack>
          </MotionBox>

          <MotionBox
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            viewport={{ once: true }}
          >
            <Heading
              as="h2"
              fontSize={{ base: "3xl", md: "5xl" }}
              color={darkText}
              fontWeight="950"
              lineHeight="1.08"
              letterSpacing="-1px"
            >
              Open Source & Development Activity
            </Heading>
          </MotionBox>

          <MotionBox
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.14 }}
            viewport={{ once: true }}
          >
            <Text
              maxW="760px"
              fontSize={{ base: "sm", md: "md" }}
              color={bodyText}
              lineHeight="1.9"
            >
              A visual overview of my GitHub contributions, development
              activity, repository statistics, and language usage.
            </Text>
          </MotionBox>
        </VStack>

        {/* Main GitHub Card */}
        <MotionBox
          bg="rgba(255,255,255,0.94)"
          border="1px solid"
          borderColor="gray.200"
          borderRadius="34px"
          overflow="hidden"
          boxShadow="0 24px 80px rgba(15, 23, 42, 0.09)"
          backdropFilter="blur(14px)"
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{
            y: -5,
            boxShadow: "0 34px 100px rgba(15, 23, 42, 0.14)",
          }}
          transition={{ duration: 0.65 }}
          viewport={{ once: true, amount: 0.2 }}
          _hover={{
            borderColor: "teal.200",
          }}
        >
          {/* Dark Header */}
          <Box
            bg={darkBg}
            position="relative"
            overflow="hidden"
            p={{ base: 5, md: 7 }}
          >
            <MotionBox
              position="absolute"
              top="-100px"
              right="-80px"
              w="270px"
              h="270px"
              borderRadius="full"
              bg="rgba(38,166,154,0.30)"
              filter="blur(62px)"
              animate={{
                scale: [1, 1.12, 1],
                x: [0, -12, 0],
                y: [0, 12, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <Flex
              position="relative"
              zIndex="1"
              direction={{ base: "column", md: "row" }}
              align={{ base: "flex-start", md: "center" }}
              justify="space-between"
              gap="5"
            >
              <HStack spacing="4">
                <MotionFlex
                  w="58px"
                  h="58px"
                  align="center"
                  justify="center"
                  borderRadius="19px"
                  bg="rgba(38,166,154,0.16)"
                  border="1px solid rgba(38,166,154,0.35)"
                  color={primaryColor}
                  fontSize="30px"
                  whileHover={{
                    rotate: 6,
                    scale: 1.06,
                  }}
                  transition={{ duration: 0.25 }}
                >
                  <FiGithub />
                </MotionFlex>

                <Box>
                  <Text
                    color="gray.300"
                    fontSize="xs"
                    fontWeight="900"
                    letterSpacing="2px"
                    textTransform="uppercase"
                  >
                    GitHub Profile
                  </Text>

                  <Heading
                    as="h3"
                    mt="1"
                    color="white"
                    fontSize={{ base: "xl", md: "2xl" }}
                    fontWeight="950"
                  >
                    @{githubUsername}
                  </Heading>
                </Box>
              </HStack>

              <HStack spacing="3" flexWrap="wrap">
                <Badge
                  px="4"
                  py="2"
                  borderRadius="full"
                  bg="rgba(38,166,154,0.16)"
                  color="teal.100"
                  border="1px solid rgba(38,166,154,0.35)"
                  fontSize="11px"
                  fontWeight="900"
                >
                  Contribution Calendar
                </Badge>

                <Badge
                  px="4"
                  py="2"
                  borderRadius="full"
                  bg="rgba(255,255,255,0.08)"
                  color="gray.200"
                  border="1px solid rgba(255,255,255,0.12)"
                  fontSize="11px"
                  fontWeight="900"
                >
                  Live GitHub Overview
                </Badge>
              </HStack>
            </Flex>
          </Box>

          {/* Calendar */}
          <Box p={{ base: 4, md: 7 }}>
            <Box
              className="react-activity-calendar"
              overflowX="auto"
              px={{ base: 1, md: 2 }}
              py="4"
              css={{
                scrollbarWidth: "thin",
                scrollbarColor: "#26A69A #E2E8F0",
                "&::-webkit-scrollbar": {
                  height: "8px",
                },
                "&::-webkit-scrollbar-track": {
                  background: "#E2E8F0",
                  borderRadius: "999px",
                },
                "&::-webkit-scrollbar-thumb": {
                  background: "#26A69A",
                  borderRadius: "999px",
                },
              }}
            >
              <Flex
                justify={{ base: "flex-start", lg: "center" }}
                minW="max-content"
              >
                <GitHubCalendar
                  username={githubUsername}
                  blockSize={blockSize || 12}
                  blockMargin={blockMargin || 5}
                  fontSize={12}
                  colorScheme="light"
                  hideTotalCount={false}
                  hideColorLegend={false}
                />
              </Flex>
            </Box>
          </Box>
        </MotionBox>

        {/* Stats Cards */}
        <SimpleGrid columns={{ base: 1, lg: 3 }} spacing="6" mt="8">
          {statCards.map((card, index) => (
            <MotionBox
              key={card.id}
              bg="rgba(255,255,255,0.94)"
              border="1px solid"
              borderColor="gray.200"
              borderRadius="26px"
              p="4"
              boxShadow="0 18px 55px rgba(15, 23, 42, 0.08)"
              backdropFilter="blur(14px)"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                y: -6,
                boxShadow: "0 28px 85px rgba(15, 23, 42, 0.13)",
              }}
              transition={{
                duration: 0.55,
                delay: index * 0.08,
              }}
              viewport={{ once: true, amount: 0.2 }}
              _hover={{
                borderColor: "teal.200",
              }}
            >
              <Flex align="center" justify="space-between" mb="4" gap="3">
                <Box>
                  <Text
                    fontSize="xs"
                    fontWeight="900"
                    color={primaryColor}
                    textTransform="uppercase"
                    letterSpacing="1.5px"
                  >
                    {card.title}
                  </Text>

                  <Text
                    mt="1"
                    fontSize="xs"
                    fontWeight="700"
                    color="gray.500"
                  >
                    {card.label}
                  </Text>
                </Box>

                <Flex
                  w="40px"
                  h="40px"
                  align="center"
                  justify="center"
                  borderRadius="14px"
                  bg="teal.50"
                  color="teal.700"
                  border="1px solid"
                  borderColor="teal.100"
                  flexShrink={0}
                >
                  {index === 0 ? <FiGithub /> : <FiBarChart2 />}
                </Flex>
              </Flex>

              <Flex
                justify="center"
                align="center"
                minH="175px"
                bg="#F8FAFC"
                border="1px solid"
                borderColor="gray.100"
                borderRadius="20px"
                p="2"
                overflow="hidden"
              >
                <Image
                  id={card.id}
                  src={card.src}
                  alt={card.title}
                  w="100%"
                  maxW="100%"
                  objectFit="contain"
                  borderRadius="16px"
                  fallback={
                    <Flex
                      w="100%"
                      minH="160px"
                      align="center"
                      justify="center"
                      bg="#F8FAFC"
                      border="1px dashed"
                      borderColor="gray.300"
                      borderRadius="16px"
                      color="gray.500"
                      fontSize="sm"
                      fontWeight="700"
                      textAlign="center"
                      px="4"
                    >
                      GitHub statistics are temporarily unavailable.
                    </Flex>
                  }
                />
              </Flex>
            </MotionBox>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
}
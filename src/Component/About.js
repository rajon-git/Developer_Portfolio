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
  Link,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useContext } from "react";

import imgOlive from "./../Banner/rajon.jpg";
import resume from "./../Banner/MD_Rajon_Ahamad_01310561120.pdf";
import { ThemeContext } from "./ThemeContext";

const MotionBox = motion(Box);

export default function About() {
  const theme = useContext(ThemeContext);

  const primaryColor = "#26A69A";
  const darkBg = "#071A1C";
  const darkText = "#0F172A";
  const bodyText = theme?.theme?.dText || "#475569";

  const highlights = [
    { value: "3.2+", label: "Years Experience" },
    { value: "ERP", label: "ERP Development" },
    { value: "Full Stack", label: "Software Development" },
    { value: "VPS", label: "Deployment Support" },
  ];

  const expertise = [
    "ERP Customization",
    "Backend Engineering",
    "Business Automation",
    "REST API Development",
    "Frontend Dashboard",
    "Server Deployment",
  ];

  const skillGroups = [
    {
      title: "Programming",
      skills: ["Python", "JavaScript"],
    },
    {
      title: "Backend",
      skills: ["Django", "DRF", "Odoo", "Node.js", "Express.js"],
    },
    {
      title: "Frontend",
      skills: ["React.js", "OWL", "HTML", "XML", "CSS", "Bootstrap", "Tailwind CSS"],
    },
    {
      title: "ERP & CMS",
      skills: ["Odoo", "WordPress"],
    },
    {
      title: "Database",
      skills: ["SQL", "PostgreSQL", "MySQL", "MongoDB"],
    },
    {
      title: "Data & Charts",
      skills: ["NumPy", "Pandas", "Matplotlib", "Seaborn", "Chart.js"],
    },
    {
      title: "Version Control",
      skills: ["GitHub"],
    },
    {
      title: "Deployment",
      skills: ["Docker", "CI/CD", "Nginx", "Gunicorn", "VPS Management", "cPanel"],
    },
  ];

  const handleViewResume = () => {
    window.open(
      "https://drive.google.com/file/d/1kipJpMVLzcQQeAwy9-bYROqJFDeQCTjs/view?usp=sharing",
      "_blank"
    );
  };

  return (
    <Box
      as="section"
      id="about"
      className="section about"
      w="100%"
      bg="#F8FAFC"
      overflow="hidden"
    >
      {/* ================= PREMIUM HERO ================= */}
      <Box
        position="relative"
        bg={darkBg}
        color="white"
        py={{ base: "70px", md: "100px" }}
        px={{ base: "18px", md: "28px" }}
      >
        <Box
          position="absolute"
          top="-160px"
          right="-120px"
          w="420px"
          h="420px"
          borderRadius="full"
          bg="rgba(38,166,154,0.28)"
          filter="blur(80px)"
        />

        <Box
          position="absolute"
          bottom="-180px"
          left="-140px"
          w="420px"
          h="420px"
          borderRadius="full"
          bg="rgba(14,165,233,0.14)"
          filter="blur(90px)"
        />

        <Box maxW="1180px" mx="auto" position="relative" zIndex="1">
          <Grid
            templateColumns={{ base: "1fr", lg: "0.9fr 1.1fr" }}
            gap={{ base: 10, lg: 14 }}
            alignItems="center"
          >
            {/* Profile Visual */}
            <GridItem>
              <MotionBox
                initial={{ opacity: 0, x: -35 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.65 }}
                viewport={{ once: true }}
                maxW={{ base: "360px", md: "420px" }}
                mx={{ base: "auto", lg: "0" }}
                position="relative"
              >
                <Box
                  position="absolute"
                  inset="-14px"
                  borderRadius="34px"
                  border="1px solid rgba(255,255,255,0.16)"
                />

                <Box
                  bg="rgba(255,255,255,0.08)"
                  border="1px solid rgba(255,255,255,0.16)"
                  borderRadius="32px"
                  p="14px"
                  backdropFilter="blur(18px)"
                  boxShadow="0 30px 80px rgba(0,0,0,0.35)"
                >
                  <Image
                    src={imgOlive}
                    alt="Md. Rajon Ahamad Shariatpur"
                    w="100%"
                    h={{ base: "380px", md: "470px" }}
                    objectFit="cover"
                    objectPosition="top"
                    borderRadius="24px"
                  />

                  <Box
                    mt="4"
                    p="4"
                    bg="rgba(255,255,255,0.08)"
                    border="1px solid rgba(255,255,255,0.12)"
                    borderRadius="22px"
                  >
                    <Text
                      fontSize="10px"
                      fontWeight="900"
                      letterSpacing="2px"
                      color={primaryColor}
                      textTransform="uppercase"
                    >
                      Current Focus
                    </Text>

                    <Text mt="2" fontSize="sm" fontWeight="800" color="white">
                      ERP Customization • Backend Architecture • Business Systems
                    </Text>
                  </Box>
                </Box>
              </MotionBox>
            </GridItem>

            {/* Hero Text */}
            <GridItem>
              <MotionBox
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Text
                  fontSize="xs"
                  fontWeight="900"
                  letterSpacing="4px"
                  color={primaryColor}
                  textTransform="uppercase"
                  mb="4"
                >
                  Software Developer
                </Text>

                <Heading
                  as="h1"
                  fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
                  lineHeight="1.02"
                  fontWeight="950"
                  letterSpacing="-1.5px"
                >
                  Md. Rajon Ahamad 
                </Heading>

                <Text
                  mt="6"
                  maxW="720px"
                  fontSize={{ base: "md", md: "lg" }}
                  lineHeight="1.9"
                  color="gray.300"
                >
                  I build scalable ERP systems, backend applications, business
                  automation tools, and modern frontend dashboards for real-world
                  operational workflows.
                </Text>

                <HStack spacing="3" flexWrap="wrap" mt="7">
                  {expertise.map((item) => (
                    <Badge
                      key={item}
                      px="4"
                      py="2"
                      mb="2"
                      borderRadius="full"
                      bg="rgba(38,166,154,0.12)"
                      color="teal.100"
                      border="1px solid rgba(38,166,154,0.35)"
                      fontSize="11px"
                      fontWeight="800"
                    >
                      {item}
                    </Badge>
                  ))}
                </HStack>

                <Stack direction={{ base: "column", sm: "row" }} spacing="4" mt="9">
                  <Link
                    href={resume}
                    download="MD_Rajon_Ahamad_01310561120.pdf"
                    id="resume-link-2"
                    _hover={{ textDecoration: "none" }}
                  >
                    <Button
                      id="resume-button-2"
                      h="50px"
                      px="8"
                      bg={primaryColor}
                      color="white"
                      borderRadius="14px"
                      fontWeight="900"
                      _hover={{
                        bg: "#21867D",
                        transform: "translateY(-2px)",
                        boxShadow: "0 16px 35px rgba(38,166,154,0.30)",
                      }}
                      transition="all 0.25s ease"
                    >
                      Download Resume
                    </Button>
                  </Link>

                  <Button
                    h="50px"
                    px="8"
                    variant="outline"
                    borderColor="rgba(255,255,255,0.35)"
                    color="white"
                    borderRadius="14px"
                    fontWeight="900"
                    onClick={handleViewResume}
                    _hover={{
                      bg: "rgba(255,255,255,0.10)",
                      transform: "translateY(-2px)",
                    }}
                    transition="all 0.25s ease"
                  >
                    View Online
                  </Button>
                </Stack>
              </MotionBox>
            </GridItem>
          </Grid>
        </Box>
      </Box>

      {/* ================= CONTENT AREA ================= */}
      <Box
        maxW="1180px"
        mx="auto"
        px={{ base: "18px", md: "28px" }}
        py={{ base: "56px", md: "80px" }}
      >
        {/* Stats */}
        <SimpleGrid columns={{ base: 2, md: 4 }} spacing="4" mt={{ base: "-90px", md: "-110px" }} mb="10">
          {highlights.map((item) => (
            <Box
              key={item.label}
              bg="white"
              border="1px solid"
              borderColor="gray.200"
              borderRadius="24px"
              p={{ base: 4, md: 6 }}
              textAlign="center"
              boxShadow="0 20px 60px rgba(15, 23, 42, 0.10)"
              position="relative"
              zIndex="2"
            >
              <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight="950" color={primaryColor}>
                {item.value}
              </Text>

              <Text mt="2" fontSize="xs" fontWeight="800" color="gray.500">
                {item.label}
              </Text>
            </Box>
          ))}
        </SimpleGrid>

        {/* Summary */}
        <Box
          bg="white"
          border="1px solid"
          borderColor="gray.200"
          borderRadius="30px"
          p={{ base: 5, md: 8 }}
          boxShadow="0 20px 70px rgba(15, 23, 42, 0.08)"
        >
          <Grid templateColumns={{ base: "1fr", lg: "0.85fr 1.15fr" }} gap={{ base: 8, lg: 12 }}>
            <Box>
              <Text
                fontSize="xs"
                fontWeight="900"
                letterSpacing="3px"
                color={primaryColor}
                textTransform="uppercase"
              >
                Professional Summary
              </Text>

              <Heading
                mt="3"
                fontSize={{ base: "2xl", md: "4xl" }}
                lineHeight="1.15"
                color={darkText}
                fontWeight="950"
              >
                Practical engineering for business-critical software.
              </Heading>

              <Text mt="5" fontSize="sm" lineHeight="1.9" color={bodyText}>
                My work is focused on solving operational problems with clean
                architecture, reliable backend logic, and user-friendly interfaces.
              </Text>
            </Box>

            <VStack align="stretch" spacing="5">
              <Text
                id="user-detail-intro"
                fontSize={{ base: "sm", md: "15px" }}
                lineHeight="1.95"
                color={bodyText}
              >
                I am a Software Developer with 3.2+ years of experience in
                enterprise ERP customization, Python backend engineering, and
                high-performance web application development. My core strength is
                designing business-oriented software solutions that are scalable,
                maintainable, and production-ready.
              </Text>

              <Text fontSize={{ base: "sm", md: "15px" }} lineHeight="1.95" color={bodyText}>
                I specialize in the Odoo ecosystem, including ORM, OWL, XML,
                workflows, reports, and module customization. Alongside Odoo, I
                build backend applications with Django and Django REST Framework
                and develop frontend integrations using React.js and modern UI
                technologies.
              </Text>

              <Text fontSize={{ base: "sm", md: "15px" }} lineHeight="1.95" color={bodyText}>
                My experience includes HRM, CRM, Inventory, Manufacturing BOM,
                POS, Accounting, E-commerce, and Customer Portal solutions. I
                also manage deployment and production support using Docker,
                Nginx, Gunicorn, VPS, and cPanel-based server environments.
              </Text>
            </VStack>
          </Grid>
        </Box>

        {/* Skills */}
        <Box mt={{ base: 8, md: 10 }}>
          <Box mb="7">
            <Text
              fontSize="xs"
              fontWeight="900"
              letterSpacing="3px"
              color={primaryColor}
              textTransform="uppercase"
            >
              Technical Skills
            </Text>

            <Heading
              mt="2"
              fontSize={{ base: "2xl", md: "4xl" }}
              color={darkText}
              fontWeight="950"
              letterSpacing="-0.5px"
            >
              Technologies I work with
            </Heading>
          </Box>

          <SimpleGrid columns={{ base: 1, md: 2, xl: 4 }} spacing="5">
            {skillGroups.map((group, index) => (
              <MotionBox
                key={group.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.035 }}
                viewport={{ once: true }}
              >
                <Box
                  h="100%"
                  bg="white"
                  border="1px solid"
                  borderColor="gray.200"
                  borderRadius="24px"
                  p="5"
                  boxShadow="0 16px 50px rgba(15, 23, 42, 0.06)"
                  _hover={{
                    borderColor: "teal.300",
                    transform: "translateY(-4px)",
                    boxShadow: "0 22px 65px rgba(15, 23, 42, 0.10)",
                  }}
                  transition="all 0.25s ease"
                >
                  <Flex align="center" justify="space-between" mb="4">
                    <Text fontSize="sm" fontWeight="950" color={darkText}>
                      {group.title}
                    </Text>

                    <Box
                      w="9px"
                      h="9px"
                      borderRadius="full"
                      bg={primaryColor}
                      boxShadow="0 0 0 5px rgba(38,166,154,0.12)"
                    />
                  </Flex>

                  <Divider borderColor="gray.200" mb="4" />

                  <HStack spacing="2" flexWrap="wrap" align="flex-start">
                    {group.skills.map((skill) => (
                      <Badge
                        key={skill}
                        px="3"
                        py="1.5"
                        borderRadius="full"
                        bg="#F0FDFA"
                        color="teal.700"
                        border="1px solid"
                        borderColor="teal.100"
                        fontSize="11px"
                        fontWeight="800"
                        mb="2"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </HStack>
                </Box>
              </MotionBox>
            ))}
          </SimpleGrid>
        </Box>
      </Box>
    </Box>
  );
}

import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  Heading,
  HStack,
  IconButton,
  Input,
  Link as ChakraLink,
  SimpleGrid,
  Text,
  Textarea,
  VStack,
  useToast,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaUserCircle } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { BsFillArrowUpSquareFill } from "react-icons/bs";
import { SiCodeforces, SiLeetcode } from "react-icons/si";
import { AiFillLinkedin, AiFillGithub, AiFillFacebook } from "react-icons/ai";
import { FiSend, FiMessageSquare } from "react-icons/fi";
import { ThemeContext } from "./ThemeContext";
import { useContext, useState } from "react";
import { animateScroll as scroll } from "react-scroll";
import emailjs from "@emailjs/browser";

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

export default function Footer() {
  const mainTheme = useContext(ThemeContext);
  const toast = useToast();

  const primaryColor = "#26A69A";
  const darkBg = "#071A1C";
  const darkText = "#0F172A";
  const bodyText = mainTheme?.theme?.dText || "#475569";
  const sectionBg = mainTheme?.theme?.bg || "#F8FAFC";

  const initialState = {
    name: "",
    email: "",
    number: "",
    message: "",
  };

  const [form, setForm] = useState(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactLinks = [
   
    {
      label: "+880 19900-20467",
      icon: IoMdCall,
      href: "tel:+8801990020467",
      id: "contact-phone",
    },
    {
      label: "rajon.zhsust15@gmail.com",
      icon: MdEmail,
      href: "mailto:rajon.zhsust15@gmail.com",
      id: "contact-email",
    },
    {
      label: "Rajon Ahamad",
      icon: AiFillLinkedin,
      href: "https://www.linkedin.com/in/md-rajon-ahamad-23938825b/",
      id: "contact-linkedin",
    },
    {
      label: "rajon-git",
      icon: AiFillGithub,
      href: "https://github.com/rajon-git",
      id: "contact-github",
    },
    {
      label: "Md. Rajon Ahamad",
      icon: AiFillFacebook,
      href: "https://www.facebook.com/zhsust.rajon",
      id: "contact-facebook",
    },
   
  ];

  const socialLinks = contactLinks.filter((item) =>
    [
      "contact-linkedin",
      "contact-github",
      "contact-facebook",
      "contact-codeforces",
      "contact-leetcode",
    ].includes(item.id)
  );

  function handleMoveToTop() {
    scroll.scrollToTop({
      duration: 650,
      smooth: true,
    });
  }

  function handleInput(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function validateNumber(num) {
    return /^[0-9]{11}$/.test(num);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const { name, email, number, message } = form;

    if (!name || !email || !number || !message) {
      toast({
        title: "Required fields missing",
        description: "Please fill in all required fields.",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    if (!validateEmail(email)) {
      toast({
        title: "Invalid email address",
        description: "Please enter a valid email address.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    if (!validateNumber(number)) {
      toast({
        title: "Invalid phone number",
        description: "Please enter a valid 11 digit phone number.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    try {
      setIsSubmitting(true);

      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_KEY2,
        form,
        process.env.REACT_APP_PUBLIC_KEY
      );

      toast({
        title: "Message sent successfully",
        description:
          "Thank you for showing interest in my profile. I will contact you soon.",
        status: "success",
        duration: 3500,
        isClosable: true,
      });

      setForm(initialState);
    } catch (error) {
      console.error("EmailJS failed:", error);

      toast({
        title: "Message failed",
        description: "Something went wrong. Please try again later.",
        status: "error",
        duration: 3500,
        isClosable: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Box
      as="footer"
      id="contact"
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
                Contact
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
              Let&apos;s work together
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
              Have an ERP requirement, backend system, dashboard, website, or
              business automation project? Send a message and I will get back to
              you.
            </Text>
          </MotionBox>
        </Grid>

        {/* Contact Main Area */}
        <Grid
          templateColumns={{ base: "1fr", lg: "0.9fr 1.1fr" }}
          gap={{ base: 7, lg: 8 }}
          alignItems="stretch"
        >
          {/* Contact Information */}
          <MotionBox
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <MotionBox
              h="100%"
              bg={darkBg}
              color="white"
              borderRadius="34px"
              p={{ base: 6, md: 8 }}
              position="relative"
              overflow="hidden"
              boxShadow="0 24px 80px rgba(15, 23, 42, 0.16)"
              whileHover={{
                y: -5,
                boxShadow: "0 34px 100px rgba(15, 23, 42, 0.24)",
              }}
              transition={{ duration: 0.25 }}
            >
              <MotionBox
                position="absolute"
                top="-110px"
                right="-90px"
                w="280px"
                h="280px"
                borderRadius="full"
                bg="rgba(38,166,154,0.30)"
                filter="blur(65px)"
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

              <MotionBox
                position="absolute"
                bottom="-120px"
                left="-90px"
                w="280px"
                h="280px"
                borderRadius="full"
                bg="rgba(14,165,233,0.15)"
                filter="blur(70px)"
                animate={{
                  scale: [1, 1.14, 1],
                  x: [0, 12, 0],
                  y: [0, -12, 0],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <Box position="relative" zIndex="1">
                <Flex
                  w="56px"
                  h="56px"
                  align="center"
                  justify="center"
                  borderRadius="18px"
                  bg="rgba(38,166,154,0.16)"
                  border="1px solid rgba(38,166,154,0.34)"
                  color={primaryColor}
                  fontSize="27px"
                  mb="5"
                >
                  <FiMessageSquare />
                </Flex>

                <VStack align="stretch" spacing="3" mt="8">
                  {contactLinks.map((item, index) => {
                    const Icon = item.icon;

                    const content = (
                      <MotionFlex
                        align="center"
                        gap="3"
                        p="3"
                        borderRadius="18px"
                        bg="rgba(255,255,255,0.06)"
                        border="1px solid rgba(255,255,255,0.10)"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.35,
                          delay: index * 0.035,
                        }}
                        viewport={{ once: true }}
                        whileHover={{
                          x: 5,
                          scale: 1.01,
                        }}
                      >
                        <Flex
                          w="40px"
                          h="40px"
                          align="center"
                          justify="center"
                          borderRadius="14px"
                          bg="rgba(38,166,154,0.16)"
                          color={primaryColor}
                          flexShrink={0}
                        >
                          <Icon size="21px" />
                        </Flex>

                        <Text
                          id={item.id}
                          color="gray.200"
                          fontSize="sm"
                          fontWeight="700"
                          lineHeight="1.5"
                        >
                          {item.label}
                        </Text>
                      </MotionFlex>
                    );

                    if (!item.href) {
                      return <Box key={item.id}>{content}</Box>;
                    }

                    return (
                      <ChakraLink
                        key={item.id}
                        href={item.href}
                        target={
                          item.href.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                          item.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        _hover={{ textDecoration: "none" }}
                      >
                        {content}
                      </ChakraLink>
                    );
                  })}
                </VStack>

                <Box mt="8">
                  <Text
                    fontSize="xs"
                    fontWeight="900"
                    color="gray.400"
                    textTransform="uppercase"
                    letterSpacing="1.5px"
                    mb="3"
                  >
                    Social Profiles
                  </Text>

                  <HStack spacing="3" flexWrap="wrap">
                    {socialLinks.map((item, index) => {
                      const Icon = item.icon;

                      return (
                        <MotionBox
                          key={`social-${item.id}`}
                          initial={{ opacity: 0, scale: 0.86 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{
                            duration: 0.3,
                            delay: index * 0.04,
                          }}
                          viewport={{ once: true }}
                          whileHover={{
                            y: -4,
                            scale: 1.08,
                          }}
                        >
                          <ChakraLink
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            _hover={{ textDecoration: "none" }}
                          >
                            <IconButton
                              aria-label={item.label}
                              icon={<Icon />}
                              w="46px"
                              h="46px"
                              borderRadius="16px"
                              bg="rgba(255,255,255,0.08)"
                              color={primaryColor}
                              border="1px solid rgba(255,255,255,0.12)"
                              _hover={{
                                bg: primaryColor,
                                color: "white",
                              }}
                              transition="all 0.22s ease"
                            />
                          </ChakraLink>
                        </MotionBox>
                      );
                    })}
                  </HStack>
                </Box>
              </Box>
            </MotionBox>
          </MotionBox>

          {/* Contact Form */}
          <MotionBox
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <MotionBox
              h="100%"
              bg="rgba(255,255,255,0.94)"
              border="1px solid"
              borderColor="gray.200"
              borderRadius="34px"
              p={{ base: 6, md: 8 }}
              boxShadow="0 24px 80px rgba(15, 23, 42, 0.09)"
              backdropFilter="blur(14px)"
              whileHover={{
                y: -5,
                boxShadow: "0 34px 100px rgba(15, 23, 42, 0.14)",
              }}
              transition={{ duration: 0.25 }}
              _hover={{
                borderColor: "teal.200",
              }}
            >
              <Box mb="7">
                <Text
                  fontSize="xs"
                  fontWeight="900"
                  letterSpacing="3px"
                  color={primaryColor}
                  textTransform="uppercase"
                >
                  Send Message
                </Text>

                <Heading
                  as="h3"
                  mt="3"
                  fontSize={{ base: "2xl", md: "3xl" }}
                  lineHeight="1.15"
                  color={darkText}
                  fontWeight="950"
                >
                  Tell me about your project
                </Heading>

                <Text mt="4" color={bodyText} fontSize="sm" lineHeight="1.8">
                  Fill out the form below with your name, email, phone number,
                  and message.
                </Text>
              </Box>

              <Box as="form" onSubmit={handleSubmit}>
                <FormControl>
                  <SimpleGrid columns={{ base: 1, md: 2 }} spacing="5">
                    <MotionBox
                      initial={{ opacity: 0, y: 18 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.35 }}
                      viewport={{ once: true }}
                    >
                      <FormLabel
                        fontSize="sm"
                        fontWeight="800"
                        color={darkText}
                      >
                        Name
                      </FormLabel>

                      <Input
                        h="50px"
                        borderRadius="15px"
                        borderColor="gray.300"
                        bg="#F8FAFC"
                        focusBorderColor={primaryColor}
                        placeholder="Enter your name"
                        name="name"
                        onChange={handleInput}
                        value={form.name}
                        _hover={{ borderColor: "teal.200" }}
                      />
                    </MotionBox>

                    <MotionBox
                      initial={{ opacity: 0, y: 18 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.35, delay: 0.05 }}
                      viewport={{ once: true }}
                    >
                      <FormLabel
                        fontSize="sm"
                        fontWeight="800"
                        color={darkText}
                      >
                        Email
                      </FormLabel>

                      <Input
                        h="50px"
                        borderRadius="15px"
                        borderColor="gray.300"
                        bg="#F8FAFC"
                        focusBorderColor={primaryColor}
                        placeholder="Enter your email"
                        name="email"
                        type="email"
                        onChange={handleInput}
                        value={form.email}
                        _hover={{ borderColor: "teal.200" }}
                      />
                    </MotionBox>
                  </SimpleGrid>

                  <MotionBox
                    mt="5"
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    <FormLabel
                      fontSize="sm"
                      fontWeight="800"
                      color={darkText}
                    >
                      Phone Number
                    </FormLabel>

                    <Input
                      h="50px"
                      borderRadius="15px"
                      borderColor="gray.300"
                      bg="#F8FAFC"
                      focusBorderColor={primaryColor}
                      placeholder="Enter your 11 digit phone number"
                      name="number"
                      type="tel"
                      onChange={handleInput}
                      value={form.number}
                      _hover={{ borderColor: "teal.200" }}
                    />
                  </MotionBox>

                  <MotionBox
                    mt="5"
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: 0.15 }}
                    viewport={{ once: true }}
                  >
                    <FormLabel
                      fontSize="sm"
                      fontWeight="800"
                      color={darkText}
                    >
                      Message
                    </FormLabel>

                    <Textarea
                      minH="150px"
                      borderRadius="15px"
                      borderColor="gray.300"
                      bg="#F8FAFC"
                      focusBorderColor={primaryColor}
                      placeholder="Write your message"
                      name="message"
                      resize="vertical"
                      onChange={handleInput}
                      value={form.message}
                      _hover={{ borderColor: "teal.200" }}
                    />
                  </MotionBox>

                  <MotionBox
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <Button
                      mt="7"
                      type="submit"
                      h="52px"
                      px="8"
                      bg={primaryColor}
                      color="white"
                      borderRadius="15px"
                      fontWeight="900"
                      rightIcon={<FiSend />}
                      isLoading={isSubmitting}
                      loadingText="Sending"
                      _hover={{
                        bg: "#21867D",
                        transform: "translateY(-2px)",
                        boxShadow: "0 14px 28px rgba(38,166,154,0.26)",
                      }}
                      transition="all 0.25s ease"
                    >
                      Submit Message
                    </Button>
                  </MotionBox>
                </FormControl>
              </Box>
            </MotionBox>
          </MotionBox>
        </Grid>

        {/* Bottom Area */}
        <Flex
          mt={{ base: 10, md: 12 }}
          pt="6"
          borderTop="1px solid"
          borderColor="gray.200"
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          align="center"
          gap="4"
        >
          <Text color={bodyText} fontSize="sm" fontWeight="600">
            © {new Date().getFullYear()} MD. Rajon Ahamad. All rights reserved.
          </Text>

          <MotionFlex
            direction="column"
            align="center"
            cursor="pointer"
            onClick={handleMoveToTop}
            color={primaryColor}
            whileHover={{
              y: -4,
              scale: 1.04,
            }}
            transition={{ duration: 0.22 }}
          >
            <BsFillArrowUpSquareFill size="34px" />
            <Text className="cursor" fontWeight="900" fontSize="sm" mt="1">
              Top
            </Text>
          </MotionFlex>
        </Flex>
      </Box>
    </Box>
  );
}
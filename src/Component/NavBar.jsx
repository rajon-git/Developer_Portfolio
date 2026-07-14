import { useState, useEffect, useRef } from "react";
import {
  Box,
  Flex,
  Text,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link as ScrollLink } from "react-scroll";

export const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const [activeSection, setActiveSection] = useState("about");

  const menuItems = [
    {
      label: "ABOUT",
      to: "about",
      className: "about",
    },
    {
      label: "EXPERIENCE",
      to: "experience",
      className: "experience",
    },
    {
      label: "EDUCATION",
      to: "education",
      className: "education",
    },
    {
      label: "PROJECTS",
      to: "projects",
      className: "projects",
    },
    {
      label: "CONTACT",
      to: "contact",
      className: "contact",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "about",
        "experience",
        "education",
        "projects",
        "contact",
      ];

      const scrollPosition = window.scrollY + 120;

      let currentSection = "about";

      sections.forEach((sectionId) => {
        const section = document.getElementById(sectionId);

        if (section && scrollPosition >= section.offsetTop) {
          currentSection = sectionId;
        }
      });

      setActiveSection(currentSection);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box id="nav-menu">
      {/* Desktop Navbar */}
      <Box
        backdropFilter="auto"
        backdropBlur="10px"
        pt="5px"
        pb="10px"
        top="5px"
        position="fixed"
        left="15%"
        display={{ base: "none", sm: "none", md: "none", lg: "inline-block" }}
        zIndex="99"
        w="70%"
        m="auto"
        border="1px solid #26A69A"
        borderRadius="25px"
        bg="rgba(255, 255, 255, 0.75)"
      >
        <Flex w="82%" justify="space-between" letterSpacing="1px" m="auto">
          {menuItems.map((item) => (
            <Box
              key={item.to}
              p="5px 15px"
              fontWeight="bolder"
              color={activeSection === item.to ? "#FFBC9C" : "#26A69A"}
              _hover={{ color: "#FFBC9C" }}
              transition="all 0.2s ease"
            >
              <ScrollLink
                to={item.to}
                smooth={true}
                duration={500}
                offset={-80}
                onClick={onClose}
              >
                <Text
                  _hover={{ cursor: "pointer" }}
                  className={`nav-link ${item.className}`}
                >
                  {item.label}
                </Text>
              </ScrollLink>
            </Box>
          ))}
        </Flex>
      </Box>

      {/* Mobile Navbar */}
      <Box
        backdropFilter="auto"
        backdropBlur="10px"
        pt="5px"
        pb="15px"
        top="0px"
        position="fixed"
        w="100%"
        display={{ base: "block", sm: "block", md: "block", lg: "none" }}
        zIndex="99"
        bg="rgba(255, 255, 255, 0.75)"
      >
        <Flex
          w="92%"
          m="auto"
          textAlign="center"
          justify="right"
          align="center"
          mt="10px"
        >
          <Box mr="10px" ref={btnRef} onClick={onOpen}>
            <HamburgerIcon color="#00796B" fontSize="35px" />
          </Box>
        </Flex>
      </Box>

      {/* Mobile Drawer */}
      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />

        <DrawerContent
          mt={{ base: "12%", sm: "9%", md: "8%" }}
          backdropFilter="auto"
          backdropBlur="10px"
          pt="5px"
          bg="rgba(255, 255, 255, 0.92)"
        >
          <DrawerBody>
            {menuItems.map((item) => (
              <Box
                key={item.to}
                p="10px 15px"
                bg={activeSection === item.to ? "#071A1C" : "#26A69A"}
                color="white"
                fontWeight="bolder"
                m="10px 0"
                borderRadius="10px"
                transition="all 0.2s ease"
              >
                <ScrollLink
                  to={item.to}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  onClick={onClose}
                >
                  <Text>{item.label}</Text>
                </ScrollLink>
              </Box>
            ))}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};
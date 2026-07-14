import { Box } from "@chakra-ui/react";
import { NavBar } from "./NavBar";
import Footer from "./Footer";
import Project from "./Project";
import GitCalender from "./GitCalender";
import { useContext } from "react";
import About from "./About";
import { ThemeContext } from "./ThemeContext";
import Education from "./Education";
import Experience from "./Experience";

export default function Home() {
  const theme = useContext(ThemeContext);

  return (
    <Box id="home" bg={theme.theme.bg}>
      <NavBar />
      <About />
      <Experience/>
      <Education/>
      <Project />
      <GitCalender />
      <Footer />
    </Box>
  );
}
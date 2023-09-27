import React, { useState, useEffect } from 'react';
import { Box, Flex, Heading } from '@chakra-ui/react';
import GitHubCalendar from 'react-github-calendar';
import axios from 'axios';

export default function GitCalendar() {
  const [contributions, setContributions] = useState([]);
  const githubUsername = "rajon-git";

  useEffect(() => {
    fetchGitHubData();
  }, []);

  const fetchGitHubData = async () => {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${githubUsername}/events`
      );
      console.log("Event Data:", response.data);
      const eventData = response.data.filter(
        (event) => event.type === "PushEvent"
      );
      console.log("Filtered Contributions:", eventData);
      setContributions(selectLastHalfYear(eventData));
    } catch (error) {
      console.error("Error fetching GitHub data:", error);
    }
  };

  const selectLastHalfYear = (contributions) => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const shownMonths = 12;

    return contributions.filter((activity) => {
      const date = new Date(activity.date);
      const monthOfDay = date.getMonth();

      return (
        date.getFullYear() === currentYear &&
        monthOfDay > currentMonth - shownMonths &&
        monthOfDay <= currentMonth
      );
    });
  };

  return (
    <Box pt="25px" textAlign="center" style={{ lineHeight: "1.2" }}>
      <Box w="80%" margin="auto" borderTop="1.5px solid #26A69A"></Box>
      <Heading p="25px" color="#26A69A" size="2xl">
        GitHub
      </Heading>
      <Box p="10px 10px" w="95%" m="auto"  textAlign="center">
        <Flex
          justify="center"
          // Responsive padding
          className="react-activity-calendar"
          color="#26A69A"
          
        >
          <GitHubCalendar
            style={{ width: "100%"}}
            username="rajon-git"
            blockSize={20}
            blockMargin={10}
            fontSize={20}
            fontColor="white"
            hideTotalCount="true"
          />
        </Flex>
        <Flex
          mt="20px"
          flexDirection={{
            base: "column",
            sm: "column",
            md: "row", // Adjust the layout for larger screens
          }}
          justifyContent="space-around"
          alignItems="center"
          gap={{ base: "10px", sm: "15px" }} // Responsive gap
        >
          <Box
            boxShadow="0px 3px 6px rgba(38, 166, 154, 0.5)"
            mb={{ base: "20px", sm: "0" }} // Adjust margin for smaller screens
          >
            <img
              display="block"
              id="github-stats-card"
              src={`https://github-readme-stats.vercel.app/api?username=${githubUsername}&custom_title=GitHub%20Streak%20Stats&show_icons=true&theme=white`}
              alt="GitHub Stats"
            />
          </Box>
          <Box
            boxShadow="0px 3px 6px rgba(38, 166, 154, 0.5)"
          >
            <img
              style={{ display: "block" }}
              id="github-streak-stats"
              src={`https://github-readme-streak-stats.herokuapp.com?user=${githubUsername}&theme=white`}
              alt="GitHub Streak Stats"
            />
          </Box>
        </Flex>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Flex
            w="100%" // Expand to full width
            justifyContent="center"
            alignItems="center"
            mt="20px"
          >
            <Box
            boxShadow="0px 3px 6px rgba(38, 166, 154, 0.5)"
          >
            <img
              display="block"
              id="github-top-langs"
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${githubUsername}`}
              alt="GitHub Top Languages"
            />
            </Box>
          </Flex>
        </div>
      </Box>
    </Box>
  );
}

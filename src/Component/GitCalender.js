import React, { useState, useEffect } from 'react';
import { Box, Flex, Heading } from '@chakra-ui/react';
import GitHubCalendar from 'react-github-calendar';
import explicitTheme from 'react-github-calendar'
import axios from 'axios';

export default function GitCalendar() {
  const [contributions, setContributions] = useState([]);
  const githubUsername = 'rajon-git';

  useEffect(() => {
    fetchGitHubData();
  }, []);

  const fetchGitHubData = async () => {
    try {
      const response = await axios.get(`https://api.github.com/users/${githubUsername}/events`);
      console.log('Event Data:', response.data); // Log the event data
      const eventData = response.data.filter(event => event.type === 'PushEvent');
      console.log('Filtered Contributions:', eventData); // Log the contributions after filtering
      setContributions(selectLastHalfYear(eventData));
    } catch (error) {
      console.error('Error fetching GitHub data:', error);
    }
  };

  const selectLastHalfYear = contributions => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const shownMonths = 12;

    return contributions.filter(activity => {
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
    <Box bg="#2F2FA1" pt='25px' textAlign='center'>
            <Heading p='25px' color='#FF9398' size='2xl'>GitHub</Heading>
            <Box p='40px 20px' w='97%' m='auto' textAlign='center' borderTop='1px solid #FF9398'>
            <Box w='95%' m='auto' p='45px' className="react-activity-calendar"  color='white'>
          <GitHubCalendar
            username="rajon-git"
            blockSize={20}
            blockMargin={10}
            fontSize={20}
            fontColor='white'
            hideTotalCount='true'

          />
        </Box>
        <Flex  mt='40px' flexDirection={{base:'column',sm:'column',md:'column',lg:'row'}} alignItems='center' gap='25px'>
          <Box>
          <img display="block" id="github-stats-card" src={`https://github-readme-stats.vercel.app/api?username=${githubUsername}`} alt="GitHub Stats" />
          </Box>
          <Box>
          <img style={{display:'block'}} id="github-streak-stats"  src={`https://github-readme-streak-stats.herokuapp.com?user=${githubUsername}&theme=neon-blurange`} alt="GitHub Streak Stats" />
          </Box>
        </Flex>
        <Flex  mt='40px'  justifyContent='center'>
              <img width='50%' display="block" id="github-top-langs"
            src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${githubUsername}`}
            alt="GitHub Top Languages"
          />
        </Flex>
      </Box>
    </Box>
  );
}

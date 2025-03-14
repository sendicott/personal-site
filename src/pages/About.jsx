import { Box, Heading, Text } from '@chakra-ui/react';

function About() {
  return (
    <Box p={4}>
      <Heading mb={4}>About Me</Heading>
      <Text>I’m a developer building cool stuff with React and Vite.</Text>
    </Box>
  );
}

export default About;
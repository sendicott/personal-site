import { Box, Heading, Text, Image } from '@chakra-ui/react';
import migoolioPic from '../assets/migoolio.png';

function Home() {
  return (
    <Box p={4}>
      <Heading mb={4}>Welcome to My Personal Site</Heading>
      <Text>This is the home page. Hi, I’m Scott!</Text>
      <Image
        src={migoolioPic}
        alt="Miguel Fondeur"
        borderRadius="full"
        boxSize="150px"
        mx="auto"
      />
    </Box>
  );
}

export default Home;
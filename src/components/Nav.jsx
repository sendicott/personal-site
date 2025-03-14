import { Box, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <Box as="nav" p={4} bg="gray.100">
      <Button as={Link} to="/" mr={2} colorScheme="teal" variant="outline">
        Home
      </Button>
      <Button as={Link} to="/about" mr={2} colorScheme="teal" variant="outline">
        About
      </Button>
      <Button as={Link} to="/projects" colorScheme="teal" variant="outline">
        Projects
      </Button>
      <Button as={Link} to="/commonplace" colorScheme="teal" variant="outline">
        Commonplace
      </Button>
    </Box>
  );
}

export default Nav;
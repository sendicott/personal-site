import { useState, useEffect } from 'react';
import { Box, Heading, Text, VStack, Divider, Container } from '@chakra-ui/react';

function Commonplace() {
  const [quotes, setQuotes] = useState([]);
  const API_URL = 'https://touch-of-wisdom-api.onrender.com';

  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        const response = await fetch(`${API_URL}/quotes`);
        const data = await response.json();
        if (data.error) throw new Error(data.error);
        setQuotes(data);
      } catch (error) {
        console.error('Error fetching quotes:', error);
      }
    };
    fetchQuotes();
  });

  return (
    <Container maxW="container.lg" py={8}>
      <Heading as="h1" size="xl" mb={6} textAlign="center">
        Commonplace Book
      </Heading>
      <VStack spacing={6} align="stretch">
        {quotes.map((quote, index) => (
          <Box key={index}>
            <Text fontStyle="italic" mb={2}>
              “{quote.text}”
            </Text>
            {quote.author && (
              <Text fontSize="sm" color="gray.600" textAlign="right">
                — {quote.author}
                {quote.title && `, ${quote.title}`}
                {quote.note && ` (${quote.note})`}
              </Text>
            )}
            <Divider my={4} />
          </Box>
        ))}
      </VStack>
    </Container>
  );
}

export default Commonplace;
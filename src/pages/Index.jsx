import { Box, Flex, Text, Image, Button, Input, VStack, HStack, FormControl, FormLabel } from '@chakra-ui/react';
import { FaCalendarAlt, FaEnvelope, FaImages, FaInfoCircle } from 'react-icons/fa';

const Index = () => {
  return (
    <Box>
      <Flex direction="column" align="center" justify="center" p={5}>
        <Text fontSize="5xl" fontWeight="bold" bgGradient="linear(to-l, #7928CA, #FF0080)" bgClip="text">Band Name</Text>
        <Text fontSize="2xl" color="gray.600">Live Tours & Events</Text>
      </Flex>
      <VStack spacing={10} p={5}>
        <Box w="full" p={5} boxShadow="md" rounded="md">
          <HStack spacing={3}>
            <FaCalendarAlt size="24px" />
            <Text fontSize="2xl" fontWeight="bold">Tour Dates</Text>
          </HStack>
          <Text mt={2}>Check out our upcoming tour dates and locations!</Text>
          <Button mt={3} colorScheme="purple">View Dates</Button>
        </Box>
        <Box w="full" p={5} boxShadow="md" rounded="md">
          <HStack spacing={3}>
            <FaInfoCircle size="24px" />
            <Text fontSize="2xl" fontWeight="bold">Band Biography</Text>
          </HStack>
          <Text mt={2}>Learn more about the band's history and members.</Text>
          <Button mt={3} colorScheme="purple">Read More</Button>
        </Box>
        <Box w="full" p={5} boxShadow="md" rounded="md">
          <HStack spacing={3}>
            <FaImages size="24px" />
            <Text fontSize="2xl" fontWeight="bold">Photo Gallery</Text>
          </HStack>
          <Text mt={2}>Browse through our collection of band photos and event highlights.</Text>
          <Button mt={3} colorScheme="purple">View Gallery</Button>
        </Box>
        <Box w="full" p={5} boxShadow="md" rounded="md">
          <HStack spacing={3}>
            <FaEnvelope size="24px" />
            <Text fontSize="2xl" fontWeight="bold">Contact Us</Text>
          </HStack>
          <FormControl mt={3}>
            <FormLabel>Name</FormLabel>
            <Input placeholder="Your name" />
            <FormLabel mt={3}>Email</FormLabel>
            <Input placeholder="Your email" />
            <FormLabel mt={3}>Message</FormLabel>
            <Input placeholder="Your message" />
            <Button mt={4} colorScheme="purple">Send Message</Button>
          </FormControl>
        </Box>
      </VStack>
    </Box>
  );
};

export default Index;
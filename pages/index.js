import {
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Link,
  Spacer,
  VStack,
} from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex
      justifyContent={"center"}
      alignItems="center"
      h="100vh"
      background="#3399FF"
    >
      <VStack spacing={6}>
        <Heading color="#E6E6E6">Academia - Student Portal</Heading>
        <VStack background="white" w="100%" p={6} rounded={12} spacing={8}>
          <Heading
            color="#33b5e5"
            size="md"
            mr="auto"
            pl={6}
            fontWeight="medium"
          >
            Sign In
          </Heading>
          <FormControl pl={6}>
            <FormLabel>Email Address</FormLabel>
            <Input placeholder="Email Address" w="90%" rounded={1} />
          </FormControl>
          <FormControl pl={6}>
            <FormLabel>Password</FormLabel>
            <Input placeholder="Password" w="90%" rounded={1} />
          </FormControl>
          <Button
            rounded={1}
            width="85%"
            color="white"
            backgroundColor="#33b5e5"
          >
            Sign In
          </Button>
          <Link color="#33b5e5" pt={3}>
            Forgot Password
          </Link>
        </VStack>
      </VStack>
    </Flex>
  );
}
// rgb(51 153 255)

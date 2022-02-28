import {
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Image,
  Input,
  Link,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex
      alignItems="center"
      h="100vh"
      background="#3399FF"
      flexDirection="column"
    >
      <Flex justifyContent={"space-between"} w="55vw" mt={6} mb={6}>
        <Image src="./srm.png" h="90px" />
        <Image src="./adc.png" h="95px" />
      </Flex>
      <VStack spacing={6} justifyContent={"center"}>
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
            <Input placeholder="Password" w="90%" rounded={1} type="password" />
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
        <Text color="white" pt={16}>
          {" "}
          Developed by Abhuday Mishra
        </Text>
      </VStack>
    </Flex>
  );
}

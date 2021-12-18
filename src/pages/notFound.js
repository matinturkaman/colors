import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <Flex alignItems="center" justifyContent="center" h="600px">
      <Flex mt="30px" flexDir="column" alignItems="center">
        <Heading color="#7000FF" fontSize="200px">
          404
        </Heading>
        <Heading color="#323232">oops!</Heading>
        <Text fontSize="20px" color="#444444" mt="15px">
          404 page not found
        </Text>
        <Flex mt="18px" flexDir="row" justifyContent="space-between" w="80%">
          <Link to="/">
            <Button
              w="130px"
              rounded="50px"
              background="#7000FF"
              color="white"
              as="a"
              _hover={{ bg: "#6400C8" }}
              _active={{ bg: "#5500AA" }}
            >
              Go home
            </Button>
          </Link>
          <Link to="/explore">
            <Button
              w="130px"
              rounded="50px"
              background="white"
              color="#7000FF"
              boxShadow="lg"
              as="a"
              _hover={{}}
            >
              Go back
            </Button>
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default NotFoundPage;

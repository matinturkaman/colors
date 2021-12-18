import Navbar from "../navbar/navbar";
import { Flex } from "@chakra-ui/layout";

const Header = () => {
  return (
    <Flex
      maxW="container.3xl"
      bg="white"
      height="70"
      p="10px"
      justifyContent="space-between"
      alignItems="center"
    >
      <Navbar />
    </Flex>
  );
};

export default Header;

import { Button, Flex, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import logo from "../../svg/logo.svg";

const Navbar = () => {
  const nav = [
    { name: "Home", to: "/", exact: true, id: 1 },
    { name: "Explore", to: "/explore", id: 2 },
    { name: "Template", to: "/temp", id: 3 },
    { name: "About", to: "/about", id: 4 },
  ];

  return (
    <>
      <Flex>
        <Image src={logo} />
      </Flex>
      <Flex
        initial="hidden"
        animate="visible"
        justifyContent="space-between"
        w="300px"
      >
        {nav.map((n) => {
          return (
            <Text
              h="30px"
              key={n.id}
              cursor="pointer"
              color="#B366FF"
              fontWeight="medium"
            >
              <NavLink
                to={n.to}
                exact
                activeStyle={{
                  borderBottom: "2px solid #8000FF",
                  fontWeight: "bold",
                  color: "#8000FF",
                  paddingBottom: "15px",
                }}
              >
                {n.name}
              </NavLink>
            </Text>
          );
        })}
      </Flex>
      <Flex justifyContent="space-between">
        <Button
          w="95px"
          fontSize="14px"
          background="#8000FF"
          borderRadius="50px"
          color="white"
          as="a"
          cursor="pointer"
          _hover={{ bg: "#6400C8" }}
          _active={{ bg: "#5500AA" }}
        >
          Sign up
        </Button>
        <Button
          w="95px"
          fontSize="14px"
          border="1px solid"
          background="none"
          borderColor="#8000FF"
          borderRadius="50px"
          ml="15px"
          as="a"
          cursor="pointer"
          _hover={{ bg: "none" }}
        >
          Sign in
        </Button>
      </Flex>
    </>
  );
};

export default Navbar;

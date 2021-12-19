import {
  Button,
  Flex,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../svg/logo.svg";
import { AiOutlineMenu } from "react-icons/ai";

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
        <Link to="/">
          <Image src={logo} />
        </Link>
      </Flex>
      <Flex
        initial="hidden"
        animate="visible"
        justifyContent="space-between"
        w="300px"
        display={{
          base: "none",
          sm: "none",
          md: "flex",
          lg: "flex",
          xl: "flex",
        }}
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
      <Menu>
        <MenuButton>
          <Flex
            cursor="pointer"
            display={{
              base: "flex",
              sm: "flex",
              md: "none",
              lg: "none",
              xl: "none",
            }}
          >
            <AiOutlineMenu fontSize="30px" color="#8000FF" />
          </Flex>
        </MenuButton>
        <MenuList zIndex="15">
          {nav.map((n) => {
            return (
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
                <MenuItem key={n.id}>{n.name}</MenuItem>
              </NavLink>
            );
          })}
        </MenuList>
      </Menu>
      <Flex
        justifyContent="space-between"
        display={{
          base: "none",
          sm: "none",
          md: "flex",
          lg: "flex",
          xl: "flex",
        }}
      >
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

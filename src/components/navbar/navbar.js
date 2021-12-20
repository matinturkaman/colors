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
      <Menu
        display={{
          base: "flex",
          sm: "flex",
          md: "none",
          lg: "none",
          xl: "none",
        }}
      >
        <MenuButton
          display={{
            base: "flex",
            sm: "flex",
            md: "none",
            lg: "none",
            xl: "none",
          }}
        >
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
        <MenuList
          flexDir="column"
          display={{
            base: "flex",
            sm: "flex",
            md: "none",
            lg: "none",
            xl: "none",
          }}
          zIndex="15"
        >
          {nav.map((n) => {
            return (
              <NavLink
                key={n.id}
                to={n.to}
                exact
                activeStyle={{
                  color: "#8000FF",
                }}
              >
                <MenuItem>{n.name}</MenuItem>
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
          cursor="pointer"
          _hover={{ bg: "#6400C8" }}
          _focus={{}}
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
          color="#8000FF"
          ml="15px"
          _focus={{}}
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

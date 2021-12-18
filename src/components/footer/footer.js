import logo from "../../svg/logo.svg";
import { Link } from "react-router-dom";
import { BsDribbble, BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { Image, Text } from "@chakra-ui/react";
import { Flex, Heading } from "@chakra-ui/layout";

const Footer = () => {
  return (
    <Flex
      h="320px"
      position="absolute"
      bg="#FAFAFA"
      right="0"
      left="0"
      mt="30"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <Flex w="70%" flexDirection="column" position="absolute">
        <Flex justifyContent="space-between">
          <Flex flexDirection="column">
            <Heading fontSize="24">Website</Heading>
            <Link to="/explore">
              <Text color="#B1B1B1" mt="15px">
                Explore colors
              </Text>
            </Link>
            <Link to="/temp">
              <Text color="#B1B1B1" mt="15px">
                Templates color palettes
              </Text>
            </Link>
            <Link to="/about">
              <Text color="#B1B1B1" mt="15px">
                About us
              </Text>
            </Link>
          </Flex>
          <Flex flexDirection="column">
            <Heading fontSize="24">Company</Heading>
            <Link to="/">
              <Text color="#B1B1B1" mt="15px">
                Terms of service
              </Text>
            </Link>
            <Link to="/">
              <Text color="#B1B1B1" mt="15px">
                Privacy policy
              </Text>
            </Link>
            <Link to="/">
              <Text color="#B1B1B1" mt="15px">
                Cookie policy
              </Text>
            </Link>
            <Link to="/">
              <Text color="#B1B1B1" mt="15px">
                Help center
              </Text>
            </Link>
            <Link to="/">
              <Text color="#B1B1B1" mt="15px">
                Contact
              </Text>
            </Link>
          </Flex>
          <Flex flexDirection="column">
            <Heading fontSize="24">Product</Heading>
            <Link to="/">
              <Text color="#B1B1B1" mt="15px">
                iOS app
              </Text>
            </Link>
            <Link to="/">
              <Text color="#B1B1B1" mt="15px">
                Privacy policy
              </Text>
            </Link>
            <Link to="/">
              <Text color="#B1B1B1" mt="15px">
                Adobe addon
              </Text>
              <Text color="#B1B1B1" mt="15px">
                chrome extension
              </Text>
            </Link>
          </Flex>
          <Flex flexDirection="column">
            <Heading fontSize="24">Account</Heading>
            <Link to="/">
              <Text color="#B1B1B1" mt="15px">
                Sign in
              </Text>
            </Link>
            <Link to="/">
              <Text color="#B1B1B1" mt="15px">
                Sign up
              </Text>
            </Link>
            <Link to="/">
              <Text color="#B1B1B1" mt="15px">
                Reset password
              </Text>
            </Link>
          </Flex>
        </Flex>
        <Flex justifyContent="space-between" alignItems="center">
          <Flex alignItems="center">
            <Link to="/">
              <Image src={logo} />
            </Link>
            <Flex flexDirection="row">
              <Text color="#333333" fontWeight="medium">
                © {new Date().getFullYear()} color by
              </Text>
              <a target="blank" href="https://github.com/matinturkaman">
                <Text color="#8000FF" fontWeight="bold" ml="5px">
                  matin turkaman
                </Text>
              </a>
            </Flex>
          </Flex>
          <Flex justifyContent="space-between" w="18%">
            <a target="blank" href="https://github.com/matinturkaman">
              <BsGithub fontSize="25px" />
            </a>
            <a
              target="blank"
              href="https://www.linkedin.com/in/matin-turkaman-a9b70b215/"
            >
              <BsLinkedin fontSize="25px" />
            </a>
            <a target="blank" href="https://dribbble.com/matinturkaman">
              <BsDribbble fontSize="25px" />
            </a>
            <a target="blank" href="https://www.instagram.com/matinturkaman/">
              <BsInstagram fontSize="25px" />
            </a>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Footer;

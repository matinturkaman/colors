import logo from "../../svg/logo.svg";
import { Link } from "react-router-dom";
import { BsDribbble, BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { Image, Text } from "@chakra-ui/react";
import { Flex, Heading } from "@chakra-ui/layout";

const Footer = () => {
  return (
    <Flex
      h="auto"
      bg="#FAFAFA"
      right="0"
      left="0"
      mt="30"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <Flex w="70%" flexDirection="column">
        <Flex
          flexDir={{
            base: "column",
            sm: "column",
            md: "row",
            lg: "row",
            xl: "row",
          }}
          justifyContent="space-between"
        >
          <Flex flexDirection="column" mt="20px">
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
          <Flex flexDirection="column" mt="20px">
            <Heading fontSize="24">Company</Heading>
            <Text color="#B1B1B1" mt="15px">
              Terms of service
            </Text>

            <Text color="#B1B1B1" mt="15px">
              Privacy policy
            </Text>

            <Text color="#B1B1B1" mt="15px">
              Cookie policy
            </Text>

            <Text color="#B1B1B1" mt="15px">
              Help center
            </Text>

            <Text color="#B1B1B1" mt="15px">
              Contact
            </Text>
          </Flex>
          <Flex flexDirection="column" mt="20px">
            <Heading fontSize="24">Product</Heading>
            <Text color="#B1B1B1" mt="15px">
              iOS app
            </Text>
            x
            <Text color="#B1B1B1" mt="15px">
              Privacy policy
            </Text>
            <Text color="#B1B1B1" mt="15px">
              Adobe addon
            </Text>
            <Text color="#B1B1B1" mt="15px">
              chrome extension
            </Text>
          </Flex>
          <Flex flexDirection="column" mt="20px">
            <Heading fontSize="24">Account</Heading>
            <Text color="#B1B1B1" mt="15px">
              Sign in
            </Text>

            <Text color="#B1B1B1" mt="15px">
              Sign up
            </Text>

            <Text color="#B1B1B1" mt="15px">
              Reset password
            </Text>
          </Flex>
        </Flex>
        <Flex justifyContent="space-between" alignItems="center" mt="20px">
          <Flex alignItems="center" display={["none", "none", "flex", "flex"]}>
            <Link to="/">
              <Image src={logo} />
            </Link>
            <Flex flexDirection="row">
              <Text color="#333333" fontWeight="medium">
                © {new Date().getFullYear()} color by
              </Text>
              <Text color="#8000FF" fontWeight="bold" ml="5px">
                <a target="blank" href="https://github.com/matinturkaman">
                  matin turkaman
                </a>
              </Text>
            </Flex>
          </Flex>
          <Flex justifyContent="space-between" w="18%">
            <a target="blank" href="https://github.com/matinturkaman">
              <BsGithub fontSize="25px" style={{ marginRight: "30px" }} />
            </a>
            <a
              target="blank"
              href="https://www.linkedin.com/in/matin-turkaman-a9b70b215/"
            >
              <BsLinkedin fontSize="25px" style={{ marginRight: "30px" }} />
            </a>
            <a target="blank" href="https://dribbble.com/matinturkaman">
              <BsDribbble fontSize="25px" style={{ marginRight: "30px" }} />
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

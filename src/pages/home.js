import mobile from "../svg/mobile.svg";
import { Flex } from "@chakra-ui/layout";
import { Button, Heading, Image } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  const TextMotion = motion(Text);
  const HeadingMotion = motion(Heading);
  const ImageMotion = motion(Image);

  const leftFade = {
    hidden: { x: -350, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  const bottomFade = {
    hidden: { y: 480, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const rightBottomFade = {
    hidden: { y: -100, x: 50, opacity: 0 },
    visible: { y: 0, x: 0, opacity: 1 },
  };

  return (
    <Flex h="80vh" alignItems="center" justifyContent="space-evenly">
      <Flex flexDirection="column">
        <HeadingMotion
          initial="hidden"
          animate="visible"
          variants={leftFade}
          fontSize="60px"
          color="#8000FF"
          transition={{ duraction: 0.8, delay: 0.3 }}
        >
          Trending
        </HeadingMotion>
        <HeadingMotion
          initial="hidden"
          animate="visible"
          variants={leftFade}
          fontSize="60px"
          color="#8000FF"
          transition={{ duraction: 0.8, delay: 0.3 }}
        >
          color palettes
        </HeadingMotion>
        <TextMotion
          initial="hidden"
          animate="visible"
          variants={bottomFade}
          w="330px"
          color="#7A7A86"
          transition={{ duraction: 0.4, delay: 0.5 }}
          mt="30px"
        >
          A complete design system with 70 pre-built screens for mobile apps to
          enable you to kick-off your mobile app design.
        </TextMotion>
        <Flex mt="30px" flexDirection="row">
          <Link to="/explore">
            <Button
              rounded="100px"
              w="125px"
              bg="#8000FF"
              color="#FFFAED"
              as="a"
              cursor="pointer"
              transition=".2s ease-in-out"
              _hover={{ bg: "#6400C8" }}
              _active={{ bg: "#5500AA" }}
            >
              Get Started
            </Button>
          </Link>
          <Button
            rounded="100px"
            w="125px"
            bg="#FFFFFF"
            boxShadow="lg"
            color="#8000FF"
            as="a"
            cursor="pointer"
            transition=".2s ease-in-out"
            ml="20px"
            _hover={{}}
          >
            Learn more
          </Button>
        </Flex>
      </Flex>
      <Flex mt="30px" flexDirection="row">
        <ImageMotion
          initial="hidden"
          animate="visible"
          variants={rightBottomFade}
          transition={{ duraction: 0.8, delay: 0.3 }}
          w="450px"
          src={mobile}
          alt="mobile"
        />
      </Flex>
    </Flex>
  );
};

export default Home;

import { Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import aboutSvg from "../svg/about.svg";

const About = () => {
  return (
    <Flex alignItems="center" justifyContent="center" h="600px">
      <Flex flexDir="row" justifyContent="space-evenly">
        <Flex flexDir="column">
          <Heading
            fontSize={{ base: "30px", sm: "50px", lg: "50px", xl: "50px" }}
            color="#8900FF"
          >
            About US
          </Heading>
          <Text
            w={{ base: "300px", sm: "350px", lg: "350px", xl: "350px" }}
            mt="30px"
            color="#B0B0B0"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare
            morbi pharetra sed fusce sed non lectus. Mauris mauris cursus
            pulvinar sed in pellentesque faucibus id. Vitae, risus dui commodo,
            mattis consectetur. Congue lacus aliquet nec cursus quam gravida nam
            adipiscing vel. Nullam ut semper scelerisque non enim elit fames
            vitae
          </Text>
          <Flex
            mt="18px"
            flexDir="row"
            justifyContent="space-between"
            w={["75%", "80%", "80%", "80%"]}
          >
            <Button
              w={["100px", "130px", "130px", "130px"]}
              h={["35px", "40px", "40px", "40px"]}
              fontSize={["14px", "17px", "17px", "17px"]}
              rounded="50px"
              background="#7000FF"
              color="white"
              cursor="pointer"
              _focus={{}}
              _hover={{ bg: "#6400C8" }}
              _active={{ bg: "#5500AA" }}
            >
              Send email
            </Button>
            <Button
              w={["100px", "130px", "130px", "130px"]}
              h={["35px", "40px", "40px", "40px"]}
              fontSize={["14px", "17px", "17px", "17px"]}
              rounded="50px"
              background="white"
              color="#7000FF"
              boxShadow="lg"
              cursor="pointer"
              _focus={{}}
              _hover={{}}
            >
              Read more
            </Button>
          </Flex>
        </Flex>
        <Flex display={{ base: "none", sm: "none", lg: "flex", xl: "flex" }}>
          <Image w="lg" src={aboutSvg} />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default About;

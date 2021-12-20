import { useEffect, useRef, useState } from "react";
import { Box } from "@chakra-ui/layout";
import { Text, Flex, Button } from "@chakra-ui/react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { AiOutlineDownload, AiTwotoneLike } from "react-icons/ai";
import { Divider } from "@chakra-ui/react";
import domtoimage from "dom-to-image";
import NotFoundPage from "./notFound";

const ColorDetail = ({ location }) => {
  const [copied, setCopied] = useState(false);

  const container = useRef(null);
  const [source, setSource] = useState("");

  useEffect(() => {
    exportToPng(container.current);
  }, []);

  const exportToPng = (dom) => {
    domtoimage.toPng(dom).then(function (dataURL) {
      let img = new Image();
      img.src = dataURL;
      setSource(img.src);
    });
  };

  if (!location.state) {
    return <NotFoundPage />;
  }

  return (
    <Flex alignItems="center" flexDirection="column">
      <Flex
        w={{ base: "300px", sm: "435px", lg: "435px", xl: "435px" }}
        h={{ base: "280px", sm: "330px", lg: "330px", xl: "330px" }}
        rounded="14px"
        flexDirection="column"
        mt="30px"
        key={location.state.p.id}
      >
        <Box>
          <Flex
            h={{ base: "200px", sm: "250px", lg: "250px", xl: "250px" }}
            ref={container}
          >
            <Box
              h={{ base: "200px", sm: "250px", lg: "250px", xl: "250px" }}
              rounded="14px 0px 0px 14px"
              flex={1}
              bg={location.state.p.one}
              className="box"
              display="flex"
              alignItems="flex-end"
              cursor="pointer"
            >
              <CopyToClipboard text={location.state.p.one}>
                <Flex
                  className="code"
                  w="100%"
                  justifyContent="center"
                  alignItems="center"
                  color="white"
                  bg="#3a3a3a80"
                  transition=".2s"
                  onClick={() => {
                    setCopied(true);
                    setTimeout(() => {
                      setCopied(false);
                    }, 1000);
                  }}
                  _hover={{ bg: "#3a3a3a9c" }}
                >
                  <Text>{copied ? "Copied!" : location.state.p.one}</Text>
                </Flex>
              </CopyToClipboard>
            </Box>
            <Box
              cursor="pointer"
              className="box"
              display="flex"
              alignItems="flex-end"
              h={{ base: "200px", sm: "250px", lg: "250px", xl: "250px" }}
              flex={1}
              bg={location.state.p.two}
            >
              <CopyToClipboard text={location.state.p.two}>
                <Flex
                  className="code"
                  w="100%"
                  justifyContent="center"
                  alignItems="center"
                  color="white"
                  bg="#3a3a3a80"
                  transition=".2s"
                  _hover={{ bg: "#3a3a3a9c" }}
                  onClick={() => {
                    setCopied(true);
                    setTimeout(() => {
                      setCopied(false);
                    }, 1000);
                  }}
                >
                  <Text>{copied ? "Copied!" : location.state.p.two}</Text>
                </Flex>
              </CopyToClipboard>
            </Box>
            <Box
              cursor="pointer"
              className="box"
              display="flex"
              alignItems="flex-end"
              h={{ base: "200px", sm: "250px", lg: "250px", xl: "250px" }}
              flex={1}
              bg={location.state.p.three}
            >
              <CopyToClipboard text={location.state.p.three}>
                <Flex
                  className="code"
                  w="100%"
                  justifyContent="center"
                  alignItems="center"
                  color="white"
                  bg="#3a3a3a80"
                  transition=".2s"
                  _hover={{ bg: "#3a3a3a9c" }}
                  onClick={() => {
                    setCopied(true);
                    setTimeout(() => {
                      setCopied(false);
                    }, 1000);
                  }}
                >
                  <Text>{copied ? "Copied!" : location.state.p.three}</Text>
                </Flex>
              </CopyToClipboard>
            </Box>
            <Box
              cursor="pointer"
              h={{ base: "200px", sm: "250px", lg: "250px", xl: "250px" }}
              className="box"
              display="flex"
              alignItems="flex-end"
              rounded="0px 14px 14px 0px"
              flex={1}
              bg={location.state.p.four}
            >
              <CopyToClipboard text={location.state.p.four}>
                <Flex
                  className="code"
                  w="100%"
                  justifyContent="center"
                  alignItems="center"
                  color="white"
                  bg="#3a3a3a80"
                  transition=".2s"
                  _hover={{ bg: "#3a3a3a9c" }}
                  onClick={() => {
                    setCopied(true);
                    setTimeout(() => {
                      setCopied(false);
                    }, 400);
                  }}
                >
                  <Text>{copied ? "Copied!" : location.state.p.four}</Text>
                </Flex>
              </CopyToClipboard>
            </Box>
          </Flex>
        </Box>
        <Flex
          h="full"
          justifyContent={{
            base: "center",
            sm: "space-between",
            lg: "space-between",
            xl: "space-between",
          }}
          alignItems="center"
        >
          <Flex justifyContent="space-between" w="230px">
            <Button
              leftIcon={<AiTwotoneLike fontSize="18px" color="#646464" />}
              bg="none"
              border="0.5px solid"
              borderColor="#F0F0F0"
              color="#646464"
              cursor="pointer"
              rounded="10"
            >
              3,456
            </Button>
            <a href={source} download={`color ${location.state.p.category}`}>
              <Button
                leftIcon={<AiOutlineDownload fontSize="18px" color="#646464" />}
                bg="none"
                border="0.5px solid"
                borderColor="#F0F0F0"
                color="#646464"
                cursor="pointer"
                rounded="10"
                _focus={{}}
              >
                Image
              </Button>
            </a>
          </Flex>
          <Text
            mr="15px"
            display={{ base: "none", sm: "block", lg: "block", xl: "block" }}
            color="#646464"
            fontWeight="medium"
          >
            9 months
          </Text>
        </Flex>
      </Flex>
      <Flex
        w={{ base: "250px", sm: "430px", lg: "430px", xl: "430px" }}
        mt="30"
        flexDirection="column"
      >
        <Flex w="full" minH="100px" justifyContent="space-between">
          <Box w="40px" h="40px" rounded="50px" bg={location.state.p.one}></Box>
          <Box w="40px" h="40px" rounded="50px" bg={location.state.p.two}></Box>
          <Box
            w="40px"
            h="40px"
            rounded="50px"
            bg={location.state.p.three}
          ></Box>
          <Box
            w="40px"
            h="40px"
            rounded="50px"
            bg={location.state.p.four}
          ></Box>
        </Flex>
        <Divider mt="-30px" />
        <Flex
          mt={{ base: "20px", sm: "0px", lg: "0px", xl: "0px" }}
          w="full"
          minH="100px"
          justifyContent="space-between"
          alignItems="center"
          color="#646464"
          flexDir={{ base: "column", sm: "row", lg: "row", xl: "row" }}
        >
          <CopyToClipboard text={location.state.p.one}>
            <Text>{location.state.p.one}</Text>
          </CopyToClipboard>
          <Text>{location.state.p.two}</Text>
          <Text>{location.state.p.three}</Text>
          <Text>{location.state.p.four}</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ColorDetail;

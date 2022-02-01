import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import TempData from "../data/temp";

const Temp = () => {
  
  const [copied, setCopied] = useState(false);

  const toggleCopy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 400);
  };

  return (
    <Flex justifyContent="space-evenly" flexDir="row" flexWrap="wrap">
      {TempData.map((t) => {
        return (
          <Flex
            key={t.id}
            mt="30px"
            minH="300px"
            flexWrap="wrap"
            justifyContent="space-evenly"
          >
            <Flex flexDirection="column">
              <Image w="380px" borderRadius="4px 4px 0px 0px" src={t.image} />
              <Flex transform="translateY(-90px)">
                <Box
                  className="box"
                  flex={1}
                  h="90px"
                  bg={t.one}
                  display="flex"
                  alignItems="flex-end"
                >
                  <CopyToClipboard text={t.one}>
                    <Flex
                      className="code"
                      w="100%"
                      justifyContent="center"
                      alignItems="center"
                      color="white"
                      bg="#3a3a3a80"
                      transition=".2s"
                      onClick={toggleCopy}
                      _hover={{ bg: "#3a3a3a9c" }}
                      cursor="pointer"
                    >
                      <Text>{copied ? "Copied!" : t.one}</Text>
                    </Flex>
                  </CopyToClipboard>
                </Box>
                <Box
                  className="box"
                  flex={1}
                  h="90px"
                  bg={t.two}
                  display="flex"
                  alignItems="flex-end"
                >
                  <CopyToClipboard text={t.two}>
                    <Flex
                      className="code"
                      w="100%"
                      justifyContent="center"
                      alignItems="center"
                      color="white"
                      bg="#3a3a3a80"
                      transition=".2s"
                      onClick={toggleCopy}
                      _hover={{ bg: "#3a3a3a9c" }}
                      cursor="pointer"
                    >
                      <Text>{copied ? "Copied!" : t.two}</Text>
                    </Flex>
                  </CopyToClipboard>
                </Box>
                <Box
                  className="box"
                  flex={1}
                  h="90px"
                  bg={t.three}
                  display="flex"
                  alignItems="flex-end"
                >
                  <CopyToClipboard text={t.three}>
                    <Flex
                      className="code"
                      w="100%"
                      justifyContent="center"
                      alignItems="center"
                      color="white"
                      bg="#3a3a3a80"
                      transition=".2s"
                      onClick={toggleCopy}
                      _hover={{ bg: "#3a3a3a9c" }}
                      cursor="pointer"
                    >
                      <Text>{copied ? "Copied!" : t.three}</Text>
                    </Flex>
                  </CopyToClipboard>
                </Box>
                <Box
                  className="box"
                  flex={1}
                  h="90px"
                  bg={t.four}
                  display="flex"
                  alignItems="flex-end"
                >
                  <CopyToClipboard text={t.four}>
                    <Flex
                      className="code"
                      w="100%"
                      justifyContent="center"
                      alignItems="center"
                      color="white"
                      bg="#3a3a3a80"
                      transition=".2s"
                      onClick={toggleCopy}
                      _hover={{ bg: "#3a3a3a9c" }}
                      cursor="pointer"
                    >
                      <Text>{copied ? "Copied!" : t.four}</Text>
                    </Flex>
                  </CopyToClipboard>
                </Box>
              </Flex>
            </Flex>
          </Flex>
        );
      })}
    </Flex>
  );
};

export default Temp;

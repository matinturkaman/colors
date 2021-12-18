import palettes from "../../data/colors";
import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";
import { AiTwotoneLike } from "react-icons/ai";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";
import { HiViewGrid } from "react-icons/hi";
import { FiSearch } from "react-icons/fi";

const PalettesComp = () => {
  const [copied, setCopied] = useState(false);
  const [allPalette, setAllPalette] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setAllPalette(palettes);
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
    const search = e.target.value;
    if (search !== "") {
      const filtredSearch = palettes.filter((p) => {
        return Object.values(p)
          .join(" ")
          .toLowerCase()
          .includes(search.toLowerCase());
        });
      setAllPalette(filtredSearch);
    } else {
      setAllPalette(palettes);
    }
  };


  const toggleCopy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 400);
  };

  return (
    <>
      <Flex
        maxW="container.3xl"
        h="70px"
        border="0.5px solid"
        borderColor="#F6F6F6"
        alignItems="center"
        justifyContent="space-between"
        p="15px"
      >
        <Flex>
          <Text color="#7A7A86">
            Find the perfect palette by mixing search terms.
          </Text>
        </Flex>
        <Flex>
          <InputGroup>
            <InputLeftElement children={<FiSearch color="#7A7A86" />} />
            <Input
              value={search}
              onChange={handleChange}
              placeholder="Search"
              focusBorderColor="#8000FF"
            />
          </InputGroup>
        </Flex>
      </Flex>
      <Flex w="full" minH="300px" flexWrap="wrap" justifyContent="space-evenly">
        {allPalette.map((p) => {
          return (
            <Flex
              w="355px"
              h="250px"
              border="0.5px solid"
              rounded="14px"
              borderColor="#F0F0F0"
              flexDirection="column"
              mt="30px"
              ml="30px"
              key={p.id}
            >
              <Flex h="180px">
                <Box
                  h="180px"
                  rounded="14px 0px 0px 0px"
                  flex={1}
                  bg={p.one}
                  className="box"
                  display="flex"
                  alignItems="flex-end"
                  cursor="pointer"
                >
                  <CopyToClipboard text={p.one}>
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
                    >
                      <Text>{copied ? "Copied!" : p.one}</Text>
                    </Flex>
                  </CopyToClipboard>
                </Box>
                <Box
                  cursor="pointer"
                  className="box"
                  display="flex"
                  alignItems="flex-end"
                  h="180px"
                  flex={1}
                  bg={p.two}
                >
                  <CopyToClipboard text={p.two}>
                    <Flex
                      className="code"
                      w="100%"
                      justifyContent="center"
                      alignItems="center"
                      color="white"
                      bg="#3a3a3a80"
                      transition=".2s"
                      _hover={{ bg: "#3a3a3a9c" }}
                      onClick={toggleCopy}
                    >
                      <Text>{copied ? "Copied!" : p.two}</Text>
                    </Flex>
                  </CopyToClipboard>
                </Box>
                <Box
                  cursor="pointer"
                  className="box"
                  display="flex"
                  alignItems="flex-end"
                  h="180px"
                  flex={1}
                  bg={p.three}
                >
                  <CopyToClipboard text={p.three}>
                    <Flex
                      className="code"
                      w="100%"
                      justifyContent="center"
                      alignItems="center"
                      color="white"
                      bg="#3a3a3a80"
                      transition=".2s"
                      _hover={{ bg: "#3a3a3a9c" }}
                      onClick={toggleCopy}
                    >
                      <Text>{copied ? "Copied!" : p.three}</Text>
                    </Flex>
                  </CopyToClipboard>
                </Box>
                <Box
                  cursor="pointer"
                  h="180px"
                  className="box"
                  display="flex"
                  alignItems="flex-end"
                  rounded="0px 14px 0px 0px"
                  flex={1}
                  bg={p.four}
                >
                  <CopyToClipboard text={p.four}>
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
                      <Text>{copied ? "Copied!" : p.four}</Text>
                    </Flex>
                  </CopyToClipboard>
                </Box>
              </Flex>
              <Flex h="full" justifyContent="space-between" alignItems="center">
                <Flex>
                  <Button
                    leftIcon={<AiTwotoneLike fontSize="18px" color="#646464" />}
                    bg="none"
                    border="0.5px solid"
                    borderColor="#F0F0F0"
                    color="#646464"
                    as="a"
                    ml="15px"
                    cursor="pointer"
                    rounded="10"
                  >
                    3,456
                  </Button>
                  <Link to={{ pathname: `/palette/${p.id}`, state: { p } }}>
                    <Button
                      leftIcon={<HiViewGrid fontSize="18px" color="#646464" />}
                      bg="none"
                      border="0.5px solid"
                      borderColor="#F0F0F0"
                      color="#646464"
                      as="a"
                      ml="15px"
                      cursor="pointer"
                      rounded="10"
                    >
                      view
                    </Button>
                  </Link>
                </Flex>
                <Text mr="15px" color="#646464" fontWeight="medium">
                  9 months
                </Text>
              </Flex>
            </Flex>
          );
        })}
      </Flex>
    </>
  );
};

export default PalettesComp;

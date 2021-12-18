import { Flex } from "@chakra-ui/react";
import PalettesComp from "../components/palettes/palettes";

const Explore = () => {
  return (
    <Flex flexDirection="column">
      <Flex flexDir="column">
        <PalettesComp />
      </Flex>
    </Flex>
  );
};

export default Explore;

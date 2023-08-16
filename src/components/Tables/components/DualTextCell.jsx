import { Flex, Td, Text, useColorModeValue } from "@chakra-ui/react";

const DualTextCell = ({ title, subTitle }) => {
  const textColor = useColorModeValue("gray.700", "white");
  return (
    <Td>
      <Flex direction="column">
        <Text fontSize="md" color={textColor} fontWeight="bold">
          {title}
        </Text>
        <Text fontSize="sm" color="gray.400" fontWeight="normal">
          {subTitle}
        </Text>
      </Flex>
    </Td>
  );
};

export default DualTextCell;

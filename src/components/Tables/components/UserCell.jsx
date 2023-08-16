import { Avatar, Flex, Td, Text, useColorModeValue } from "@chakra-ui/react";

export const UserCell = ({ photoUrl, name, email }) => {
  const textColor = useColorModeValue("gray.700", "white");
  return (
    <Td minWidth={{ sm: "250px" }} pl="0px">
      <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
        <Avatar src={photoUrl} w="50px" borderRadius="12px" me="18px" />
        <Flex direction="column">
          <Text
            fontSize="md"
            color={textColor}
            fontWeight="bold"
            minWidth="100%"
          >
            {name}
          </Text>
          <Text fontSize="sm" color="gray.400" fontWeight="normal">
            {email}
          </Text>
        </Flex>
      </Flex>
    </Td>
  );
};

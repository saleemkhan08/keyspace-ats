import { Badge, Td, useColorModeValue } from "@chakra-ui/react";

const BadgeCell = ({ text }) => {
  const bgStatus = useColorModeValue("gray.400", "#1a202c");
  const colorStatus = useColorModeValue("white", "gray.400");
  return (
    <Td>
      <Badge
        bg={bgStatus}
        color={colorStatus}
        fontSize="16px"
        p="3px 10px"
        borderRadius="8px"
      >
        {text}
      </Badge>
    </Td>
  );
};

export default BadgeCell;

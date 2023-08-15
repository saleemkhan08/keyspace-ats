import {
  Avatar,
  Badge,
  Button,
  Flex,
  Td,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

const TableCell = ({ type, data }) => {
  const textColor = useColorModeValue("gray.700", "white");
  const bgStatus = useColorModeValue("gray.400", "#1a202c");
  const colorStatus = useColorModeValue("white", "gray.400");

  switch (type) {
    case "avatar":
      return (
        <Td minWidth={{ sm: "250px" }} pl="0px">
          <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
            <Avatar src={data.logo} w="50px" borderRadius="12px" me="18px" />
            <Flex direction="column">
              <Text
                fontSize="md"
                color={textColor}
                fontWeight="bold"
                minWidth="100%"
              >
                {data.name}
              </Text>
              <Text fontSize="sm" color="gray.400" fontWeight="normal">
                {data.email}
              </Text>
            </Flex>
          </Flex>
        </Td>
      );
    case "domain":
      return (
        <Td>
          <Flex direction="column">
            <Text fontSize="md" color={textColor} fontWeight="bold">
              {data.domain}
            </Text>
            <Text fontSize="sm" color="gray.400" fontWeight="normal">
              {data.subdomain}
            </Text>
          </Flex>
        </Td>
      );
    case "status":
      return (
        <Td>
          <Badge
            bg={data.status === "Online" ? "green.400" : bgStatus}
            color={data.status === "Online" ? "white" : colorStatus}
            fontSize="16px"
            p="3px 10px"
            borderRadius="8px"
          >
            {data.status}
          </Badge>
        </Td>
      );
    case "date":
      return (
        <Td>
          <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
            {data.date}
          </Text>
        </Td>
      );
    case "edit":
      return (
        <Td>
          <Button p="0px" bg="transparent" variant="no-hover">
            <Text
              fontSize="md"
              color="gray.400"
              fontWeight="bold"
              cursor="pointer"
            >
              Edit
            </Text>
          </Button>
        </Td>
      );
    default:
      return null;
  }
};

export default TableCell;

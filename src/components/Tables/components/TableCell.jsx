import {
  Avatar,
  Badge,
  Button,
  Flex,
  Td,
  Text,
  useColorModeValue,
  AvatarGroup,
  Icon,
  Progress,
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
    case "logoWithName":
      return (
        <Td minWidth={{ sm: "250px" }} pl="0px">
          <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
            <Icon as={data.logo} h={"24px"} w={"24px"} pe="5px" />
            <Text
              fontSize="md"
              color={textColor}
              fontWeight="bold"
              minWidth="100%"
            >
              {data.name}
            </Text>
          </Flex>
        </Td>
      );

    case "members":
      return (
        <Td>
          <AvatarGroup size="sm">
            {data.members.map((member) => (
              <Avatar
                name="Ryan Florence"
                key={member}
                src={member}
                _hover={{ zIndex: "3", cursor: "pointer" }}
              />
            ))}
          </AvatarGroup>
        </Td>
      );

    case "budget":
      return (
        <Td>
          <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
            {data.budget}
          </Text>
        </Td>
      );

    case "progression":
      return (
        <Td>
          <Flex direction="column">
            <Text fontSize="md" color="teal.300" fontWeight="bold" pb=".2rem">
              {`${data.progression}%`}
            </Text>
            <Progress
              colorScheme={data.progression === 100 ? "teal" : "cyan"}
              size="xs"
              value={data.progression}
              borderRadius="15px"
            />
          </Flex>
        </Td>
      );

    // Other cases for other cell types...
    default:
      return <Td></Td>;
  }
};

export default TableCell;

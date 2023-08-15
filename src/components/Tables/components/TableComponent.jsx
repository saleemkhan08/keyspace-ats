import {
  Flex,
  //   Icon,
  Table,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import TableCell from "./TableCell"; // Adjust the path
import PropTypes from "prop-types";

const TableComponent = ({ config, data }) => {
  const { title, amount, columns } = config;
  const textColor = useColorModeValue("gray.700", "white");
  //   const IconComponent = require(`react-icons/${icon.split(".")[0]}`)[
  //     icon.split(".")[1]
  //   ];

  return (
    <Card p="16px" overflowX={{ sm: "scroll", xl: "hidden" }}>
      <CardHeader p="12px 0px 28px 0px">
        <Flex direction="column">
          <Text fontSize="lg" color={textColor} fontWeight="bold" pb=".5rem">
            {title}
          </Text>
          <Flex align="center">
            {/* <Icon as={IconComponent} color="teal.300" w={4} h={4} pe="3px" /> */}
            <Text fontSize="sm" color="gray.400" fontWeight="normal">
              <Text fontWeight="bold" as="span">
                {amount} done
              </Text>
              this month.
            </Text>
          </Flex>
        </Flex>
      </CardHeader>
      <Table variant="simple" color={textColor}>
        <Thead>
          <Tr my=".8rem" ps="0px">
            {columns.map((col, idx) => (
              <Th color="gray.400" key={idx} ps={idx === 0 ? "0px" : null}>
                {col.caption}
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {data.map((row, idx) => (
            <Tr key={idx}>
              {columns.map((col, colIdx) => {
                return <TableCell key={colIdx} type={col.type} data={row} />;
              })}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Card>
  );
};

TableComponent.propTypes = {
  config: PropTypes.object.isRequired,
  data: PropTypes.array.isRequired,
};

export default TableComponent;

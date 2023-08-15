// Chakra imports
import { Flex, Text, useColorModeValue } from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import TimelineRow from "components/Tables/TimelineRow";
import PropTypes from "prop-types";

const OrdersOverview = ({ title, amount, data }) => {
  const textColor = useColorModeValue("gray.700", "white");

  return (
    <Card maxH="100%">
      <CardHeader p="22px 0px 35px 14px">
        <Flex direction="column">
          <Text fontSize="lg" color={textColor} fontWeight="bold" pb=".5rem">
            {title}
          </Text>
          <Text fontSize="sm" color="gray.400" fontWeight="normal">
            <Text fontWeight="bold" as="span" color="teal.300">
              {`${amount}%`}
            </Text>{" "}
            this month.
          </Text>
        </Flex>
      </CardHeader>
      <CardBody ps="20px" pe="0px" mb="31px" position="relative">
        <Flex direction="column">
          {data.map((row, index, arr) => {
            return (
              <TimelineRow
                key={row.title}
                logo={row.logo}
                title={row.title}
                date={row.date}
                color={row.color}
                index={index}
                arrLength={arr.length}
              />
            );
          })}
        </Flex>
      </CardBody>
    </Card>
  );
};

OrdersOverview.propTypes = {
  title: PropTypes.string,
  amount: PropTypes.number,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      logo: PropTypes.string,
      title: PropTypes.string,
      date: PropTypes.string,
      color: PropTypes.string,
    })
  ),
};

export default OrdersOverview;

import { Td, Text, useColorModeValue } from "@chakra-ui/react";
import { getFormattedTime } from "utils/time";

const DateCell = ({ date, format = "DD MMM YYYY", alignment }) => {
  const textColor = useColorModeValue("gray.700", "white");
  return (
    <Td textAlign={alignment}>
      <Text
        fontSize="md"
        color={textColor}
        fontWeight="bold"
        pb=".5rem"
        textAlign={alignment}
      >
        {getFormattedTime(date, format)}
      </Text>
    </Td>
  );
};

export default DateCell;

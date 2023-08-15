import { Tr } from "@chakra-ui/react";
import TableCell from "./GenericTableCell";

const DashboardTableRow = (props) => {
  return (
    <Tr>
      <TableCell
        type="logoWithName"
        data={{ logo: props.logo, name: props.name }}
      />
      <TableCell type="members" data={{ members: props.members }} />
      <TableCell type="budget" data={{ budget: props.budget }} />
      <TableCell type="progression" data={{ progression: props.progression }} />
    </Tr>
  );
};

export default DashboardTableRow;

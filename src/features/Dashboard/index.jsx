// Chakra imports
import { Flex } from "@chakra-ui/react";

import { dashboardTableDataWithType } from "variables/general";

import { useEffect, useState } from "react";
import TableComponent from "components/Tables/components/TableComponent";
import { projectsTableConfig } from "components/Tables/projectsTableConfig";

import { getUsers } from "./services/userService";
import Authors from "./components/Authors";

export default function Dashboard() {
  const [users, setUsers] = useState();
  const [cursor, setCursor] = useState();
  const fetchUsers = async () => {
    const { list, lastDoc } = await getUsers({
      collectionName: "users",
      sortField: "email",
      sortDirection: "asc",
      pageSize: 100,
      lastDoc: cursor,
    });
    setUsers(list);
    setCursor(lastDoc);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  console.log("Users : ", { users });
  
  return (
    <Flex flexDirection="column" pt={{ base: "120px", md: "75px" }}>
      <Authors
        title="Users"
        captions={[
          "User",
          "PhoneNumber",
          "Designation",
          "Manager Email",
          "Team",
          "DOB",
          "Role",
        ]}
        data={users}
      />
      <TableComponent
        config={projectsTableConfig}
        data={dashboardTableDataWithType}
      />
    </Flex>
  );
}

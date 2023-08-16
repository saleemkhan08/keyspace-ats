// Chakra imports
import { Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import { getUsers } from "./services/userService";
import UsersTable from "./components/UsersTable";

export default function Dashboard() {
  // TODO move users to redux state
  const [users, setUsers] = useState();
  // TODO move users to redux state
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
    // TODO Reload when paginated or sorted of searched
    fetchUsers();
  }, []);

  console.log("Users : ", { users });
  // TODO add search functionality
  // TODO add pagination
  // TODO add sorting
  // TODO add more UI elements to Dashboard
  // TODO add total count
  return (
    <Flex flexDirection="column" pt={{ base: "120px", md: "75px" }}>
      <UsersTable data={users} />
    </Flex>
  );
}

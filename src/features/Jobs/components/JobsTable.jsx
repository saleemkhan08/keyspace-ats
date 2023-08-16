import DualTextCell from "components/Tables/components/DualTextCell";
import DateCell from "components/Tables/components/DateCell";
import TableComponent from "components/Tables/components/TableComponent";
import { UserCell } from "components/Tables/components/UserCell";

const usersTableConfig = [
  {
    name: "Users",
    id: "name",
    component: (data) => (
      <UserCell email={data.email} name={data.name} photoUrl={data.photoUrl} />
    ),
  },
  {
    name: "Date of Birth",
    id: "dateOfBirth",
    component: (data) => <DateCell date={data.dateOfBirth} />,
  },
  {
    name: "Designation",
    id: "designation",
    component: (data) => (
      <DualTextCell title={data.designation} subTitle={data.team} />
    ),
  },
  {
    name: "Manager",
    id: "managerName",
    component: (data) => (
      // <DualTextCell title={data.managerName} subTitle={data.managerEmail} />
      <DualTextCell title={data.managerEmail} />
    ),
  },
];

const UsersTable = ({ data }) => {
  return (
    <TableComponent
      title="Users"
      hideTitle
      config={usersTableConfig}
      data={data}
    />
  );
};

export default UsersTable;

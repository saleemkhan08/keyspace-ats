import TableComponent from "components/Tables/components/TableComponent";

const sample = {
  phoneNumber: "9800003646",
  email: "jane.smith2@example.com",
  dateOfBirth: "02/03/99",
  roles: ["manager"],
  workFromHome: "3",
  resetPasswordRequired: true,
  team: "Team B",
  sickLeaves: "4",
  name: "Jane Smith",
  optionalLeaves: "6",
  photoUrl: null,
  uid: "zu4HKfJHCAN7jrktpH6vIinx5XF2",
  managerEmail: "Robert Brown",
  casualLeave: "8",
  designation: "Manager",
};

const userTableConfig = {
  title: "Your Projects",
  amount: 5,
  icon: "IoCheckmarkDoneCircleSharp",
  columns: [
    {
      caption: "Logo & Name",
      type: "logoWithName",
    },
    {
      caption: "Members",
      type: "members",
    },
    {
      caption: "Budget",
      type: "budget",
    },
    {
      caption: "Progression",
      type: "progression",
    },
  ],
};

const UsersTable = () => {
  return <TableComponent config={} data={dashboardTableDataWithType} />;
};

export default UsersTable;

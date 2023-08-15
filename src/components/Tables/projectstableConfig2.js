const projectsTableConfig = {
  headers: [
    { label: "Project" },
    { label: "Team" },
    { label: "Budget" },
    { label: "Progress" },
  ],
  cells: [
    { type: "logoWithName", field: "logoWithName" },
    { type: "members", field: "members" },
    { type: "budget", field: "budget" },
    { type: "progression", field: "progression" },
  ],
};

export default projectsTableConfig;

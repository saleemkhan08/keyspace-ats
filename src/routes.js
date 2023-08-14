import { LogoutIcon } from "components/Icons/Icons";
import {
  HomeIcon,
  StatsIcon,
  CreditIcon,
  PersonIcon,
  DocumentIcon,
} from "components/Icons/Icons";

var dashRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: <HomeIcon color="inherit" />,
    layout: "/accounts",
  },
  {
    path: "/job-openings",
    name: "Job Openings",
    icon: <DocumentIcon color="inherit" />,
    layout: "/accounts",
  },
  {
    path: "/leaves",
    name: "Leaves",
    icon: <CreditIcon color="inherit" />,
    layout: "/accounts",
  },
  {
    name: "ACCOUNT PAGES",
    category: "account",
    state: "pageCollapse",
    views: [
      {
        path: "/profile",
        name: "Profile",
        icon: <PersonIcon color="inherit" />,
        secondaryNavbar: true,
        layout: "/accounts",
      },
      {
        name: "Sign Out",
        icon: <LogoutIcon color="inherit" />,
      },
    ],
  },
];
export default dashRoutes;

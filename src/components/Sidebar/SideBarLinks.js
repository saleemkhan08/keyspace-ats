

// chakra imports
import { Button, Flex, Icon, Text, useColorModeValue } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import IconBox from "components/Icons/IconBox";
import { NavLink } from "react-router-dom";
import { signOut, getAuth } from "firebase/auth";
import {
  LogoutIcon,
  HomeIcon,
  TimeOffIcon,
  JobsIcon,
  PersonIcon,
} from "components/Icons/Icons";

const CategoryTitle = ({ title }) => {
  const activeColor = useColorModeValue("gray.700", "white");
  return (
    <Text
      color={activeColor}
      fontWeight="bold"
      mb={{
        xl: "12px",
      }}
      mx="auto"
      ps={{
        sm: "10px",
        xl: "16px",
      }}
      py="12px"
    >
      {title}
    </Text>
  );
};

const SideBarButton = ({ isActive, icon, title, onClick }) => {
  // Chakra Color Mode
  const activeBg = useColorModeValue("white", "gray.700");
  const inactiveBg = useColorModeValue("white", "gray.700");
  const activeColor = useColorModeValue("gray.700", "white");
  const inactiveColor = useColorModeValue("gray.400", "gray.400");
  return (
    <Button
      boxSize="initial"
      justifyContent="flex-start"
      alignItems="center"
      bg={isActive ? activeBg : "transparent"}
      mb={{
        xl: "12px",
      }}
      mx={{
        xl: "auto",
      }}
      ps={{
        sm: "10px",
        xl: "16px",
      }}
      py="12px"
      borderRadius="15px"
      _hover="none"
      w="100%"
      _active={{
        bg: "inherit",
        transform: "none",
        borderColor: "transparent",
      }}
      _focus={{
        boxShadow: "none",
      }}
      onClick={onClick}
    >
      <Flex>
        {typeof icon === "string" ? (
          <Icon>{icon}</Icon>
        ) : (
          <IconBox
            bg={isActive ? "teal.300" : inactiveBg}
            color={isActive ? "white" : "teal.300"}
            h="30px"
            w="30px"
            me="12px"
          >
            {icon}
          </IconBox>
        )}
        <Text
          color={isActive ? activeColor : inactiveColor}
          my="auto"
          fontSize="sm"
        >
          {title}
        </Text>
      </Flex>
    </Button>
  );
};

export const SideBarLinks = () => {
  const location = useLocation();
  const handleLogout = () => {
    signOut(getAuth());
  };
  return (
    <>
      <NavLink to="/accounts">
        <SideBarButton
          isActive={location.pathname === "/accounts"}
          icon={<HomeIcon color="inherit" />}
          title="Dashboard"
        />
      </NavLink>
      <NavLink to="/accounts/jobs">
        <SideBarButton
          isActive={location.pathname === "/accounts/jobs"}
          icon={<JobsIcon color="inherit" />}
          title="Jobs"
        />
      </NavLink>
      <NavLink to="/accounts/leaves">
        <SideBarButton
          isActive={location.pathname === "/accounts/leaves"}
          icon={<TimeOffIcon color="inherit" />}
          title="Leaves"
        />
      </NavLink>
      <div>
        <CategoryTitle title="ACCOUNT PAGES" />
        <NavLink to="/accounts/profile">
          <SideBarButton
            isActive={location.pathname === "/accounts/profile"}
            icon={<PersonIcon color="inherit" />}
            title="Profile"
          />
        </NavLink>
        <SideBarButton
          icon={<LogoutIcon color="inherit" />}
          title="Sign Out"
          onClick={handleLogout}
        />
      </div>
    </>
  );
};

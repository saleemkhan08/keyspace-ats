// chakra imports
import { Box, Link, Stack, Text } from "@chakra-ui/react";
import { KeySpaceLogo } from "components/Icons/Icons";
import { Separator } from "components/Separator/Separator";
import React from "react";
import { SideBarLinks } from "./SideBarLinks";

const SidebarContent = ({ logoText, routes }) => {
  return (
    <>
      <Box mb="15px">
        <Link
          href={`${process.env.PUBLIC_URL}/#/`}
          target="_blank"
          display="flex"
          lineHeight="100%"
          mb="10px"
          fontWeight="bold"
          justifyContent="center"
          alignItems="center"
          fontSize="11px"
        >
          <KeySpaceLogo w="48px" h="48px" me="10px" mt="24px" />
          <Text fontSize="sm" mt="3px">
            {logoText}
          </Text>
        </Link>
        <Separator></Separator>
      </Box>
      <Stack direction="column" mb="40px">
        <Box>
          <SideBarLinks routes={routes} />
        </Box>
      </Stack>
    </>
  );
};

export default SidebarContent;

import React, { useState } from "react";
import {
  AppShell,
  NavLink,
  ScrollArea,
  Button,
  Center,
  Text,
  useMantineColorScheme,
  useComputedColorScheme,
  Avatar,
  Image,
  Flex,
  Drawer,
} from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import {
  IconSettings,
  IconDetails,
  IconHome,
  IconPower,
  IconLayoutKanban,
  IconMapPin,
  IconUsersGroup,
  IconArrowBarRight,
} from "@tabler/icons-react";
import { getTextColor } from "../utils";

export const NavbarLmas = ({ Onlogout, back }) => {
  const navigate = useNavigate();
  const isLargeScreen = useMediaQuery("(min-width:800px");
  const computedColorScheme = useComputedColorScheme("light");
  const { colorScheme } = useMantineColorScheme();
  const [opened, setOpened] = useState(false);
  const handleLogoutClick = () => {
    Onlogout();
  };
  const toggleDrawer = () => {
    setOpened((prevOpened) => !prevOpened);
  };

  return (
    <>
      {isLargeScreen ? (
        <>
          <AppShell.Navbar>
            <AppShell.Section mt="lg">
              {" "}
              <Image
                height="100%"
                // width="0"
                src="../../src/assets/ManavLogo2021.png"
              />{" "}
            </AppShell.Section>
            <AppShell.Section
              component={ScrollArea}
              my="md"
              scrollbars="y"
              mt="xl"
            >
              <NavLink
                key="Home"
                className={`NavLink-custom ${
                  colorScheme === "light" ? "light" : "dark"
                }`}
                label={
                  <div style={{ textAlign: "center" }}>
                    <IconHome
                      width={20}
                      height={20}
                      style={{ marginBottom: "5px" }}
                    />
                    <Text
                      size="sm"
                      style={{ lineHeight: "1", fontSize: "0.8em" }}
                    >
                      Home
                    </Text>
                  </div>
                }
                onClick={() => navigate("../")}
              />
              <NavLink
                key="Detials"
                className={`NavLink-custom ${
                  colorScheme === "light" ? "light" : "dark"
                }`}
                label={
                  <div style={{ textAlign: "center" }}>
                    <IconDetails
                      width={20}
                      height={20}
                      style={{ marginBottom: "5px" }}
                    />
                    <Text
                      size="sm"
                      style={{ lineHeight: "1", fontSize: "0.8em" }}
                    >
                      Details
                    </Text>
                  </div>
                }
                onClick={() => navigate("../calendar")}
              />
            </AppShell.Section>
            <div style={{ position: "absolute", bottom: 30, width: "100%" }}>
              <AppShell.Section mt="xl">
                <Center>
                  <Avatar
                    color="teal"
                    radius="xl"
                    mt="xl"
                    onClick={() => navigate("../settings")}
                  >
                    Name
                  </Avatar>
                </Center>
                <Center mt="xl">
                  <Button
                    variant="light"
                    color="red"
                    size="compact-md"
                    onClick={handleLogoutClick}
                    style={{ cursor: "pointer" }}
                  >
                    <IconPower stroke={2} />
                  </Button>
                </Center>
              </AppShell.Section>
            </div>
          </AppShell.Navbar>
        </>
      ) : (
        <>
          <AppShell.Navbar>
            <IconArrowBarRight
              onClick={toggleDrawer}
              style={{ color: getTextColor(back) }}
            />
            <Drawer
              opened={opened}
              onClose={toggleDrawer}
              position="right"
              padding="md"
              style={{ marginTop: 64 }}
            >
              <AppShell.Section
                component={ScrollArea}
                my="md"
                scrollbars="y"
                mt="xl"
              >
                <NavLink
                  key="Home"
                  className={`NavLink-custom ${
                    colorScheme === "light" ? "light" : "dark"
                  }`}
                  label={
                    <div style={{ textAlign: "center" }}>
                      <IconHome
                        width={20}
                        height={20}
                        style={{ marginBottom: "5px" }}
                      />
                      <Text
                        size="sm"
                        style={{ lineHeight: "1", fontSize: "0.8em" }}
                      >
                        Home
                      </Text>
                    </div>
                  }
                  onClick={() => {
                    navigate("../");
                    toggleDrawer();
                  }}
                />
                <NavLink
                  key="Detials"
                  className={`NavLink-custom ${
                    colorScheme === "light" ? "light" : "dark"
                  }`}
                  label={
                    <div style={{ textAlign: "center" }}>
                      <IconDetails
                        width={20}
                        height={20}
                        style={{ marginBottom: "5px" }}
                      />
                      <Text
                        size="sm"
                        style={{ lineHeight: "1", fontSize: "0.8em" }}
                      >
                        Details
                      </Text>
                    </div>
                  }
                  onClick={() => {
                    navigate("../calendar");
                    toggleDrawer();
                  }}
                />
              </AppShell.Section>

              <AppShell.Section mt="xl">
                <Center>
                  <Avatar
                    color="teal"
                    radius="xl"
                    mt="xl"
                    onClick={() => {
                      navigate("../settings");
                      toggleDrawer();
                    }}
                  >
                    Name
                  </Avatar>
                </Center>
                <Center mt="xl">
                  <Button
                    variant="light"
                    color="red"
                    size="compact-md"
                    onClick={handleLogoutClick}
                    style={{ cursor: "pointer" }}
                  >
                    <IconPower stroke={2} />
                  </Button>
                </Center>
              </AppShell.Section>
            </Drawer>
          </AppShell.Navbar>
        </>
      )}
    </>
  );
};

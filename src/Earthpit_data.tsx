import React from "react";
import { Tabs, Text, rem } from "@mantine/core";
import {
  IconPhoto,
  IconMessageCircle,
  IconSettings,
} from "@tabler/icons-react";
import { getTextColor } from "./components/utils";

const Earthpit_data = ({ back }) => {
  const iconStyle = { width: rem(12), height: rem(12) };
  return (
    <div>
      <Tabs defaultValue="entry">
        <Tabs.List>
          <Tabs.Tab
            value="entry"
            leftSection={<IconPhoto style={iconStyle} />}
            c={getTextColor(back)}
          >
            Device Entry
          </Tabs.Tab>
          <Tabs.Tab
            value="details"
            leftSection={<IconMessageCircle style={iconStyle} />}
            c={getTextColor(back)}
          >
            Device Details
          </Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel pt="xs" value="entry">
          <Text>Hellow </Text>
        </Tabs.Panel>
        <Tabs.Panel pt="xs" value="details">
          <Text>Hellow </Text>
        </Tabs.Panel>
      </Tabs>
    </div>
  );
};

export default Earthpit_data;

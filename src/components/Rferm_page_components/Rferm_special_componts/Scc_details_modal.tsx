import { Normal_fault } from "../../testingData/Normal_fault";
import { Button, Card, Group, Text, Title } from "@mantine/core";
import Grid_resistance_chart from "./Grid_resistance_chart";
import { useState } from "react";
import { DateInput } from "@mantine/dates";

const Scc_details_modal = ({ macid }: { macid: string | null }) => {
  const {
    current_status,
    latest_reading,
    pit_name,
    normal_resistance,
    fault_resistance,
  } = Normal_fault[0];
  const [value, setValue] = useState<Date | null>(null);
  const handleToggleClick = () => {
    alert("Filter clicked");
  };
  console.log("mac_id", macid);
  return (
    <>
      <Title order={2} ta="center" td="underline">
        Details:
      </Title>
      <Card p="xl" mt="xl">
        <Card.Section>
          <Group justify="space-between">
            <Title order={3}>Pit Name : {pit_name}</Title>
            <Title order={3}>Current Status: {current_status}</Title>
            <Title order={3}>Latest Reading: {latest_reading} Ω</Title>
          </Group>
        </Card.Section>
        <Group justify="center" ml="xl" mt="lg">
          <DateInput
            valueFormat="DD/MM/YYYY "
            label="From:"
            placeholder="From"
            value={value}
            onChange={setValue}
          />
          <Text mt="lg">To</Text>
          <DateInput
            valueFormat="DD/MM/YYYY "
            label="To:"
            placeholder="Date"
            value={value}
            onChange={setValue}
          />
          <Button mt="lg" onClick={handleToggleClick}>
            Select
          </Button>
        </Group>
        <Card.Section mt="xl">
          <Title order={3} ta="center" td="underline" mb="xl">
            Normal Reading
          </Title>
          <Grid_resistance_chart data={normal_resistance} color="#2E93fA" />
        </Card.Section>
        <Card.Section mt="xl">
          <Title order={3} ta="center" td="underline" mb="xl">
            Fault Reading
          </Title>
          <Grid_resistance_chart data={fault_resistance} color="#E91E63" />
        </Card.Section>
      </Card>
    </>
  );
};

export default Scc_details_modal;

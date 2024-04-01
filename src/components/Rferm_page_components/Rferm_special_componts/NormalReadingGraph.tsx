import { Normal_reading } from "../../testingData/Normal_reading";
import { Card, Group, Title } from "@mantine/core";
import Grid_resistance_chart from "./Grid_resistance_chart";

const NormalReadingGraph = ({ macid }: { macid: string | null }) => {
  console.log("normal Reading", macid);
  const { current_status, latest_reading, pit_name, resistance } =
    Normal_reading[0];
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
        <Card.Section mt="xl">
          <Grid_resistance_chart data={resistance} color="#E91E63" />
        </Card.Section>
      </Card>
    </>
  );
};

export default NormalReadingGraph;

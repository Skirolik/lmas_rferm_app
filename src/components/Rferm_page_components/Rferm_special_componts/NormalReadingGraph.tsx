import { Normal_reading } from "../../testingData/Normal_reading";
import { Card, Grid, Group, Title } from "@mantine/core";
import Grid_resistance_chart from "./Grid_resistance_chart";
import Legned from "./Legned";

const NormalReadingGraph = ({ macid }: { macid: string | null }) => {
  console.log("normal Reading", macid);
  const { current_status, latest_reading, pit_name, resistance } =
    Normal_reading[0];
  return (
    <>
      <Title order={2} ta="center" td="underline">
        Details:
      </Title>
      <Grid mt="xl" mb="xl">
        <Grid.Col span={{ span: 12, md: 0.5, lg: 0.5 }}></Grid.Col>
        <Grid.Col span={{ span: 12, md: 11, lg: 11 }}>
          <Card p="xl" mt="xl" withBorder radius="lg" shadow="xl">
            <Card.Section>
              <Group justify="space-between">
                <Title order={3}>Pit Name : {pit_name}</Title>
                <Title order={3}>Current Status: {current_status}</Title>
                <Title order={3}>Latest Reading: {latest_reading} Ω</Title>
              </Group>
            </Card.Section>
            <Card.Section mt="xl">
              <Grid_resistance_chart data={resistance} color="#3A99FA" />
            </Card.Section>
            <Card.Section>
              <Legned />
            </Card.Section>
          </Card>
        </Grid.Col>
        <Grid.Col span={{ span: 12, md: 0.5, lg: 0.5 }}></Grid.Col>
      </Grid>
    </>
  );
};

export default NormalReadingGraph;

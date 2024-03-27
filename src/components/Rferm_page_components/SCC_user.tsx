import RfermCards from "./Rferm_special_componts/RfermCards";
import { Card, Grid, Text } from "@mantine/core";

import "@mantine/charts/styles.css";
import RecentActivity from "./Rferm_special_componts/RecentActivity";
import PercentageCalculator from "./Rferm_special_componts/PercentageCalculator";
import { Map_data } from "../testingData/Map_data";
import { Rferm_map } from "./Rferm_special_componts/Rferm_map";

interface RfermSccHomeData {
  danger_count: number;
  unhealthy_count: number;
  healthy: number;
  total: number;
  first_R_a: { date: string; status: string; area: string };
  second_R_a: { date: string; status: string; area: string };
  third_R_a: { date: string; status: string; area: string };
  fourth_R_a: { date: string; status: string; area: string };
  fifth_R_a: { date: string; status: string; area: string };
  sixth_R_a: { date: string; status: string; area: string };
  seventh_R_a: { date: string; status: string; area: string };
  eight_R_a: { date: string; status: string; area: string };
  nineth_R_a: { date: string; status: string; area: string };
  tenth_R_a: { date: string; status: string; area: string };
  Grid_resistance: { Date: string; value: number }[];
}

interface SccProps {
  data: RfermSccHomeData[];
  back: string;
}

const SCC_user: React.FC<SccProps> = ({ data }) => {
  const { danger_count, unhealthy_count, healthy, total } = data[0];

  const totalData = [
    {
      title: "Danger",
      value: danger_count,
      description: "PCC's",
    },
    {
      title: "Un-Healthy",
      value: unhealthy_count,
      description: "PCC's ",
    },
    {
      title: "Healthy",
      value: healthy,
      description: "PCC's",
    },
    {
      title: "Total PCC's",
      value: total,
      description: "PCC ",
    },
  ];

  return (
    <>
      <Grid mt="xl">
        <Grid.Col span={{ base: 12, md: 1, lg: 1 }}></Grid.Col>
        <Grid.Col span={{ base: 12, md: 10, lg: 10 }}>
          <RfermCards data={totalData} />
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 1, lg: 1 }}></Grid.Col>
      </Grid>
      <Grid mt="xl">
        <Grid.Col span={{ base: 12, md: 1, lg: 1 }}></Grid.Col>
        <Grid.Col span={{ base: 12, md: 5, lg: 5 }}>
          <Card withBorder radius="lg">
            <Text ta="center" size="xl" fw={800}>
              Recent Activity
            </Text>
            <RecentActivity data={data} />
          </Card>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 5, lg: 5 }}>
          <Card withBorder radius="lg" shadow="lg">
            <Text ta="center" size="xl" fw={800}>
              Recent Activity
            </Text>
            <PercentageCalculator
              dangerCount={danger_count}
              unhealthyCount={unhealthy_count}
              healthyCount={healthy}
              totalCount={total}
            />
          </Card>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 1, lg: 1 }}></Grid.Col>
      </Grid>
      <Grid mt="xl" mb="xl">
        <Grid.Col span={{ base: 12, md: 1, lg: 1 }}></Grid.Col>
        <Grid.Col span={{ base: 12, md: 10, lg: 10 }}>
          <Card>
            <Rferm_map data={Map_data} />
          </Card>
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 1, lg: 1 }}></Grid.Col>
      </Grid>
    </>
  );
};

export default SCC_user;

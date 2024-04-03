import { Card, Grid, Title } from "@mantine/core";
import React, { useEffect, useState } from "react";
import DetailsMap from "../components/Rferm_page_components/Rferm_special_componts/DetailsMap";
import { Map_data } from "../components/testingData/Map_data";
import { Details_page } from "../components/testingData/Details_page";
import Detials_table from "../components/Rferm_page_components/Rferm_special_componts/Detials_table";

import Rferm_SCC_cards from "../components/Rferm_page_components/Rferm_special_componts/Rferm_SCC_cards";
import { getTextColor } from "../components/utils";

const SCC_details: React.FC<{ back: string }> = ({ back }) => {
  const [selectedMacId, setSelectedMacId] = useState<string | null>(null);

  const {
    danger_count,
    unhealthy_count,
    healthy,
    total,
    danger_data,
    healthy_data,
    unhealthy_data,
  } = Details_page[0];

  const totalData = [
    {
      title: "Danger",
      value: danger_count,
      description: "Pits",
    },
    {
      title: "Un-Healthy",
      value: unhealthy_count,
      description: "Pits ",
    },
    {
      title: "Healthy",
      value: healthy,
      description: "Pits ",
    },
    {
      title: "Total Pits",
      value: total,
      description: "Total ",
    },
  ];

  useEffect(() => {
    // Retrieve selectedMacId from local storage when the component mounts
    const storedMacId = localStorage.getItem("selectedMacId");
    if (storedMacId) {
      setSelectedMacId(storedMacId);
      // Optional: Clear the storedMacId from local storage after retrieving it
      // localStorage.removeItem('selectedMacId');
    }
  }, []);

  const handlePinClick = (macId: string) => {
    setSelectedMacId(macId);
    // Store selectedMacId in local storage
    localStorage.setItem("selectedMacId", macId);
  };

  return (
    <>
      <Grid mt="xl">
        <Grid.Col span={{ base: 12, md: 1, lg: 1 }}></Grid.Col>
        <Grid.Col span={{ base: 12, md: 5, lg: 5 }}>
          <Card withBorder radius="lg" shadow="xl">
            <DetailsMap data={Map_data} onPinClick={handlePinClick} />
          </Card>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 5, lg: 5 }}>
          <Title order={2} mb="xl" c={getTextColor(back)} ta="center">
            Data for PCC: {selectedMacId || "Please click on a pin"}
          </Title>
          {selectedMacId && <Rferm_SCC_cards data={totalData} />}
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 1, lg: 1 }}></Grid.Col>
      </Grid>
      {selectedMacId && (
        <>
          <Grid mt="xl">
            <Grid.Col span={{ base: 12, md: 1, lg: 1 }}></Grid.Col>
            <Grid.Col span={{ base: 12, md: 10, lg: 10 }}>
              <Card withBorder radius="lg" shadow="xl">
                <Title order={4} td="underline" mb="xl" mt="lg">
                  Danger Pit Data:
                </Title>
                <Detials_table data={danger_data} />
              </Card>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 1, lg: 1 }}></Grid.Col>
          </Grid>
          <Grid>
            <Grid.Col span={{ base: 12, md: 1, lg: 1 }}></Grid.Col>
            <Grid.Col span={{ base: 12, md: 10, lg: 10 }}>
              <Card withBorder radius="lg" shadow="xl">
                <Title order={4} td="underline" mb="xl" mt="lg">
                  Unhealthy Pit Data:
                </Title>
                <Detials_table data={unhealthy_data} />
              </Card>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 1, lg: 1 }}></Grid.Col>
          </Grid>
          <Grid>
            <Grid.Col span={{ base: 12, md: 1, lg: 1 }}></Grid.Col>
            <Grid.Col span={{ base: 12, md: 10, lg: 10 }}>
              <Card withBorder radius="lg" shadow="xl">
                <Title order={4} td="underline" mb="xl" mt="lg">
                  Healthy Pit Data:
                </Title>
                <Detials_table data={healthy_data} />
              </Card>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 1, lg: 1 }}></Grid.Col>
          </Grid>
        </>
      )}
    </>
  );
};

export default SCC_details;

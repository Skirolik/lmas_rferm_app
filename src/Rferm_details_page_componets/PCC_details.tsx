import {
  Badge,
  Card,
  Flex,
  Grid,
  Group,
  SimpleGrid,
  Text,
  Title,
} from "@mantine/core";
import React from "react";
import { Details } from "../components/testingData/Details";
import PitCard from "../components/Rferm_page_components/Rferm_special_componts/PitCard";

const PCC_details = () => {
  const totalPitsString = localStorage.getItem("totalpits");

  // Convert the string value to a number
  const totalPits = totalPitsString ? parseInt(totalPitsString, 10) : 0;

  return (
    <>
      <Grid mt="xl">
        <Grid.Col span={{ bas: 12, md: 1, lg: 1 }}></Grid.Col>
        <Grid.Col span={{ bas: 12, md: 10, lg: 10 }}>
          <SimpleGrid cols={{ base: 1, xs: 2, md: 4 }} spacing="xs">
            {Details.slice(0, totalPits).map((pitData, index) => (
              <PitCard key={index} pitData={pitData} />
            ))}
          </SimpleGrid>
        </Grid.Col>
        <Grid.Col span={{ bas: 12, md: 1, lg: 1 }}></Grid.Col>
      </Grid>
    </>
  );
};

export default PCC_details;

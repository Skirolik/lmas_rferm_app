import { Card, Grid } from "@mantine/core";
import React, { useEffect, useState } from "react";
import DetailsMap from "../components/Rferm_page_components/Rferm_special_componts/DetailsMap";
import { Map_data } from "../components/testingData/Map_data";

const SCC_details = () => {
  const [selectedMacId, setSelectedMacId] = useState<string | null>(null);

  useEffect(() => {
    // Retrieve selectedMacId from local storage when the component mounts
    const storedMacId = localStorage.getItem("selectedMacId");
    if (storedMacId) {
      setSelectedMacId(storedMacId);
      // Optional: Clear the storedMacId from local storage after retrieving it
      // localStorage.removeItem('selectedMacId');
    }
  }, [selectedMacId]);

  const handlePinClick = (macId: string) => {
    setSelectedMacId(macId);
  };
  return (
    <>
      <Grid>
        <Grid.Col span={{ base: 12, md: 1, lg: 1 }}></Grid.Col>
        <Grid.Col span={{ base: 12, md: 5, lg: 5 }}>
          <Card>
            <DetailsMap data={Map_data} onPinClick={handlePinClick} />
          </Card>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 5, lg: 5 }} bg="pink"></Grid.Col>
        <Grid.Col span={{ base: 12, md: 1, lg: 1 }}></Grid.Col>
      </Grid>
      <h1>Details Page</h1>
      <p>Selected Mac ID: {selectedMacId}</p>
    </>
  );
};

export default SCC_details;

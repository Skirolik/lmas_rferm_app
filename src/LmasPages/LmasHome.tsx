import React, { useState } from "react";
import { getTextColor } from "../components/utils";
import useWebsocket from "../components/customhooks/useWebsocket";
import { Card, Grid, Text } from "@mantine/core";
import Progress_bar from "../components/Lmas_components/Progress_bar";
import Field_values from "../components/Lmas_components/Field_values";
import CommonCards from "../components/Lmas_components/Common_cards";
import useVariablecount from "../components/customhooks/useVariablecount";

const LmasHome = ({ back }) => {
  const [email, setEmail] = useState("admin");
  const { data, chartData } = useWebsocket(email);
  const username = localStorage.getItem("user");

  // console.log("data in home page", data);

  const transformedData = chartData
    .map((row) => ({
      x: row[4],
      y: Number(row[13]),
    }))
    .reverse();

  const diaDataElectroStatic = chartData
    .map((row) => ({
      x: row[4],
      y: row[5],
    }))
    .reverse();

  const diaDataSpark = chartData
    .map((row) => ({
      x: row[4],
      y: row[6],
    }))
    .reverse();

  const diaDataEnvironment = chartData
    .map((row) => ({
      x: row[4],
      y: row[7],
    }))
    .reverse();

  const transformerData = data.map((row) => ({
    x: row[4],
    y: Number(row[13]),
  }));

  const mapData = chartData.map((row) => ({
    x: Number(row[2]),
    y: Number(row[3]),
    z: Number(row[13]),
  }));

  const staticData = data.map((row) => ({
    x: row[4],
    y: row[5],
  }));
  const sparkData = data.map((row) => ({
    x: row[4],
    y: row[6],
  }));
  const envData = data.map((row) => ({
    x: row[4],
    y: row[7],
  }));
  const temp = data.map((row) => ({
    x: row[4],
    y: Number(row[14]),
  }));
  const pressure = data.map((row) => ({
    x: row[4],
    y: Number(row[15]),
  }));
  const humidity = data.map((row) => ({
    x: row[4],
    y: Number(row[16]),
  }));
  const calenderData = data.map((row) => ({
    x: row[4],
    y: Number(row[13]),
  }));

  // console.log("Static data", staticData);
  console.log("Count", transformerData);
  // // console.log("spark data", sparkData);
  // // console.log("Battey", transformerData);
  // // console.log("weather", envData);

  const { totalCount, progress } = useVariablecount({
    data: staticData,
  });

  const totalCounts = [
    {
      title: "Static Data",
      value: useVariablecount({ data: staticData }).totalCount,
      description: "Count of Static",
    },
    {
      title: "Count",
      value: useVariablecount({ data: transformerData }).totalCount,
      description: "Total Count",
    },
    {
      title: "Spark Count",
      value: useVariablecount({ data: sparkData }).totalCount,
      description: "Spark Count",
    },
    {
      title: "Weather",
      value: useVariablecount({ data: envData }).totalCount,
      description: "Environmental Count",
    },
    {
      title: "Battery",
      value: useVariablecount({ data: envData }).totalCount,
      description: "Battery value",
    },
  ];

  console.log("Total counts", totalCounts);

  return (
    <>
      <Text ta="center" fw={800} fz="xl" td="underline" c={getTextColor(back)}>
        {" "}
        Welcome,{username || "Guest"}
      </Text>
      <Grid mt="xl">
        <Grid.Col span={{ base: 12, md: 1, lg: 1 }}></Grid.Col>

        <Grid.Col span={{ base: 12, md: 10, lg: 10 }}>
          <Card shadow="xl" withBorder radius="lg">
            <Text fz="xl" ta="center" fw="bold" mb="lg" td="underline">
              Live Warning
            </Text>
            <Grid>
              <Grid.Col span={{ base: 12, md: 0.5, lg: 0.5 }}></Grid.Col>{" "}
              <Grid.Col span={{ base: 12, md: 11, lg: 5 }}>
                <Progress_bar
                  data={transformedData}
                  value={diaDataSpark}
                  env={diaDataEnvironment}
                  diac={diaDataElectroStatic}
                  temp={temp}
                  pressure={pressure}
                  humidity={humidity}
                />
              </Grid.Col>{" "}
              <Grid.Col span={{ base: 12, md: 0.5, lg: 0.5 }}></Grid.Col>
              <Grid.Col span={{ base: 12, md: 11, lg: 6 }}>
                <Field_values
                  data={diaDataElectroStatic}
                  color="yellow"
                  title="Electro-Static"
                />
                <Field_values data={diaDataSpark} color="green" title="Spark" />
                <Field_values
                  data={diaDataEnvironment}
                  color="blue"
                  title="Environment"
                />
              </Grid.Col>{" "}
              <Grid.Col span={{ base: 12, md: 5, lg: 0.5 }}></Grid.Col>{" "}
            </Grid>
          </Card>
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 1, lg: 1 }}></Grid.Col>
      </Grid>
      <Grid mt="xl">
        <Grid.Col span={{ base: 12, md: 1, lg: 1 }}></Grid.Col>

        <Grid.Col span={{ base: 12, md: 10, lg: 10 }}>
          <CommonCards data={totalCounts} />
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 1, lg: 1 }}></Grid.Col>
      </Grid>
    </>
  );
};

export default LmasHome;

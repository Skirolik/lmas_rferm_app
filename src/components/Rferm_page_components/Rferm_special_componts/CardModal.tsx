import React, { useState } from "react";
import { Normal_reading } from "../../testingData/Normal_reading";
import { reading_update } from "../../testingData/reading_update";
import Grid_resistance_chart from "./Grid_resistance_chart";
import {
  Button,
  Card,
  Flex,
  Group,
  Pagination,
  Table,
  Text,
  Title,
} from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { IconCloudDownload } from "@tabler/icons-react";
import { CSVLink } from "react-csv";
import Legned from "./Legned";
import Fault_chart from "./Fault_chart";

interface PitDeatails {
  pit_name: string;
  status: string;
  battery: number;
  latest: number;
  fault_count: number;
  ground_step: number;
  ground_touch: number;
  lightning_step: number;
  lightning_touch: number;
  mac_id: string;
}

interface CardProps {
  pitData: PitDeatails;
}

const CardModal: React.FC<CardProps> = ({ pitData }) => {
  const [showReadingUpdate, setShowReadingUpdate] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const { mac_id } = pitData;
  const { current_status, latest_reading, pit_name, resistance } =
    showReadingUpdate ? reading_update[0] : Normal_reading[0];
  const handleToggleClick = () => {
    setShowReadingUpdate((prev) => !prev);
  };

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const startIndex = (currentPage - 1) * itemsPerPage + 1;
  const endIndex = Math.min(currentPage * itemsPerPage, resistance.length);

  const paginatedData = resistance.slice(startIndex - 1, endIndex);

  const [value, setValue] = useState<Date | null>(null);

  console.log("mac_id:", mac_id);
  console.log("resitance value", resistance);
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
        <Card.Section>
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
        </Card.Section>
        <Card.Section mt="xl">
          <Title order={3} ta="center" td="underline" mb="xl">
            Normal Reading
          </Title>
          <Grid_resistance_chart data={resistance} color="#2E93fA" />
          <Legned />
        </Card.Section>
        <Card.Section mt="xl">
          <Title order={3} ta="center" td="underline" mb="xl">
            Fault Reading
          </Title>
          <Fault_chart data={resistance} color="#E91E63" />
        </Card.Section>
        <Card.Section mt="xl">
          <Title order={3} ta="center" td="underline" mb="xl">
            Normal Reading
          </Title>
          <Flex
            mih={50}
            gap="xl"
            justify="flex-start"
            align="flex-start"
            direction="row-reverse"
            wrap="nowrap"
          >
            <CSVLink data={resistance} filename={`${pit_name}_data.csv`}>
              <IconCloudDownload stroke={2} style={{ cursor: "pointer" }} />
            </CSVLink>
          </Flex>

          <Table striped highlightOnHover withTableBorder withColumnBorders>
            <Table.Thead>
              <Table.Tr>
                <Table.Th>Id</Table.Th>
                <Table.Th>Date</Table.Th>
                <Table.Th>Resistance</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {paginatedData.map((item, index) => (
                <Table.Tr key={index}>
                  <Table.Td>{startIndex + index}</Table.Td>
                  <Table.Td>{item.Date}</Table.Td>
                  <Table.Td>{item.value}</Table.Td>
                </Table.Tr>
              ))}
            </Table.Tbody>
          </Table>
        </Card.Section>
        <Pagination
          mt="lg"
          value={currentPage}
          onChange={handlePageChange}
          total={Math.ceil(resistance.length / itemsPerPage)}
        />
      </Card>
    </>
  );
};

export default CardModal;

import { Normal_fault } from "../../testingData/Normal_fault";
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
import Grid_resistance_chart from "./Grid_resistance_chart";
import { useState } from "react";
import { DateInput } from "@mantine/dates";
import { IconCloudDownload } from "@tabler/icons-react";
import { CSVLink } from "react-csv";

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

  const [currentPage, setCurrentPage] = useState(1);
  const [currentPageFault, setCurrentPageFault] = useState(1);
  const itemsPerPage = 10;
  const startIndex = (currentPage - 1) * itemsPerPage + 1;

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const endIndex = Math.min(
    currentPage * itemsPerPage,
    normal_resistance.length
  );

  const paginatedData = normal_resistance.slice(startIndex - 1, endIndex);

  const handleFaultPageChange = (newPages: number) => {
    setCurrentPageFault(newPages);
  };

  const endIndexFault = Math.min(
    currentPageFault * itemsPerPage,
    fault_resistance.length
  );

  const paginatedDataFault = fault_resistance.slice(
    startIndex - 1,
    endIndexFault
  );

  console.log("macid", macid);
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
            <CSVLink data={normal_resistance} filename={`${pit_name}_data.csv`}>
              <IconCloudDownload stroke={2} style={{ cursor: "pointer" }} />
            </CSVLink>
          </Flex>
          <Table striped highlightOnHover withTableBorder withColumnBorders>
            <Table.Thead>
              <Table.Th>Sr</Table.Th>
              <Table.Th>Date & Time</Table.Th>
              <Table.Th>Resistance Ω</Table.Th>
            </Table.Thead>
            <Table.Tbody>
              {paginatedData.map((item, index) => (
                <Table.Tr key={index}>
                  <Table.Td>{startIndex + index}</Table.Td>
                  <Table.Td>{item.Date}</Table.Td>
                  <Table.Td>{item.value} </Table.Td>
                </Table.Tr>
              ))}
            </Table.Tbody>
          </Table>
        </Card.Section>
        <Pagination
          mt="lg"
          value={currentPage}
          onChange={handlePageChange}
          total={Math.ceil(normal_resistance.length / itemsPerPage)}
        />
        <Card.Section mt="xl">
          <Title order={3} ta="center" td="underline" mb="xl">
            Fault Reading
          </Title>
          <Flex
            mih={50}
            gap="xl"
            justify="flex-start"
            align="flex-start"
            direction="row-reverse"
            wrap="nowrap"
          >
            <CSVLink data={fault_resistance} filename={`${pit_name}_data.csv`}>
              <IconCloudDownload stroke={2} style={{ cursor: "pointer" }} />
            </CSVLink>
          </Flex>
          <Table striped highlightOnHover withTableBorder withColumnBorders>
            <Table.Thead>
              <Table.Th>Sr</Table.Th>
              <Table.Th>Date & Time</Table.Th>
              <Table.Th>Resistance Ω</Table.Th>
            </Table.Thead>
            <Table.Tbody>
              {paginatedDataFault.map((item, index) => (
                <Table.Tr key={index}>
                  <Table.Td>{startIndex + index}</Table.Td>
                  <Table.Td>{item.Date}</Table.Td>
                  <Table.Td>{item.value} </Table.Td>
                </Table.Tr>
              ))}
            </Table.Tbody>
          </Table>
        </Card.Section>
        <Pagination
          mt="lg"
          value={currentPageFault}
          onChange={handleFaultPageChange}
          total={Math.ceil(normal_resistance.length / itemsPerPage)}
        />
      </Card>
    </>
  );
};

export default Scc_details_modal;

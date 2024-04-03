import React from "react";
import { Text } from "@mantine/core";
import { getTextColor } from "../components/utils";
import UserTable from "../components/Rferm_page_components/Rferm_special_componts/UserTable";
import { UserDetails } from "../components/testingData/UserDetails";
import Grid_resistance_table from "../components/Rferm_page_components/Rferm_special_componts/Grid_resistance_table";
import { GridData } from "../components/testingData/GridData";

const RfermUsers: React.FC<{ back: string }> = ({ back }) => {
  const username = localStorage.getItem("userFirstname");
  const persona = localStorage.getItem("persona");
  return (
    <div>
      <Text ta="center" fw={800} fz="xl" td="underline" c={getTextColor(back)}>
        {" "}
        Check out the Details, {username || "Guest"}
      </Text>

      {persona == "pcc" && <Grid_resistance_table data={GridData} />}
      {persona == "scc" && <UserTable data={UserDetails} />}
      {persona == "ccc" && <UserTable data={UserDetails} />}
    </div>
  );
};

export default RfermUsers;

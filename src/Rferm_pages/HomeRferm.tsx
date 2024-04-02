import React from "react";
import { Text } from "@mantine/core";

import { getTextColor } from "../components/utils";
import PCC_user from "../components/Rferm_page_components/PCC_user";
import SCC_user from "../components/Rferm_page_components/SCC_user";
import CCC_user from "../components/Rferm_page_components/CCC_user";
import { Rferm_home } from "../components/testingData/Rferm_home";

const HomeRferm: React.FC<{ back: string }> = ({ back }) => {
  const username = localStorage.getItem("userFirstname");
  const persona = localStorage.getItem("persona");

  return (
    <div className="App" style={{ marginTop: 20 }}>
      <Text ta="center" fw={800} fz="xl" td="underline" c={getTextColor(back)}>
        {" "}
        Welcome, {username || "Guest"}{" "}
      </Text>
      {persona === "pcc" && <PCC_user data={Rferm_home} back={back} />}
      {persona === "scc" && <SCC_user data={Rferm_home} back={back} />}
      {persona === "ccc" && <CCC_user data={Rferm_home} back={back} />}
    </div>
  );
};

export default HomeRferm;

import React, { useState } from "react";
import { Text, Button } from "@mantine/core";
import { useLocation } from "react-router-dom";
import { getTextColor } from "../components/utils";
import PCC_user from "../components/Rferm_page_components/PCC_user";
import SCC_user from "../components/Rferm_page_components/SCC_user";
import CCC_user from "../components/Rferm_page_components/CCC_user";
const HomeRferm = ({ back }) => {
  const location = useLocation();
  const { state } = location;
  const username = localStorage.getItem("user");
  const [displayComponent, setDisplayComponent] = useState(null);

  const handleComponentChange = (componentName) => {
    setDisplayComponent(componentName);
  };

  return (
    <div className="App" style={{ marginTop: 20 }}>
      <Text ta="center" fw={800} fz="xl" td="underline" c={getTextColor(back)}>
        {" "}
        Welcome, {username || "Guest"}{" "}
      </Text>
      <div style={{ marginTop: 20 }}>
        {/* <Button onClick={() => handleComponentChange("PCC_user")}>
          Show PCC_user
        </Button>
        <Button onClick={() => handleComponentChange("SCC_user")}>
          Show SCC_user
        </Button>
        <Button onClick={() => handleComponentChange("CCC_user")}>
          Show CCC_user
        </Button> */}
      </div>
      <div style={{ marginTop: 20 }}>
        {/* Conditionally render the selected component */}
        {displayComponent === "PCC_user" && <PCC_user />}
        {displayComponent === "SCC_user" && <SCC_user />}
        {displayComponent === "CCC_user" && <CCC_user />}
      </div>
    </div>
  );
};

export default HomeRferm;

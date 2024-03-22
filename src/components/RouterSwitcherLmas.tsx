import React from "react";
import LmasHome from "../LmasPages/LmasHome";
import Calendar from "../LmasPages/Calendar";
import Settings from "../Settings";
import Login from "../Login";
import { Routes, Route } from "react-router-dom";

const RouterSwitcherLmas = ({ backcolor }) => {
  return (
    <Routes>
      <Route path="/" element={<LmasHome back={backcolor} />} />
      <Route path="/calendar" element={<Calendar back={backcolor} />} />
      <Route path="/settings" element={<Settings back={backcolor} />} />
    </Routes>
  );
};

export default RouterSwitcherLmas;

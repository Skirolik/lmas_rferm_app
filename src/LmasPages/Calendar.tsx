import React from "react";
import { getTextColor } from "../components/utils";

const Calendar = ({ back }) => {
  return <div style={{ color: getTextColor(back) }}>Calendar</div>;
};

export default Calendar;

import React from "react";
import { WiHot, WiSnowflakeCold } from "react-icons/wi";

const seasonConfig = {
  summer: {
    text: "It's summer",
    iconName: <WiHot />,
  },
  winter: {
    text: "It's winter",
    iconName: <WiSnowflakeCold />,
  },
};
const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};
function SeasonDisplay({ lat }) {
  const season = getSeason(lat, new Date().getMonth());
  const { text, iconName } = seasonConfig[season]; //Array like accessing object items
  return (
    <div className={`season__display ${season}`}>
      <span className="season-icon">{iconName}</span>
      <span>{text}</span>
    </div>
  );
}

export default SeasonDisplay;

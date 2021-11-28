import React, { useState } from "react";
import Dropdown from "./Dropdown";

const options = [
  {
    status: "Single",
  },
  {
    status: "Married",
  },
  {
    status: "Divorced",
  },
];
const App = () => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <Dropdown selected={selected} onSelection={setSelected} options={options} />
  );
};

export default App;

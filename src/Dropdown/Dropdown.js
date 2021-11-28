import React, { useState } from "react";

const Dropdown = ({ options, selected, onSelection }) => {
  const [show, setShow] = useState(false);
  const renderedItems = options.map((option) => {
    if (option.status === selected.status) {
      return null;
    } else
      return (
        <div
          key={option.status}
          className="item"
          onClick={() => {
            onSelection(option);
          }}
        >
          {option.status}
        </div>
      );
  });

  return (
    <div className="ui form">
      <div className="field">
        <label className="label">Relationship Status</label>
        <div
          className="ui selection visible dropdown active"
          onClick={() => setShow(!show)}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.status}</div>
          <div className="menu visible transition">{show && renderedItems}</div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;

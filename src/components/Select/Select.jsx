import React from "react";
import { BiChevronDown } from "react-icons/bi";
import "./style.scss";

const fakeItems = [
  { name: "Security", value: "security" },
  { name: "Software", value: "software" },
  { name: "Music", value: "music" },
  { name: "Design", value: "design" },
  { name: "Other", value: "other" },
]

const Select = () => {
  return (
    <div className="select">
      <div className="select__icon">
        <BiChevronDown />
      </div>
      <div className="select__value">Security</div>
      <div className="select__dropdown">
        {fakeItems.map(item => (
          <div key={item.value} className="select__dropdown-item">{item.name}</div>
        ))}
      </div>
    </div>
  );
}

export default Select;
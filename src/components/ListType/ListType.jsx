import React from "react";
import { BiListUl, BiGridAlt } from "react-icons/bi";
import "./style.scss";

const ListType = () => {
  return (
    <div className="list-type">
      <button className="list-type__button">
        <BiListUl />
      </button>
      <button className="list-type__button list-type__button--active">
        <BiGridAlt />
      </button>
    </div>
  );
}

export default ListType;
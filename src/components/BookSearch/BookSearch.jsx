import React from "react";
import { BiSearch } from "react-icons/bi";
import Select from "../Select";
import "./style.scss";

const filterItems = [
  { name: "Stocking", value: "stocking" },
  { name: "Out of stock", value: "out-of-stock" }
]

const BookSearch = () => {
  return (
    <div className="book-search">
      <div className="book-search__input">
        <Select />
        <input placeholder="Search" />
        <button className="book-search__search-button">
          <BiSearch />
        </button>
      </div>
      <div className="book-search__filter">
        {filterItems.map(item => (
          <div key={item.value} className="book-search__filter-item">
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default BookSearch;
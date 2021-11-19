import React from "react";
import "./style.scss";

const BookItem = ({ status=true }) => {
  return (
    <div className="book-item">
      <div className="book-item__status" hidden={status}>
        <p>Out of stock</p>
      </div>
      <div className="book-item__cover">
        <img src="https://www.microsoftpressstore.com/ShowCover.aspx?isbn=9780735665866" alt="cover" />
      </div>
      <div className="book-item__content">
        <p className="book-item__name">Window Internal Part 2</p>
        <p className="book-item__type">Software</p>
      </div>
    </div>
  );
}

export default BookItem;
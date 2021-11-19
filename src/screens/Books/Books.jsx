import React from "react";
import BaseLayout from "../../components/BaseLayout";
import BookItem from "../../components/BookItem";
import BookSearch from "../../components/BookSearch/BookSearch";
import ListType from "../../components/ListType";
import "./style.scss";

const Books = () => {
  return (
    <BaseLayout>
      <div className="screen screen--books">
        <h3 className="screen__title">Books</h3>
        <BookSearch />
        <div className="d-flex justify-content-end pt-4 pb-4">
          <ListType />
        </div>
        {/* <h5>Result</h5> */}
        <div className="list-book">
          <BookItem status={false} />
          <BookItem />
          <BookItem />
          <BookItem status={false} />
          <BookItem />
          <BookItem />
          <BookItem />
          <BookItem />
        </div>
      </div>
    </BaseLayout>
  );
}

export default Books;
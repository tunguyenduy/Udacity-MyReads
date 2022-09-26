import React from "react";
import Book from "./Book";

function Bookshelf(props) {
  const { shelfName, books, onUpdate } = props;
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelfName}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((x) => {
            return (
              <Book
                key={x.id}
                img={x.imageLinks}
                title={x.title}
                authors={x.authors}
                onUpdate={onUpdate}
                bookNo={x.id}
                shelf={x.shelf}
              />
            );
          })}
        </ol>
      </div>
    </div>
  );
}

export default Bookshelf;

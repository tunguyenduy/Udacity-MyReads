import React, { useEffect, useState } from "react";
import Options from "./Options";
import * as BooksAPI from "../BooksAPI";

function Book(props) {
  const { img, title, authors, bookNo, onUpdate, shelf } = props;
  const [shelfChange, setShelfChange] = useState({
    shelf: shelf,
  });

  useEffect(() => {
    const shelfList = ["wantToRead", "currentlyReading", "read", "none"];
    async function updateShelf(book, shelf) {
      await BooksAPI.update(book, shelf);
      if (onUpdate) {
        onUpdate();
      } 
    }
    if (shelfList.includes(shelfChange.shelf)) {
      updateShelf(shelfChange, shelfChange.shelf);
    }
  }, [shelfChange, onUpdate]);

  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{ backgroundImage: `url(${img && img.smallThumbnail})`}}
          >
          </div>
          <Options onUpdate={setShelfChange} bookNo={bookNo} shelfChange={shelfChange}/>
        </div>

        <div className="book-title">{title}</div>
        <div className="book-authors">{authors && authors.join(", ")}</div>
      </div>
    </li>
  );
}

export default Book;

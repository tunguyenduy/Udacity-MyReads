import React, { useEffect, useState } from "react";
import Bookshelf from "./Bookshelf";
import * as BooksAPI from "../BooksAPI";

function Contents() {
  const title1 = "Currently Reading", title2 = "Want to Read", title3 = "Read";
  const [currentBooks, setCurrentBooks] = useState([]);
  const [wantedBooks, setWantedBooks] = useState([]);
  const [readBooks, setReadBooks] = useState([]);

  async function getListBooks() {
    const listBooks = await BooksAPI.getAll();
    if (Array.isArray(listBooks) && listBooks.length) {
      setCurrentBooks(
        listBooks.filter((item) => item.shelf === "currentlyReading")
      );
      setWantedBooks(listBooks.filter((item) => item.shelf === "wantToRead"));
      setReadBooks(listBooks.filter((item) => item.shelf === "read"));
    }
  }

  useEffect(() => {
    getListBooks();
  }, []);
  const listDisplay = [{name: title1, listBooks: currentBooks}, {name: title2, listBooks: wantedBooks}, {name: title3, listBooks: readBooks}];

  return (
    <div className="list-books-content">
      { listDisplay.map((x) => (
        <Bookshelf
        key = {x.name}
        shelfName = {x.name}
        books = {x.listBooks}
        onUpdate = {getListBooks}
      />
      )) }
    </div>
  );
}

export default Contents;

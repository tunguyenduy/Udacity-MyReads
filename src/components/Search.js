import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "../BooksAPI";
import Book from "./Book";

function Search() {
  const [input, setInput] = useState('');
  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function searchBook(){
      const result = await BooksAPI.search(input, 20);
      const listBooksSelected = await BooksAPI.getAll();
      result.forEach(book => {
        for (let item of listBooksSelected)  {
          if(item.id === book.id && item.shelf) {
            book.shelf = item.shelf;
            break;
          } 
        };
        if (!book.shelf) book.shelf = 'none';
      });

      setBooks(result);
    }
    input ? searchBook() : setBooks([])
  }, [input]);
  
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search" />
        <div className="search-books-input-wrapper">
          <input type="text" placeholder="Search by title or author" value={input} onChange={(e)=> setInput(e.target.value)} />
        </div>
      </div>
      
      <div className="search-books-results">
        <ol className="books-grid">
        {Array.isArray(books) && books.map((x) => {
            return (
              <Book
                key={x.id}
                img={x.imageLinks}
                title={x.title}
                authors={x.authors}
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

export default Search;

import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './Books.css';
import apiRequest from '../helper/apiRequest';

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    apiRequest.get('/books')
      .then(data => setBooks(data))
      .catch(err => console.log(err));
  }, []);

  const removeBook = (bookId) => () => {
    const confirmRemove = window.confirm('Are you sure to remove this book');
    if(confirmRemove) {
      confirmRemoveBook(bookId);
    }
  }

  const confirmRemoveBook = (bookId) => {
    apiRequest.delete(`/books/${bookId}`)
      .then(() => removeBookFromTheList(books, bookId))
      .catch(err => console.log(err));
  }

  const removeBookFromTheList = (books, bookId) => {
    const booksList = books.filter(book => book.id !== bookId);
    setBooks(booksList);
  };

  return (
    <div>
      { !books.length && <p>No books to buy</p> }
      
      {
        books && books.map(book => (
          <article key={book.id}>
            <h3>{book.title} - {book.year}</h3>
            <Link to={`/books/${book.id}`} className="link-button">Details</Link>
            <button onClick={removeBook(book.id)} className="link-button link-button--remove">Remove</button>
            <hr />
          </article>
        ))
      }
    </div>
  )
}

export default Books;

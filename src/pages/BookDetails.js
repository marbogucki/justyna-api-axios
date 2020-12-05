import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import apiRequest from '../helper/apiRequest';

const BookDetails = () => {
  const { id: bookId } = useParams();
  const [book, setBook] = useState({});

  useEffect(() => {
    apiRequest.get(`/books/${bookId}`)
      .then(data => setBook(data))
      .catch(err => console.log(err));
  }, [bookId]);

  return (
    book && <>
      <h3>{book.title}</h3>
      <p>Author: {book.author}</p>
      <p>Year: {book.year}</p>
    </>
  )
}

export default BookDetails;

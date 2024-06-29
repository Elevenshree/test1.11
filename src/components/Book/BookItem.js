import React from 'react';

const BookItem = ({ book }) => {
  return (
    <div className="p-4 border rounded shadow">
      <h3 className="text-xl font-bold">{book.title}</h3>
      <p className="text-gray-700">Author: {book.author}</p>
      <p className="text-gray-700">Genre: {book.genre}</p>
      <a href={book.url} className="text-blue-600">Download</a>
    </div>
  );
};

export default BookItem;

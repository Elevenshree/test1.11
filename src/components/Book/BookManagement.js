import React, { useEffect, useState } from 'react';
import bookService from '../../services/bookService';

const BookManagement = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await bookService.getAllBooks();
      setBooks(response.data);
    };
    fetchBooks();
  }, []);

  const handleDelete = async (id) => {
    try {
      await bookService.deleteBook(id);
      setBooks(books.filter((book) => book.id !== id));
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  };

  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-3xl font-bold mb-6">Manage Books</h2>
      <div className="grid grid-cols-3 gap-6">
        {books.map((book) => (
          <div key={book.id} className="p-4 border rounded shadow">
            <h3 className="text-xl font-bold">{book.title}</h3>
            <p className="text-gray-700">Author: {book.author}</p>
            <p className="text-gray-700">Genre: {book.genre}</p>
            <button
              onClick={() => handleDelete(book.id)}
              className="text-red-600"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookManagement;

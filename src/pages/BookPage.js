import React from 'react';
import BookDisplay from '../components/Book/BookDisplay';
import BookUpload from '../components/Book/BookUpload';

const BookPage = () => {
  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-3xl font-bold mb-6">Books</h2>
      <BookUpload />
      <BookDisplay />
    </div>
  );
};

export default BookPage;

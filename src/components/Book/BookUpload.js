import React, { useState } from 'react';
import bookService from '../../services/bookService';

const BookUpload = () => {
  const [bookData, setBookData] = useState({
    title: '',
    author: '',
    genre: '',
    file: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookData({
      ...bookData,
      [name]: value
    });
  };

  const handleFileChange = (e) => {
    setBookData({
      ...bookData,
      file: e.target.files[0]
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', bookData.title);
    formData.append('author', bookData.author);
    formData.append('genre', bookData.genre);
    formData.append('file', bookData.file);

    try {
      await bookService.uploadBook(formData);
      // Refresh or navigate as needed
    } catch (error) {
      console.error('Error uploading book:', error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6">Upload Book</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Title</label>
          <input
            type="text"
            name="title"
            className="w-full px-3 py-2 border rounded"
            value={bookData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Author</label>
          <input
            type="text"
            name="author"
            className="w-full px-3 py-2 border rounded"
            value={bookData.author}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Genre</label>
          <input
            type="text"
            name="genre"
            className="w-full px-3 py-2 border rounded"
            value={bookData.genre}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">File</label>
          <input
            type="file"
            name="file"
            className="w-full px-3 py-2 border rounded"
            onChange={handleFileChange}
            required
          />
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">Upload</button>
      </form>
    </div>
  );
};

export default BookUpload;

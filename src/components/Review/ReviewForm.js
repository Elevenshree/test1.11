import React, { useState } from 'react';
import reviewService from '../../services/reviewService';

const ReviewForm = () => {
  const [formData, setFormData] = useState({
    bookTitle: '',
    content: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await reviewService.addReview(formData);
      // Refresh or navigate as needed
    } catch (error) {
      console.error('Error adding review:', error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6">Add Review</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Book Title</label>
          <input
            type="text"
            name="bookTitle"
            className="w-full px-3 py-2 border rounded"
            value={formData.bookTitle}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Review</label>
          <textarea
            name="content"
            className="w-full px-3 py-2 border rounded"
            value={formData.content}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">Submit</button>
      </form>
    </div>
  );
};

export default ReviewForm;

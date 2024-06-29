import React, { useEffect, useState } from 'react';
import reviewService from '../../services/reviewService';

const ReviewList = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      const response = await reviewService.getAllReviews();
      setReviews(response.data);
    };
    fetchReviews();
  }, []);

  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-3xl font-bold mb-6">Reviews</h2>
      <div className="grid grid-cols-3 gap-6">
        {reviews.map((review) => (
          <div key={review.id} className="p-4 border rounded shadow">
            <h3 className="text-xl font-bold">{review.bookTitle}</h3>
            <p className="text-gray-700">{review.content}</p>
            <p className="text-gray-500">- {review.userName}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewList;

import React from 'react';
import ReviewList from '../components/Review/ReviewList';
import ReviewForm from '../components/Review/ReviewForm';

const ReviewPage = () => {
  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-3xl font-bold mb-6">Reviews</h2>
      <ReviewForm />
      <ReviewList />
    </div>
  );
};

export default ReviewPage;

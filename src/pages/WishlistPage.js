import React from 'react';
import Wishlist from '../components/Wishlist/Wishlist';

const WishlistPage = () => {
  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-3xl font-bold mb-6">Wishlist</h2>
      <Wishlist />
    </div>
  );
};

export default WishlistPage;

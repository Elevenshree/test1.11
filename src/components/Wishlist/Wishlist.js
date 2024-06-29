import React, { useEffect, useState } from 'react';
import wishlistService from '../../services/wishlistService';

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const fetchWishlist = async () => {
      const response = await wishlistService.getWishlist();
      setWishlist(response.data);
    };
    fetchWishlist();
  }, []);

  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-3xl font-bold mb-6">Wishlist</h2>
      <div className="grid grid-cols-3 gap-6">
        {wishlist.map((item) => (
          <div key={item.id} className="p-4 border rounded shadow">
            <h3 className="text-xl font-bold">{item.bookTitle}</h3>
            <p className="text-gray-700">Author: {item.bookAuthor}</p>
            <p className="text-gray-700">Page: {item.page}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;

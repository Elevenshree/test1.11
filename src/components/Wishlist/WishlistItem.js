import React from 'react';

const WishlistItem = ({ item }) => {
  return (
    <div className="p-4 border rounded shadow">
      <h3 className="text-xl font-bold">{item.bookTitle}</h3>
      <p className="text-gray-700">Author: {item.bookAuthor}</p>
      <p className="text-gray-700">Page: {item.page}</p>
    </div>
  );
};

export default WishlistItem;

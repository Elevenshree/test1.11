import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">Digital Library</Link>
        <div>
          <Link to="/books" className="mr-4">Books</Link>
          <Link to="/reviews" className="mr-4">Reviews</Link>
          <Link to="/wishlist" className="mr-4">Wishlist</Link>
          <Link to="/signup" className="mr-4">Sign Up</Link>
          <Link to="/signin">Sign In</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import BookPage from './pages/BookPage';
import ReviewPage from './pages/ReviewPage';
import WishlistPage from './pages/WishlistPage';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="flex-grow">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/books" component={BookPage} />
          <Route path="/reviews" component={ReviewPage} />
          <Route path="/wishlist" component={WishlistPage} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;

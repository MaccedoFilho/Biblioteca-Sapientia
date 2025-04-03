import React, { useState } from 'react';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Catalog from './pages/Catalog';
import BookDetail from './pages/BookDetail';
import WishList from './pages/WishList';
import './assets/styles/global.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBookId, setSelectedBookId] = useState(null);

  const navigateToBookDetail = (bookId) => {
    setSelectedBookId(bookId);
    setCurrentPage('bookDetail');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home setCurrentPage={setCurrentPage} navigateToBookDetail={navigateToBookDetail} />;
      case 'about':
        return <About />;
      case 'catalog':
        return <Catalog searchTerm={searchTerm} navigateToBookDetail={navigateToBookDetail} />;
      case 'bookDetail':
        return <BookDetail bookId={selectedBookId} setCurrentPage={setCurrentPage} />;
      case 'wishlist':
        return <WishList navigateToBookDetail={navigateToBookDetail} />;
      default:
        return <Home setCurrentPage={setCurrentPage} navigateToBookDetail={navigateToBookDetail} />;
    }
  };

  return (
    <MainLayout 
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      setSearchTerm={setSearchTerm}
    >
      {renderPage()}
    </MainLayout>
  );
}

export default App; 
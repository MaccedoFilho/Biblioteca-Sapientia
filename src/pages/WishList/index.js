import React, { useState, useEffect } from 'react';
import BookCard from '../../components/BookCard';
import './styles.css';

const WishList = ({ navigateToBookDetail }) => {
  const [wishlist, setWishlist] = useState([]);
  const [isEmpty, setIsEmpty] = useState(true);

  useEffect(() => {
    const savedWishlist = localStorage.getItem('bookWishlist');
    if (savedWishlist) {
      const parsedList = JSON.parse(savedWishlist);
      setWishlist(parsedList);
      setIsEmpty(parsedList.length === 0);
    }
  }, []);

  const removeFromWishlist = (bookId) => {
    const updatedWishlist = wishlist.filter(book => book.id !== bookId);
    setWishlist(updatedWishlist);
    setIsEmpty(updatedWishlist.length === 0);

    localStorage.setItem('bookWishlist', JSON.stringify(updatedWishlist));
  };

  const clearWishlist = () => {
    setWishlist([]);
    setIsEmpty(true);
    localStorage.removeItem('bookWishlist');
  };

  return (
    <div className="wishlist-page">
      <div className="wishlist-header">
        <div className="wishlist-title">
          <h1>Minha Lista de Leitura</h1>
          <p>Gerencie os livros que você salvou para ler mais tarde</p>
        </div>
        
        {!isEmpty && (
          <div className="wishlist-actions">
            <button 
              className="clear-wishlist-btn"
              onClick={clearWishlist}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="3 6 5 6 21 6"></polyline>
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
              </svg>
              Limpar Lista
            </button>
          </div>
        )}
      </div>

      {isEmpty ? (
        <div className="empty-wishlist">
          <div className="empty-illustration">
            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#3498db" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
            </svg>
          </div>
          <h2>Sua lista está vazia</h2>
          <p>Adicione livros à sua lista de leitura para encontrá-los aqui.</p>
        </div>
      ) : (
        <div className="wishlist-content">
          <div className="wishlist-grid">
            {wishlist.map(book => (
              <div key={book.id} className="wishlist-item">
                <BookCard 
                  book={book} 
                  navigateToBookDetail={navigateToBookDetail} 
                />
                <button 
                  className="remove-from-wishlist"
                  onClick={() => removeFromWishlist(book.id)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default WishList; 
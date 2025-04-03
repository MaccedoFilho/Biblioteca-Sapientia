import React, { useState, useRef, useEffect } from 'react';
import './styles.css';

const BookCard = ({ book, navigateToBookDetail }) => {
  const { id, title, author, coverUrl, year, genre } = book;
  const [imageError, setImageError] = useState(false);
  const [isPulsing, setIsPulsing] = useState(false);
  const [isInWishlist, setIsInWishlist] = useState(false);
  const cardRef = useRef(null);
  
  useEffect(() => {
    const savedWishlist = localStorage.getItem('bookWishlist');
    if (savedWishlist) {
      const wishlistBooks = JSON.parse(savedWishlist);
      setIsInWishlist(wishlistBooks.some(item => item.id === id));
    }
  }, [id]);
  
  const handleClick = () => {
    if (navigateToBookDetail) {
      setIsPulsing(true);
      setTimeout(() => {
        navigateToBookDetail(id);
      }, 300);
    }
  };
  
  const handleImageError = () => {
    setImageError(true);
  };
  
  const handleButtonClick = (e, action) => {
    e.stopPropagation(); 
    e.preventDefault(); 
    
    switch(action) {
      case 'read':
        alert(`Iniciando leitura de ${title}`);
        break;
      case 'add':
        addToWishlist();
        break;
      case 'favorite':
        alert(`${title} adicionado aos favoritos`);
        break;
      default:
        break;
    }
  };
  
  const addToWishlist = () => {
    const savedWishlist = localStorage.getItem('bookWishlist');
    let wishlistBooks = [];
    
    if (savedWishlist) {
      wishlistBooks = JSON.parse(savedWishlist);
    }
    
    if (!isInWishlist) {
      wishlistBooks.push(book);
      localStorage.setItem('bookWishlist', JSON.stringify(wishlistBooks));
      setIsInWishlist(true);
      alert(`${title} adicionado à sua lista de leitura.`);
    } else {
      const updatedWishlist = wishlistBooks.filter(item => item.id !== id);
      localStorage.setItem('bookWishlist', JSON.stringify(updatedWishlist));
      setIsInWishlist(false);
      alert(`${title} removido da sua lista de leitura.`);
    }
  };
  
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left; 
    const y = e.clientY - rect.top; 
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 30; 
    const rotateY = (centerX - x) / 30;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };
  
  const handleMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
    }
  };
  
  return (
    <div 
      className={`book-card ${isPulsing ? 'pulse' : ''}`} 
      onClick={handleClick}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="book-cover">
        {coverUrl && !imageError ? (
          <img 
            src={coverUrl} 
            alt={`Capa de ${title}`} 
            onError={handleImageError}
          />
        ) : (
          <div className="book-cover-placeholder">
            {title.charAt(0)}
          </div>
        )}
        <span className="book-genre">{genre}</span>
        {isInWishlist && (
          <div className="wishlist-badge">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </div>
        )}
      </div>
      <div className="book-info">
        <h3 className="book-title">{title}</h3>
        <p className="book-author">{author}</p>
        {year && <p className="book-year">{year}</p>}
      </div>
      
      <div className="book-actions">
        <button 
          className="book-action-btn"
          onClick={(e) => handleButtonClick(e, 'read')}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
          </svg>
          <span>Ler</span>
        </button>
        <button 
          className={`book-action-btn ${isInWishlist ? 'active' : ''}`}
          onClick={(e) => handleButtonClick(e, 'add')}
          aria-label={isInWishlist ? "Remover da lista" : "Adicionar à lista"}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill={isInWishlist ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {isInWishlist ? (
              <path d="M9 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-4M15 3h6v6M10 14L21 3" />
            ) : (
              <>
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="16"></line>
                <line x1="8" y1="12" x2="16" y2="12"></line>
              </>
            )}
          </svg>
          <span>{isInWishlist ? 'Remover da lista' : 'Adicionar à lista'}</span>
        </button>
        <button 
          className="book-action-btn"
          onClick={(e) => handleButtonClick(e, 'favorite')}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default BookCard; 
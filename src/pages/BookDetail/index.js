import React, { useEffect, useState } from 'react';
import books from '../../data/books';
import './styles.css';

const BookDetail = ({ bookId, setCurrentPage }) => {
  const [book, setBook] = useState(null);
  const [isInWishlist, setIsInWishlist] = useState(false);

  useEffect(() => {
    const foundBook = books.find(b => b.id === parseInt(bookId));
    setBook(foundBook);

    if (foundBook) {
      const savedWishlist = localStorage.getItem('bookWishlist');
      if (savedWishlist) {
        const wishlistBooks = JSON.parse(savedWishlist);
        setIsInWishlist(wishlistBooks.some(item => item.id === foundBook.id));
      }
    }
  }, [bookId]);

  const addToWishlist = () => {
    if (!book) return;
    
    const savedWishlist = localStorage.getItem('bookWishlist');
    let wishlistBooks = [];
    
    if (savedWishlist) {
      wishlistBooks = JSON.parse(savedWishlist);
    }
    
    if (!isInWishlist) {
      wishlistBooks.push(book);
      localStorage.setItem('bookWishlist', JSON.stringify(wishlistBooks));
      setIsInWishlist(true);
      alert(`${book.title} adicionado à sua lista de leitura.`);
    } else {
      const updatedWishlist = wishlistBooks.filter(item => item.id !== book.id);
      localStorage.setItem('bookWishlist', JSON.stringify(updatedWishlist));
      setIsInWishlist(false);
      alert(`${book.title} removido da sua lista de leitura.`);
    }
  };

  const handleReadBook = () => {
    alert(`Iniciando leitura de ${book.title}`);
  };

  if (!book) {
    return (
      <div className="book-detail-page">
        <div className="loading">Carregando...</div>
      </div>
    );
  }

  return (
    <div className="book-detail-page">
      <button className="back-button" onClick={() => setCurrentPage('catalog')}>
        &larr; Voltar ao catálogo
      </button>
      
      <div className="book-detail-container">
        <div className="book-detail-cover">
          {book.coverUrl ? (
            <img src={book.coverUrl} alt={`Capa de ${book.title}`} />
          ) : (
            <div className="book-cover-placeholder">{book.title.charAt(0)}</div>
          )}
          {isInWishlist && (
            <div className="wishlist-badge detail-badge">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </div>
          )}
        </div>
        
        <div className="book-detail-info">
          <span className="book-detail-genre">{book.genre}</span>
          <h1 className="book-detail-title">{book.title}</h1>
          <h2 className="book-detail-author">{book.author}</h2>
          <p className="book-detail-year">Ano de publicação: {book.year}</p>
          
          <div className="book-detail-description">
            <h3>Sinopse</h3>
            <p>
              {book.description || 
                "Esta obra clássica da literatura brasileira é um marco importante em seu gênero. " +
                "Através de uma narrativa envolvente, o autor nos leva a uma jornada de descobertas " +
                "e reflexões sobre a condição humana e a sociedade brasileira de sua época."}
            </p>
          </div>
          
          <div className="book-detail-actions">
            <button 
              className="action-button primary"
              onClick={handleReadBook}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
              </svg>
              Ler agora
            </button>
            <button 
              className={`action-button secondary ${isInWishlist ? 'active' : ''}`}
              onClick={addToWishlist}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill={isInWishlist ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {isInWishlist ? (
                  <path d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z" />
                ) : (
                  <>
                    <path d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z" />
                    <polyline points="17 21 17 13 7 13 7 21" />
                    <polyline points="7 3 7 8 15 8" />
                  </>
                )}
              </svg>
              {isInWishlist ? 'Remover da lista' : 'Adicionar à lista'}
            </button>
          </div>
        </div>
      </div>
      
      <div className="book-detail-sections">
        <div className="book-detail-section">
          <h3>Sobre o Autor</h3>
          <p>
            {book.authorBio || 
              `${book.author} é um renomado escritor da literatura brasileira, 
              conhecido por suas obras que retratam a sociedade e os costumes brasileiros 
              com profundidade e sensibilidade.`}
          </p>
        </div>
        
        <div className="book-detail-section">
          <h3>Informações Adicionais</h3>
          <ul className="book-details-list">
            <li><strong>Título:</strong> {book.title}</li>
            <li><strong>Autor:</strong> {book.author}</li>
            <li><strong>Ano:</strong> {book.year}</li>
            <li><strong>Gênero:</strong> {book.genre}</li>
            <li><strong>Idioma:</strong> Português</li>
            <li><strong>Páginas:</strong> {book.pages || "Informação não disponível"}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BookDetail; 
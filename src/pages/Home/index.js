import React from 'react';
import BookCard from '../../components/BookCard';
import books from '../../data/books';
import './styles.css';

const Home = ({ setCurrentPage, navigateToBookDetail }) => {
  const featuredBooks = books.slice(0, 14);

  const navigateToCatalog = () => {
    setCurrentPage('catalog');
  };

  return (
    <div className="home-page">
      <section className="hero-banner">
        <div className="hero-text">
          <h1 onClick={navigateToCatalog}>
            Sua Jornada <span className="highlight">Literária</span> Começa Aqui
          </h1>
          <div className="text-container">
            <p>
              Explore nossa biblioteca digital e descubra novos mundos através dos livros. Uma experiência única de leitura espera por você.
            </p>
          </div>
          <button className="cta-button" onClick={navigateToCatalog}>Explorar Catálogo</button>
        </div>
      </section>

      <section className="featured-section">
        <div className="section-header">
          <h2 onClick={navigateToCatalog}>Livros em Destaque</h2>
          <p>Conheça algumas das obras mais importantes da literatura mundial</p>
        </div>
        
        <div className="book-grid">
          {featuredBooks.slice(0, 10).map(book => (
            <BookCard 
              key={book.id} 
              book={book} 
              navigateToBookDetail={navigateToBookDetail} 
            />
          ))}
        </div>
      </section>

      <section className="info-section">
        <div className="info-card">
          <div className="info-icon">📚</div>
          <h3 onClick={navigateToCatalog}>Vasto Acervo</h3>
          <p>Mais de 1000 títulos disponíveis em nosso catálogo, com obras nacionais e internacionais.</p>
        </div>
        
        <div className="info-card">
          <div className="info-icon">🔍</div>
          <h3 onClick={navigateToCatalog}>Busca Inteligente</h3>
          <p>Encontre facilmente o que procura com nosso sistema de busca e recomendações personalizadas.</p>
        </div>
        
        <div className="info-card">
          <div className="info-icon">💻</div>
          <h3 onClick={navigateToCatalog}>Acesso Digital</h3>
          <p>Leia seus livros favoritos em qualquer dispositivo, a qualquer hora e em qualquer lugar.</p>
        </div>
      </section>
    </div>
  );
};

export default Home; 
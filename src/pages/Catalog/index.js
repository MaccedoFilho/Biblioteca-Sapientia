import React, { useState, useEffect } from 'react';
import BookCard from '../../components/BookCard';
import books from '../../data/books';
import './styles.css';

const Catalog = ({ searchTerm, navigateToBookDetail }) => {
  const [filteredBooks, setFilteredBooks] = useState(books);
  const [activeGenre, setActiveGenre] = useState('Todos');

  const genres = ['Todos', ...new Set(books.map(book => book.genre))];

  useEffect(() => {
    let result = books;
  
    if (searchTerm && searchTerm.trim() !== '') {
      const term = searchTerm.toLowerCase();
      result = result.filter(book => 
        book.title.toLowerCase().includes(term) || 
        book.author.toLowerCase().includes(term)
      );
    }

    if (activeGenre !== 'Todos') {
      result = result.filter(book => book.genre === activeGenre);
    }
    
    setFilteredBooks(result);
  }, [searchTerm, activeGenre]);

  return (
    <div className="catalog-page">
      <div className="catalog-header">
        <h1>Catálogo de Livros</h1>
        <p>Explore nossa seleção de livros e encontre sua próxima aventura literária</p>
      </div>
      
      <div className="catalog-filters">
        <div className="genre-filter">
          <h3>Filtrar por Gênero</h3>
          <div className="genre-buttons">
            {genres.map(genre => (
              <button 
                key={genre}
                className={activeGenre === genre ? 'active' : ''}
                onClick={() => setActiveGenre(genre)}
              >
                {genre}
              </button>
            ))}
          </div>
        </div>
        
        {searchTerm && (
          <div className="search-results">
            <p>Resultados da pesquisa para: <strong>"{searchTerm}"</strong></p>
          </div>
        )}
      </div>
      
      <div className="catalog-grid">
        {filteredBooks.length > 0 ? (
          filteredBooks.map(book => (
            <BookCard 
              key={book.id} 
              book={book} 
              navigateToBookDetail={navigateToBookDetail} 
            />
          ))
        ) : (
          <div className="no-results">
            <h3>Nenhum livro encontrado</h3>
            <p>Tente ajustar seus critérios de pesquisa ou explorar outras categorias.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Catalog; 
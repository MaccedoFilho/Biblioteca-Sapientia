/** 
 * Formata o ano do livro
 * @param {number} year 
 * @returns {string} 
 */
export const formatYear = (year) => {
  return `Ano: ${year}`;
};

/**
 * Filtra livros por autor
 * @param {Array} books 
 * @param {string} author 
 * @returns {Array} 
 */
export const filterBooksByAuthor = (books, author) => {
  if (!author) return books;
  return books.filter(book => 
    book.author.toLowerCase().includes(author.toLowerCase())
  );
};

/**
 * Ordena livros por ano
 * @param {Array} books 
 * @param {boolean} ascending 
 * @returns {Array} 
 */
export const sortBooksByYear = (books, ascending = true) => {
  return [...books].sort((a, b) => {
    return ascending ? a.year - b.year : b.year - a.year;
  });
}; 
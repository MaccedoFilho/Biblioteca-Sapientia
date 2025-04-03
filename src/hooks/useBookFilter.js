import { useState, useEffect, useMemo } from 'react';
import { filterBooksByAuthor, sortBooksByYear } from '../utils/bookUtils';

/** 
 * @param {Array} books 
 * @returns {Object} 
 */
const useBookFilter = (books) => {
  const [authorFilter, setAuthorFilter] = useState('');
  const [sortOrder, setSortOrder] = useState('asc'); 
  const [filteredBooks, setFilteredBooks] = useState(books);

  useEffect(() => {
    let result = books;

    if (authorFilter) {
      result = filterBooksByAuthor(result, authorFilter);
    }

    result = sortBooksByYear(result, sortOrder === 'asc');
    
    setFilteredBooks(result);
  }, [books, authorFilter, sortOrder]);

  const changeAuthorFilter = (author) => {
    setAuthorFilter(author);
  };

  const toggleSortOrder = () => {
    setSortOrder(prevSort => prevSort === 'asc' ? 'desc' : 'asc');
  };

  return {
    filteredBooks,
    authorFilter,
    sortOrder,
    changeAuthorFilter,
    toggleSortOrder
  };
};

export default useBookFilter; 
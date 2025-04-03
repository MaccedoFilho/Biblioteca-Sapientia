import React, { useState, useEffect } from 'react';
import './styles.css';
import SearchBar from '../../components/SearchBar';

const MainLayout = ({ children, setCurrentPage, currentPage, setSearchTerm }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const handlePageChange = (page) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
  };
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    if (!mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };
  
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (mobileMenuOpen && !e.target.closest('.header-center-right') && !e.target.closest('.mobile-menu-btn')) {
        setMobileMenuOpen(false);
        document.body.style.overflow = 'auto';
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [mobileMenuOpen]);
  
  return (
    <div className="app">
      <header className={`app-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="header-content">
          <h1 className="logo" onClick={() => handlePageChange('home')}>
            Literária
          </h1>
          
          <button className="mobile-menu-btn" onClick={toggleMobileMenu} aria-label="Menu">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {mobileMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </>
              ) : (
                <>
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </>
              )}
            </svg>
          </button>
          
          <div className={`header-center-right ${mobileMenuOpen ? 'open' : ''}`}>
            <nav className="main-nav">
              <ul>
                <li 
                  className={currentPage === 'home' ? 'active' : ''} 
                  onClick={() => handlePageChange('home')}
                >
                  Início
                </li>
                <li 
                  className={currentPage === 'catalog' ? 'active' : ''} 
                  onClick={() => handlePageChange('catalog')}
                >
                  Catálogo
                </li>
                <li 
                  className={currentPage === 'wishlist' ? 'active' : ''} 
                  onClick={() => handlePageChange('wishlist')}
                >
                  Minha Lista
                </li>
                <li 
                  className={currentPage === 'about' ? 'active' : ''} 
                  onClick={() => handlePageChange('about')}
                >
                  Sobre
                </li>
              </ul>
            </nav>
            
            <SearchBar setSearchTerm={setSearchTerm} setCurrentPage={setCurrentPage} />
          </div>
        </div>
      </header>
      
      <main className="app-main">
        {children}
      </main>
      
      <footer className="app-footer">
        <div className="footer-content">
          <div className="footer-left">
            <div className="footer-logo">Literária</div>
            <p>Uma plataforma dedicada à literatura brasileira e estrangeira. Descubra, leia e compartilhe suas obras favoritas.</p>
            <div className="social-icons">
              <div className="social-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </div>
              <div className="social-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </div>
              <div className="social-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </div>
            </div>
          </div>
          
          <div className="footer-right">
            <div className="footer-links">
              <h4>Links Rápidos</h4>
              <ul>
                <li onClick={() => handlePageChange('home')}>Início</li>
                <li onClick={() => handlePageChange('catalog')}>Catálogo</li>
                <li onClick={() => handlePageChange('wishlist')}>Minha Lista</li>
                <li onClick={() => handlePageChange('about')}>Sobre</li>
              </ul>
            </div>
            
            <div className="footer-links">
              <h4>Categorias</h4>
              <ul>
                <li>Romance</li>
                <li>Poesia</li>
                <li>Fantasia</li>
                <li>Literatura Brasileira</li>
                <li>Clássicos</li>
              </ul>
            </div>
            
            <div className="footer-links">
              <h4>Contato</h4>
              <ul>
                <li>contato@literaria.com</li>
                <li>+55 (11) 1234-5678</li>
                <li>São Paulo, SP</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout; 
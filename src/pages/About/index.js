import React from 'react';
import './styles.css';

function About() {
  return (
    <div className="about-container">
      <h2>Sobre Nós</h2>
      
      <div className="about-content">
        <div className="about-text">
          <h3>Nossa Missão</h3>
          <p>
            A Biblioteca Sapientia tem como missão democratizar o acesso à literatura brasileira 
            e mundial, oferecendo um catálogo diversificado e de qualidade para todos os leitores.
          </p>
          
          <h3>Nossa História</h3>
          <p>
            Fundada em 2025, a Biblioteca Sapientia nasceu da paixão pela leitura e pela disseminação
            do conhecimento. Começamos como um pequeno projeto e crescemos para nos tornar uma 
            referência no mundo digital literário.
          </p>
          
          <h3>Nossos Valores</h3>
          <ul>
            <li><strong>Acessibilidade:</strong> Garantir que todos tenham acesso à literatura</li>
            <li><strong>Diversidade:</strong> Promover a diversidade de autores e obras</li>
            <li><strong>Inovação:</strong> Buscar sempre novas formas de melhorar a experiência de leitura</li>
            <li><strong>Qualidade:</strong> Oferecer um acervo cuidadosamente selecionado</li>
          </ul>
        </div>
        
        <div className="about-image">
          <div className="image-placeholder">
            <span>Biblioteca</span>
          </div>
        </div>
      </div>
      
      <div className="team-section">
        <h3>Nossa Equipe</h3>
        <div className="team-members">
          <div className="team-member">
            <div className="member-avatar">LA</div>
            <h4>Lucas Almeida</h4>
            <p>Fundador & CEO</p>
          </div>
          
          <div className="team-member">
            <div className="member-avatar">JS</div>
            <h4>João Silva</h4>
            <p>Curador Literário</p>
          </div>
          
          <div className="team-member">
            <div className="member-avatar">RM</div>
            <h4>Ricardo Macedo</h4>
            <p>Desenvolvedor</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About; 
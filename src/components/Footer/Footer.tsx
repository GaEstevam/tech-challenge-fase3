// src/components/Footer.tsx
import React from 'react';
import './Footer.css'; // Importando o arquivo CSS

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} MeuBlog. Todos os direitos reservados.</p>
    </footer>
  );
};

export default Footer;

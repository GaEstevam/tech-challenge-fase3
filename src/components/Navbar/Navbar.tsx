// src/components/Navbar.tsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUserCircle, FaSignInAlt } from 'react-icons/fa';
import { useAuth } from '../../contexts/AuthContext';
import './Navbar.css';

const Navbar: React.FC = () => {
  const { isAuthenticated, user, login, logout } = useAuth();
  const navigate = useNavigate();

  const handleAuthAction = () => {
    if (isAuthenticated) {
      logout();
      navigate('/'); // Redirecionar após logout
    } else {
      // Aqui você poderia abrir um modal de login ou navegar para uma página de login
      // Para simplificação, vamos realizar um login fictício
      // Exemplo:
      // login('professor', 'senha');
      navigate('/login'); // Supondo que você tenha uma página de login
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">MeuBlog</Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Início</Link>
        </li>
        <li>
          <Link to="/create">Criar Post</Link>
        </li>
        {isAuthenticated && user?.role === 'Professor' && (
          <li>
            <Link to="/admin">Admin</Link>
          </li>
        )}
        <li className="navbar-auth">
          <button onClick={handleAuthAction} className="auth-button" aria-label={isAuthenticated ? 'Logout' : 'Login'}>
            {isAuthenticated ? <FaUserCircle size={24} /> : <FaSignInAlt size={24} />}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

// src/components/Navbar.tsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUserCircle, FaSignInAlt } from 'react-icons/fa';
import { useAuth } from '../../contexts/AuthContext';
import './Navbar.css';

const Navbar: React.FC = () => {
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();

  const handleAuthAction = () => {
    if (isAuthenticated) {
      logout();
      navigate('/');
    } else {
      navigate('/login');
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/home">TechChallenge</Link>
      </div>
      <ul className="navbar-links">
        {isAuthenticated && user?.role === 'Professor' && (
          <li>
            <Link to="/create">Criar Post</Link>
          </li>
        )}
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

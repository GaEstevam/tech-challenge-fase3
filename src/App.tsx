// src/App.tsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';
import PostReadPage from './pages/PostReadPage';
import PostCreatePage from './pages/PostCreatePage';
import AdminPage from './pages/AdminPage';
import ProtectedRoute from './components/ProtectedRoute';
import LoginPage from './pages/LoginPage';
//import NotFoundPage from './pages/NotFoundPage';
import { AuthProvider } from './contexts/AuthContext';
import './App.css'; // Se estiver usando CSS Tradicional

import { Post } from './types';

const App: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([
    {
      id: 1, // Alterado para number
      title: 'Primeiro Post',
      author: 'Autor 1',
      description: 'Descrição do primeiro post',
      content: 'Conteúdo completo do primeiro post',
    },
    // Adicione mais posts conforme necessário
  ]);

  // Função para criar um novo post
  const handleCreate = (newPost: Omit<Post, 'id'>) => {
    const postWithId: Post = { id: Date.now(), ...newPost }; // Gera um id numérico
    setPosts([...posts, postWithId]);
  };

  // Função para deletar um post
  const handleDelete = (id: number) => { // Alterado para number
    setPosts(posts.filter(post => post.id !== id));
  };

  return (
    <AuthProvider>
      <Router>
        <div className="app-container">
          <Navbar />
          <main className="content">
            <Routes>
              <Route path="/" element={<HomePage posts={posts} />} />
              <Route path="/posts/:id" element={<PostReadPage posts={posts} />} />
              <Route path="/create" element={<PostCreatePage onCreate={handleCreate} />} />
              <Route
                path="/admin"
                element={
                  <ProtectedRoute requiredRole="Professor">
                    <AdminPage posts={posts} onDelete={handleDelete} />
                  </ProtectedRoute>
                }
              />
              <Route path="/login" element={<LoginPage />} />
              {/*<Route path="*" element={<NotFoundPage />} />*/}
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PostReadPage from './pages/PostReadPage';
import PostCreatePage from './pages/PostCreatePage';
import AdminPage from './pages/AdminPage';
import { Post } from './types';

const App: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  const handleCreate = (post: Omit<Post, 'id'>) => {
    setPosts([...posts, { ...post, id: posts.length + 1 }]);
  };

  const handleDelete = (id: number) => {
    setPosts(posts.filter(p => p.id !== id));
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage posts={posts} />} />
        <Route path="/posts/:id" element={<PostReadPage posts={posts} />} />
        <Route path="/create" element={<PostCreatePage onCreate={handleCreate} />} />
        <Route path="/admin" element={<AdminPage posts={posts} onDelete={handleDelete} />} />
      </Routes>
    </Router>
  );
};

export default App;

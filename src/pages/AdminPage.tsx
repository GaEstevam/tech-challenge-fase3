import React from 'react';
import { Link } from 'react-router-dom';
import { Post } from '../types';

interface AdminPageProps {
  posts: Post[];
  onDelete: (id: number) => void;
}

const AdminPage: React.FC<AdminPageProps> = ({ posts, onDelete }) => (
  <div>
    <h1>Administração de Posts</h1>
    {posts.map(post => (
      <div key={post.id}>
        <h3>{post.title}</h3>
        <Link to={`/posts/edit/${post.id}`}>Editar</Link>
        <button onClick={() => onDelete(post.id)}>Excluir</button>
      </div>
    ))}
  </div>
);

export default AdminPage;

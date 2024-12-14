import React from 'react';
import { Link } from 'react-router-dom';
import { Post } from '../../types';
import './PostItem.css';
import { useAuth } from '../../contexts/AuthContext';

interface PostItemProps {
  post: Post;
}

const PostItem: React.FC<PostItemProps> = ({ post }) => {
  const { user } = useAuth();

  return (
    <div className="post-item">
      <h3 className="post-title">{post.title}</h3>
      <p className="post-author">
        Autor: {post.creator?.username || 'Desconhecido'}
      </p>
      <p className="post-description">{post.description}</p>
      <Link to={`/posts/${post.id}`} className="read-more-link">
        Ler mais
      </Link>
      {user?.role === 'Professor' && (
        <Link to={`/edit/${post.id}`} className="edit-link">
          Editar
        </Link>
      )}
    </div>
  );
};

export default PostItem;

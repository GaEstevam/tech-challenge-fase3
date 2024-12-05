// src/components/PostItem.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Post } from '../../types';
import './PostItem.css'; // Certifique-se de que o CSS está sendo importado

interface PostItemProps {
  post: Post;
}

const PostItem: React.FC<PostItemProps> = ({ post }) => (
  <div className="post-item">
    <h3 className="post-title">{post.title}</h3>
    <p className="post-author">Autor: {post.author}</p>
    <p className="post-description">{post.description}</p>
    <Link to={`/posts/${post.id}`} className="read-more-link">Ler mais</Link>
  </div>
);

export default PostItem;

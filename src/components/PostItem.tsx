import React from 'react';
import { Link } from 'react-router-dom';
import { Post } from '../types';

interface PostItemProps {
  post: Post;
}

const PostItem: React.FC<PostItemProps> = ({ post }) => (
  <div className="post-item">
    <h3>{post.title}</h3>
    <p>Autor: {post.author}</p>
    <p>{post.description}</p>
    <Link to={`/posts/${post.id}`}>Ler mais</Link>
  </div>
);

export default PostItem;

import React from 'react';
import { useParams } from 'react-router-dom';
import { Post } from '../types';

interface PostReadPageProps {
  posts: Post[];
}

const PostReadPage: React.FC<PostReadPageProps> = ({ posts }) => {
  const { id } = useParams<{ id: string }>();
  const post = posts.find(p => p.id === parseInt(id || '', 10));

  if (!post) return <p>Post não encontrado!</p>;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <p>Autor: {post.author}</p>
    </div>
  );
};

export default PostReadPage;

import React, { useEffect, useState } from 'react';
import PostItem from '../components/PostItem';
import { getPosts } from '../services/api';
import { Post } from '../types';

const HomePage: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await getPosts();
      setPosts(data);
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <h1>Lista de Posts</h1>
      {posts.map(post => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
};

export default HomePage;

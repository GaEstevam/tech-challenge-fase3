import React from 'react';
import PostItem from '../../components/PostItem/PostItem';
import { Post } from '../../types';
import './HomePage.css'; // Importando o arquivo CSS

interface HomePageProps {
  posts: Post[];
}

const HomePage: React.FC<HomePageProps> = ({ posts }) => {
  return (
    <div className="homepage-container">
      <h1 className="homepage-title">Lista de Posts</h1>
      <div className="posts-list">
        {posts.map(post => (
          <PostItem key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;

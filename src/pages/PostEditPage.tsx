import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Post } from '../types';

interface PostEditPageProps {
  posts: Post[];
  onEdit: (updatedPost: Post) => void;
}

const PostEditPage: React.FC<PostEditPageProps> = ({ posts, onEdit }) => {
  const { id } = useParams<{ id: string }>(); // Pega o ID da URL
  const post = posts.find(p => p.id === parseInt(id || '', 10)); // Encontra o post correspondente

  const [title, setTitle] = useState<string>('');
  const [author, setAuthor] = useState<string>('');
  const [content, setContent] = useState<string>('');

  // Carrega os dados do post na primeira renderização
  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setAuthor(post.author);
      setContent(post.content);
    }
  }, [post]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (post) {
      onEdit({ ...post, title, author, content });
    }
  };

  if (!post) {
    return <p>Post não encontrado!</p>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Editar Post</h1>
      <div>
        <label>Título:</label>
        <input
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
      </div>

      <div>
        <label>Autor:</label>
        <input
          type="text"
          value={author}
          onChange={e => setAuthor(e.target.value)}
        />
      </div>

      <div>
        <label>Conteúdo:</label>
        <textarea
          value={content}
          onChange={e => setContent(e.target.value)}
        />
      </div>

      <button type="submit">Salvar Alterações</button>
    </form>
  );
};

export default PostEditPage;

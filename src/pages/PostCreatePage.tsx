import React, { useState } from 'react';
import { createPost } from '../services/api';

const PostCreatePage: React.FC = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await createPost({ title, author, content });
    alert('Post criado com sucesso!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Criar Post</h1>
      <input
        type="text"
        placeholder="Título"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Autor"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <textarea
        placeholder="Conteúdo"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default PostCreatePage;

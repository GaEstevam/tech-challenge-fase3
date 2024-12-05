// PostCreatePage.tsx
import React, { useState } from 'react';
import { Post } from '../types';  // Certifique-se de que a interface Post está sendo importada corretamente

interface PostCreatePageProps {
  onCreate: (post: Omit<Post, 'id'>) => void;
}

const PostCreatePage: React.FC<PostCreatePageProps> = ({ onCreate }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');
  const [description, setDescription] = useState('');  // Adicionando state para description

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const newPost: Omit<Post, 'id'> = { 
      title, 
      author, 
      content, 
      description  // Certifique-se de passar a descrição
    };
    
    onCreate(newPost); // Passa o novo post com a descrição
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
      <input
        type="text"
        placeholder="Descrição"
        value={description}
        onChange={(e) => setDescription(e.target.value)}  // Campo para descrição
      />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default PostCreatePage;

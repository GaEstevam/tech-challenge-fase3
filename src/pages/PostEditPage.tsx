import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Post } from '../types';

interface PostEditPageProps {
  posts: Post[];
  onEdit: (updatedPost: Post) => void;
}

const PostEditPage: React.FC<PostEditPageProps> = ({ posts, onEdit }) => {
  const { id } = useParams<{ id: string }>(); // Captura o ID da URL
  const post = posts.find((p) => p.id === parseInt(id || '', 10)); // Localiza o post pelo ID

  // Estados para os campos editáveis
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [themeId, setThemeId] = useState<number>(1);

  // Preenche os campos ao carregar o post
  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setContent(post.content);
      setDescription(post.description);
      setThemeId(post.themeId || 1);
    }
  }, [post]);

  // Submissão do formulário
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (post) {
      onEdit({
        ...post,
        title,
        content,
        description,
        themeId,
      });
      alert('Post atualizado com sucesso!');
    }
  };

  // Caso o post não seja encontrado
  if (!post) {
    return <p style={{ color: 'red' }}>Post não encontrado!</p>;
  }

  return (
    <div>
      <h1>Editar Post</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Título:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Descrição:</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Conteúdo:</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Theme ID:</label>
          <input
            type="number"
            value={themeId}
            onChange={(e) => setThemeId(Math.max(1, Number(e.target.value)))}
            required
          />
        </div>

        <button type="submit">Salvar Alterações</button>
      </form>
    </div>
  );
};

export default PostEditPage;

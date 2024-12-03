import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000', // URL do backend
  withCredentials: true, // Permitir cookies se necessário
});

// Função para login
export const login = async (username: string, password: string) => {
  const response = await api.post('/login', { username, password });
  return response.data;
};

// Função para obter posts
export const getPosts = async () => {
  const response = await api.get('/posts');
  return response.data;
};

// Função para criar um post
export const createPost = async (post: { title: string; content: string; author: string }) => {
  const response = await api.post('/posts', post);
  return response.data;
};

// Função para editar um post
export const editPost = async (id: number, post: { title: string; content: string; author: string }) => {
  const response = await api.put(`/posts/${id}`, post);
  return response.data;
};

// Função para deletar um post
export const deletePost = async (id: number) => {
  await api.delete(`/posts/${id}`);
};

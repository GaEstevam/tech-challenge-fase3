export interface Post {
  id: number;
  title: string;
  description: string;
  content: string;
  themeId: number; // Adicione themeId ao tipo Post
  creator?: {      // Creator é opcional
    username: string;
  };
}

// src/contexts/AuthContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { login as loginService } from '../services/api';

// Definir o tipo para o usuário
interface User {
  username: string;
  role: 'Aluno' | 'Professor';
}

// Atualizar a interface do contexto
interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);

  const login = async (username: string, password: string): Promise<boolean> => {
    try {
      // Supondo que loginService retorna um objeto com username e role
      const response = await loginService(username, password);
      setIsAuthenticated(true);
      setUser({
        username: response.username,
        role: response.role, // 'Aluno' ou 'Professor'
      });
      return true;
    } catch (error) {
      console.error('Login falhou', error);
      return false;
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    // Opcional: limpar tokens ou outras informações armazenadas
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  return context;
};

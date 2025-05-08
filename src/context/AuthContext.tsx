
// src/context/AuthContext.tsx
import { createContext, useContext, useState, ReactNode } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

interface AuthContextType {
  authToken: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: () => boolean;
  userRole: string | null;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [authToken, setAuthToken] = useState<string | null>(
    localStorage.getItem('authToken') || null
  );
  const [userRole, setUserRole] = useState<string | null>(
    localStorage.getItem('userRole') || null
  );
  const navigate = useNavigate();

  const login = async (email: string, password: string) => {
    try {
      const response = await axios.post('/api/auth/login', { email, password });
      const { token, role } = response.data;
      
      localStorage.setItem('authToken', token);
      localStorage.setItem('userRole', role);
      setAuthToken(token);
      setUserRole(role);
      
      // Redirect to admin dashboard after login
      navigate('/admin');
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userRole');
    setAuthToken(null);
    setUserRole(null);
    navigate('/login');
  };

  const isAuthenticated = () => {
    return authToken !== null;
  };

  return (
    <AuthContext.Provider value={{ authToken, login, logout, isAuthenticated, userRole }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
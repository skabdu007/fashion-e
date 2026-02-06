import React, { createContext, useState, useContext, useEffect } from 'react';

// Demo credentials database
const DEMO_USERS = {
  // Admin users
  'admin@fashionstore.com': {
    password: 'admin123',
    role: 'admin',
    name: 'Super Admin',
    id: 'admin_001'
  },
  'superadmin@fashionstore.com': {
    password: 'superadmin123',
    role: 'admin',
    name: 'Super Admin User',
    id: 'admin_002'
  },
  
  // Regular users
  'john@example.com': {
    password: 'user123',
    role: 'user',
    name: 'John Doe',
    id: 'user_001'
  },
  'jane@example.com': {
    password: 'user123',
    role: 'user',
    name: 'Jane Smith',
    id: 'user_002'
  },
  'alex@example.com': {
    password: 'user123',
    role: 'user',
    name: 'Alex Johnson',
    id: 'user_003'
  },
  
  // Vendor users
  'vendor@fashionstore.com': {
    password: 'vendor123',
    role: 'vendor',
    name: 'Fashion Vendor',
    storeName: 'Trendy Styles',
    id: 'vendor_001'
  },
  'store@example.com': {
    password: 'vendor123',
    role: 'vendor',
    name: 'Store Owner',
    storeName: 'Urban Fashion',
    id: 'vendor_002'
  }
};

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in from localStorage
    const storedUser = localStorage.getItem('fashionstore_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = (email, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const userData = DEMO_USERS[email];
        
        if (!userData) {
          reject(new Error('User not found'));
          return;
        }
        
        if (userData.password !== password) {
          reject(new Error('Invalid password'));
          return;
        }
        
        // Remove password from user object
        const { password: _, ...userWithoutPassword } = userData;
        const userWithEmail = {
          ...userWithoutPassword,
          email
        };
        
        // Save to state and localStorage
        setUser(userWithEmail);
        localStorage.setItem('fashionstore_user', JSON.stringify(userWithEmail));
        
        resolve(userWithEmail);
      }, 1000); // Simulate API delay
    });
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('fashionstore_user');
  };

  const register = (userData) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        // In a real app, this would make an API call
        const newUser = {
          ...userData,
          id: `user_${Date.now()}`,
          role: 'user' // Default role for new registrations
        };
        
        // Save to state and localStorage
        setUser(newUser);
        localStorage.setItem('fashionstore_user', JSON.stringify(newUser));
        
        resolve(newUser);
      }, 1000);
    });
  };

  const value = {
    user,
    login,
    logout,
    register,
    loading
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
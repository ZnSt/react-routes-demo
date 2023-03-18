import { createContext, useState } from 'react';

export const Context = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userName, cb) => {
    setUser(userName);
    cb();
  };

  const logout = cb => {
    setUser(null);
    cb();
  };

  const value = { user, login, logout };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default AuthProvider;

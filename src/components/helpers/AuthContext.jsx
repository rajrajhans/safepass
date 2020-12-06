import React, { useContext, useEffect, useState } from 'react';
import app from '../../utils/firebaseInit';
import { LoadingContext } from './LoadingContext';

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [pending, setPending] = useState(true);
  const { setIsLoading } = useContext(LoadingContext);

  useEffect(() => {
    app.auth().onAuthStateChanged(user => {
      setCurrentUser(user);
      setPending(false);
    });
  }, []);

  useEffect(() => {
    if (pending) setIsLoading(true);
    else setIsLoading(false);
  }, [pending]);

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

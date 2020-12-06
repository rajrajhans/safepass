import React, { createContext, useState } from 'react';

export const LoadingContext = createContext();

export const LoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  if (isLoading) {
    return <>Loading ||| </>;
  }

  return (
    <LoadingContext.Provider value={{ setIsLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};

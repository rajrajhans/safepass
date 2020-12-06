import React, { createContext, useEffect, useState } from 'react';

export const LoadingContext = createContext();

const applyLoadingStyles = () => {
  let loadingStyles = {
    height: '100%',
    width: '100%',
  };
  let loadingwrapper = document.getElementById('loadingWrapper');
  Object.assign(loadingwrapper.style, loadingStyles);
};

const cancelLoadingStyles = () => {
  let loadingStyles = {
    height: '0%',
    width: '0%',
  };
  let loadingwrapper = document.getElementById('loadingWrapper');
  Object.assign(loadingwrapper.style, loadingStyles);
};

export const LoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isLoading) applyLoadingStyles();
    else cancelLoadingStyles();
  }, [isLoading]);

  return (
    <LoadingContext.Provider value={{ setIsLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};

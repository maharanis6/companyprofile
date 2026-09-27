'use client';

import { createContext, useContext, useState } from 'react';

const FavoriteContext = createContext(undefined);

export function FavoriteProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (user) => {
    setFavorites((prevFavorites) => {
      const alreadyFavorite = prevFavorites.some(
        (item) => item.id === user.id
      );

      if (alreadyFavorite) {
        return prevFavorites;
      }

      return [...prevFavorites, user];
    });
  };

  const removeFavorite = (userId) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((item) => item.id !== userId)
    );
  };

  const isFavorite = (userId) => {
    return favorites.some((item) => item.id === userId);
  };

  const value = {
    favorites,
    addFavorite,
    removeFavorite,
    isFavorite,
  };

  return (
    <FavoriteContext.Provider value={value}>
      {children}
    </FavoriteContext.Provider>
  );
}

export function useFavorite() {
  const context = useContext(FavoriteContext);

  if (context === undefined) {
    throw new Error(
      'useFavorite harus dipakai di dalam <FavoriteProvider>'
    );
  }

  return context;
}
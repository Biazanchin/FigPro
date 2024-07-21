/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from 'react';

export const StickerContext = createContext();

export const StickerProvider = ({ children }) => {
  const [stickers, setStickers] = useState([]);

  useEffect(() => {
    const fetchStickers = async () => {
      try {
        const response = await fetch("http://localhost:5000/stickers");
        const data = await response.json();
        setStickers(data);
      } catch (error) {
        console.log("Error fetching stickers: ", error);
      }
    };
    fetchStickers();
  }, []);

  return (
    <StickerContext.Provider value={{ stickers, setStickers }}>
      {children}
    </StickerContext.Provider>
  );
};

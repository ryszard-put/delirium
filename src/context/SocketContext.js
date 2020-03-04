import React, { createContext, useState, useEffect } from 'react';

const SocketContext = createContext();

export const SocketProvider = ({ children }) => {
  const [message, setMessage] = useState(null);
  useEffect(() => {
    console.log('socket');
  }, []);
  return (
    <SocketContext.Provider value={message}>{children}</SocketContext.Provider>
  );
};

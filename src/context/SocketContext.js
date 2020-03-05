import React, { createContext, useState, useEffect } from 'react';
import io from 'socket.io-client';

export const SocketContext = createContext();

const socket = io('https://delirium-api.thesoban.pl');

export const SocketProvider = ({ children }) => {
  const [message, setMessage] = useState('buba');
  useEffect(() => {
    // socket.on('connection', () => console.log('connected'));
    // socket.on('test', me/sage => console.log(`${message} socket`));
    // socket.emit('message', 'kupa');
  }, []);
  return (
    <SocketContext.Provider value={message}>{children}</SocketContext.Provider>
  );
};

import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

let socket;

const SocketTest = () => {
  const [value, setValue] = useState('');
  useEffect(() => {
    socket = io('https://delirium-api.thesoban.pl');
    socket.on('connect', () => console.log('socket connected'));
    socket.on('haxy', res => console.log(res));
    return () => {
      socket.disconnect();
    };
  }, []);

  // const emitMessage = e => {
  //   e.preventDefault();
  //   socket.emit('message', value);
  // };

  return (
    <div>
      <input
        type='text'
        name='msg'
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <button
        type='button'
        onClick={e => {
          socket.emit('haxy', 'gówno');
        }}
      >
        Send message
      </button>
    </div>
  );
};

export default SocketTest;

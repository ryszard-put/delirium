import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = io('https://delirium-api.thesoban.pl');

const SocketTest = props => {
  const [value, setValue] = useState('');
  useEffect(() => {
    socket.on('connect', () => console.log('socket connected'));
  }, []);

  const emitMessage = e => {
    e.preventDefault();
    socket.emit('message', value);
  };

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
          emitMessage(e);
        }}
      >
        Send message
      </button>
    </div>
  );
};

export default SocketTest;

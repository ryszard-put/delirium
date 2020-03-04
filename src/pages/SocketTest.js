import React, { useContext } from 'react';

import { SocketContext } from '../context/SocketContext';

const SocketTest = () => {
  const value = useContext(SocketContext);
  return <div>d</div>;
};

export default SocketTest;

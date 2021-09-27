import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

/*
import express from 'express';
import socketio from 'socket.io';
import http from 'http';

import './index.css';
import App from './App';

const app = express();
const httpServer = http.createServer(app);
const io = new socketio.Server(httpServer);

io.on('connection', (socket)=>{
  console.log(`new connection: ${socket.id}`);
})

httpServer.listen(3000);
*/
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

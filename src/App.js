import React from 'react';
import Sidebar from './Sidebar'
import Chat from './chat'
import './App.css';

function App() {
  return (
    <div className="app">
       <div className="container">
        <Sidebar/>
        <Chat />
       </div>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import Chatbot from './modules/chatbot'
import useChatbot from './modules/chatbot/hooks/useChatbot'

function App() {

  return (
    <div className="App">
      <h1>Colheita do Bem</h1>
      <Chatbot />
    </div>
  );
}

export default App;

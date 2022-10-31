import React from 'react';
import css from './chatbot.module.css';
import ContainerMessages from './containerMessage';
import useChatbot from './hooks/useChatbot';

const Chatbot = () => {
 const { messages, handleSelectResponse, loadNextQuestion, sendResponse } = useChatbot('menu-principal');

  return (
    <div className={css.chatbot__container} >
      <ContainerMessages
        messages={messages}
        selectResponse={handleSelectResponse}
        loadNextQuestion={loadNextQuestion}
        sendResponse={sendResponse}
      />
    </div>
  )
}

export default Chatbot
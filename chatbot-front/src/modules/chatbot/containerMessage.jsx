import { Button, CircularProgress } from '@mui/material';
import React from 'react'
import css from './chatbot.module.css'
import Baloon from "./components/baloon";
import ButtonChat from "./components/button";

const ContainerMessages = ({ messages, selectResponse, loadNextQuestion, sendResponse }) => {
  const ref = React.useRef();
  const inputRef = React.useRef()

  React.useEffect(() => {
    const scrollValue = ref.current.scrollHeight - ref.current.clientHeight;
    ref.current.scrollTo(0, scrollValue);
  }, [messages])

  return (
    <div className={css.chatbot__container_chat} ref={ref}>
      { messages.map(  (chat, index)  => (
        <>
          <Baloon text={chat.message} type={chat.type}/>
          {chat.respostas.length > 0 && (
            <div>
              {
              chat.respostas
              .map( resp => 
                (
                  <>
                    {resp.tipo === 'btn' && <ButtonChat onClick={() => selectResponse(resp)} disabled={chat.disable}>{resp.descricao}</ButtonChat>}
                    {resp.tipo === 'input' && <><input placeholder={resp.descricao} disabled={chat.disable} className={css.chatbot__input} type="text" ref={inputRef} /><Button variant="contained" disabled={chat.disable} size="small" fullWidth onClick={() => sendResponse(inputRef.current.value, resp.field, resp.entity, resp.acao)}>Enviar</Button></>}
                  </>
                )
              )}
            </div>
          )} 
        </>
      ))}
      { loadNextQuestion && <CircularProgress /> }
    </div>
  )
}

export default ContainerMessages;
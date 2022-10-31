import React from 'react'

async function fetchQuestions(acao) {
  const data = await fetch(`http://127.0.0.1:8000/chatbot_cadastro_api/principal?acao=${acao}`, {
    method: 'GET'
  })
 
  return  await data.json();
}

async function fetchResponse(body) {
  const data = await fetch(`http://127.0.0.1:8000/chatbot_cadastro_api/resposta`, {
    method: 'POST',
    body: JSON.stringify(body),
     headers: {
      'Content-Type': 'application/json'
    },
  })

  return await data.json();
}

const useChatbot = (acao) => {
  const [ messages, setMessages ] = React.useState([])
  const [ loadNextQuestion, setLoadNextQuestion] = React.useState(false)
  const [sessionId, setSessionId] = React.useState('');

  React.useEffect(() => {
    fetchQuestions(acao).then( data => setMessages(old => [...old, {
      message: data.descricao,
      type: 'question',
      respostas: data.respostas
    }]))
  },[]);

  function handleSelectResponse(resp) {
    setMessages( data => [...data.map(data => ({...data, disable: true})), {
      message: resp.descricao,
      type: 'response',
      respostas: []
    }]);

    findNextQuestionWithAction(resp.acao)
  }

  function findNextQuestionWithAction(action) {
    setLoadNextQuestion(true);

    setTimeout(() => {
    fetchQuestions(action).then( newQuestion => {
      setLoadNextQuestion(false);
      setMessages( old => [...old, {
        message: newQuestion.descricao,
        type: 'question',
        respostas: newQuestion.respostas
      }]) 
    })
    }, 1000);
  }


  function sendResponse(response, field, entity, nextAction) {
    fetchResponse({sessionId, valor: response,field, entity, acao: nextAction}).then( newQuestion => {
      
      if (!sessionId) {
        setSessionId(newQuestion.data._id)
      }

      setMessages( old => [...old.map(data => ({...data, disable: true})), {
        message: newQuestion.question.descricao,
        type: 'question',
        respostas: newQuestion.question.respostas
      }]) 
    })
  }


  return {
    messages,
    handleSelectResponse,
    loadNextQuestion,
    sendResponse
  }
}

export default useChatbot;
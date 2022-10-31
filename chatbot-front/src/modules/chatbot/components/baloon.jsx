import css from './baloon.module.css'


const Baloon = ({ text, type }) => {
  const typeQuestion = type == 'question' ? css.chatbot__baloon_question : css.chatbot__baloon_response;

  return (
    <div className={`${css.chatbot__baloon} ${typeQuestion}`}>
      {text}
    </div>
  )
}

export default Baloon
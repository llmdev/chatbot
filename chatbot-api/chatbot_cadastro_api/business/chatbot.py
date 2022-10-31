from abc import abstractclassmethod

from chatbot_cadastro_api.business.question import Question
from chatbot_cadastro_api.business.response import Response


class Chatbot:

    abstractclassmethod
    def nextQuestion(actionName, sessionId = ''):
        question = Question()
        findedQuestion = question.find(actionName)
    
        if (findedQuestion.tipo == 'details' and sessionId ):
            question.replaceTokens(sessionId)
        
        return findedQuestion


    abstractclassmethod
    def saveResponse(request):
        response = Response()

        data = ''
        if request.data['sessionId'] != "":
            response.find(request)
            data = response.save(request)
        else:
            data = response.save(request)

        return data
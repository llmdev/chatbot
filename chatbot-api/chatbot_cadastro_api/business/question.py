from chatbot_cadastro_api.business.response import Response
from chatbot_cadastro_api.mongo_models import Cadastro
from ..models import Pergunta
from bson import ObjectId


class Question:
    pergunta = Pergunta

    def find(self,acao):
        question = Pergunta.objects.get(acao_name=acao)
        self.pergunta = question
        return question
    
    def replaceTokens(self, sessionId):
        cadastro = Cadastro.objects.get(_id=ObjectId(sessionId))

        for par in cadastro.data:
            self.pergunta.descricao = self.pergunta.descricao.replace('{' + par + '}', cadastro.data[par])


        
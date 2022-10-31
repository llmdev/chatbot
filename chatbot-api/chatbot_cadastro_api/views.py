import json
from django.shortcuts import render
from rest_framework.decorators import api_view
from django.http.response import JsonResponse

from chatbot_cadastro_api.business.chatbot import Chatbot

from .business import question, response
from .serializers import PerguntaSerializer, CadastroSerializer

from rest_framework.decorators import api_view
from rest_framework.decorators import parser_classes
from rest_framework.parsers import JSONParser
from rest_framework.response import Response
from bson import json_util

def parse_json(data):
    return json.loads(json_util.dumps(data))

# Create your views here.
@api_view(['GET'])
def obterPergunta(request):
    question = Chatbot.nextQuestion(request.GET.get('acao'))
    
    questionSerialized = PerguntaSerializer(question)
    resp = JsonResponse(questionSerialized.data, safe=True)
    return resp

@api_view(['POST'])
@parser_classes([JSONParser])
def salvarResposta(request):
    
    registration = Chatbot.saveResponse(request)
    registrationSerialized = CadastroSerializer(registration)
    
    question = Chatbot.nextQuestion(request.data['acao'], request.data['sessionId'])
    questionSerialized = PerguntaSerializer(question)
   
    
    return JsonResponse({'question':questionSerialized.data, 'data': registrationSerialized.data }, safe=True)

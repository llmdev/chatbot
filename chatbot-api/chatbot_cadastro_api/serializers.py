from rest_framework import serializers

from chatbot_cadastro_api.mongo_models import Cadastro

from .models import Resposta, Pergunta

class RespostaSerializer(serializers.ModelSerializer):

    class Meta:

        model = Resposta
        fields = '__all__'



class PerguntaSerializer(serializers.ModelSerializer):

    respostas = RespostaSerializer(many=True)

    class Meta:

        model = Pergunta
        fields = '__all__'

class CadastroSerializer(serializers.ModelSerializer):

    class Meta:

        model = Cadastro
        fields = '__all__'
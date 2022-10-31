
from django.urls import path
from . import views

urlpatterns = [
    path('principal', views.obterPergunta, name='obter-pergunta'),
    path('resposta', views.salvarResposta, name='salvar-resposta'),
]

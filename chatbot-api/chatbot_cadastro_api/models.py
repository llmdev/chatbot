from operator import mod
from django.db import models

# Create your models here.
class Resposta(models.Model):
    descricao = models.TextField()
    acao = models.TextField()
    tipo = models.TextField()
    field = models.TextField()
    entity = models.TextField()


class Pergunta(models.Model):
    acao_name = models.TextField()
    tipo = models.TextField(default="")
    descricao = models.TextField()
    respostas = models.ManyToManyField(Resposta)
    acao_anterior = models.TextField()
    acao_principal = models.TextField()



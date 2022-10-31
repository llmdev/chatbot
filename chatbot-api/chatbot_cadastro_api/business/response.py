
from abc import abstractclassmethod
from asyncio.windows_events import NULL
from datetime import datetime

from chatbot_cadastro_api.mongo_models import Cadastro

from bson import ObjectId

class Response(): 

    cadastro =  NULL

    def save(self, request):
        value   = request.data['valor']
        field   = request.data['field']
        entity  = request.data['entity']

        if request.data['sessionId']:
            self.cadastro.updated_at = datetime.now()
            self.cadastro.data = { **self.cadastro.data, field: value }
           
            self.cadastro.save()

            return self.cadastro
        else:
            cadastro = Cadastro()
            cadastro.created_at = datetime.now()
            cadastro.data = { field: value }
            cadastro.entity = entity
            cadastro.save()
            return cadastro
    
    def find(self, request):
        id  = ObjectId(request.data['sessionId'])
        cadastro = Cadastro.objects.get(_id=id)

        self.cadastro = cadastro
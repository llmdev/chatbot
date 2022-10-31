from djongo import models

class Cadastro(models.Model):
    _id=models.ObjectIdField()
    data=models.JSONField(default={})
    entity=models.TextField(default="")
    created_at=models.DateTimeField()
    updated_at=models.DateTimeField()


class Log(models.Model):
    _id=models.ObjectIdField()
    description=models.TextField()
    created_at=models.DateField()

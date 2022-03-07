from django.db import models

# Create your models here.

class React(models.Model):
    indicator = models.CharField(max_length=100)
    county = models.CharField(max_length=100)
    period_from = models.CharField(max_length=100)
    period_to = models.CharField(max_length=100)
    
    # khis = models.CharField(max_length=100)
    # datim = models.CharField(max_length=100)
    # adt = models.CharField(max_length=100)
    # commodity = models.CharField(max_length=100)

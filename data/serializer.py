from rest_framework import serializers

from . models import *

class ReactSerializer(serializers.ModelSerializer):
    class Meta:
        model = React
        fields = ['indicator', 'county', 'period_from', 'period_to']
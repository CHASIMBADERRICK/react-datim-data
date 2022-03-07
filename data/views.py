from email import header
from urllib import response
from django.shortcuts import render
from rest_framework.views import APIView
from . models import *
from rest_framework.response import Response
from . serializer import *

import xlsxwriter
import csv
from django.http import HttpResponse
import requests

# def index(request):
    

def get_headers(request):
    all_headers = {}
    if 'name' in request.GET:
        name = request.GET['name']
        url = 'https://hiskenya.org/api/29/analytics.json?dimension=dx:TqhUjblmU6n;cbUoZG6mlS7;QISrDYwXnMw;ISGNo6jMJlI;oTjp04eBIaV;y6Vi9uqabo4;SJL4k6Gl53C;wbJOu4h2SSz;GSEmLUnrvzj;Jbu4if6gtDp;AQsTt7jtKbt;oOOnacUi9Jm;EhZQp3PTA3C;e93GKJTHKAX;yNCUlEYkmyA;pR7VzBydoj3&dimension=pe:201812&dimension=ou:LEVEL-5;vvOK1BxTbet&displayProperty=NAME&outputIdScheme=UID' % header
        response = request.get(url)
        data = response.json()
        headers = data['headers']
        
       


def home(request):
    # Create an new Excel file and add a worksheet.
    workbook = xlsxwriter.Workbook('data.xlsx')
    worksheet = workbook.add_worksheet()

    # Widen the first five column to make the text clearer.
    worksheet.set_column('A:A', 20)
    worksheet.set_column('B:B', 20)
    worksheet.set_column('C:C', 20)
    worksheet.set_column('D:D', 20)
    worksheet.set_column('E:E', 20)

    # Add a bold format to use to highlight cells.
    bold = workbook.add_format({'bold': True})

    # Write some simple text.
    worksheet.write('A1', 'Number')
    worksheet.write('B1', 'Indicator')
    worksheet.write('C1', 'county')
    worksheet.write('D1', 'Period From')
    worksheet.write('E1', 'Period To')

    # Text with formatting.
    worksheet.write('A2', '1', bold)

    # Write some numbers, with row/column notation.
    # worksheet.write(2, 0, 123)
    # worksheet.write(3, 0, 123.456)

    # Insert an image.
    # worksheet.insert_image('B5', 'logo.png')

    workbook.close()

class ReactView(APIView):
    serializer_class = ReactSerializer
    
    def get(self,request):
        detail = [ {"indicator": detail.indicator,"county": detail.county,"period_from": detail.period_from,"period_to": detail.period_to}
                   for detail in React.objects.all()]
        return Response(detail)
    
    
    def post(self, request):
        
        serializer = ReactSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)
        
        

       


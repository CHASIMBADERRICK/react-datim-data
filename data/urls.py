from django.urls import path
from .views import ReactView

urlpatterns = [
    
    path('', ReactView.as_view() ,name="something")
]

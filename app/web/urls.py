from django.contrib import admin
from django.urls import path,include
from .views import *

urlpatterns = [
    path('', HomeView.as_view(template_name="index.html"))
]

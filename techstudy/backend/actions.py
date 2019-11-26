from rest_framework import generics, status, views, viewsets
from django.shortcuts import get_object_or_404
from rest_framework.decorators import action
from rest_framework.exceptions import NotFound
from rest_framework.response import Response
from django.conf import settings
import os
from .models import Tech
from .tech_serializer import TechSerializer

class TechViewSet(viewsets.ModelViewSet):
    queryset = Tech.objects.all()
    serializer_class = TechSerializer

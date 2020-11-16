from rest_framework import generics, status, views, viewsets
from django.shortcuts import get_object_or_404
from rest_framework.decorators import action
from rest_framework.exceptions import NotFound
from rest_framework.response import Response
from django.conf import settings
from converter import Converter
import os
from .models import Tech
from .tech_serializer import TechSerializer
# from webm import webm
import subprocess

class NewBranchViewSet(viewsets.ModelViewSet):
    queryset = Tech.objects.all()
    serializer_class = TechSerializer

    @action(["get"], detail=False, name='convert-webm')
    def techlist(self, request):
        techlist = Tech.objects.all()
        serializer = TechSerializer(techlist)

        return Response(serializer.data, status=status.HTTP_200_OK)

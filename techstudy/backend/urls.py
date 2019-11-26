from django.urls import path
from rest_framework.routers import DefaultRouter
from .actions import TechViewSet

urlpatterns = []

router = DefaultRouter()
router.register("tech", TechViewSet, basename='tech')

urlpatterns += router.urls
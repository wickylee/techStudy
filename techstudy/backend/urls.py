from django.urls import path
from rest_framework.routers import DefaultRouter
from .actions import TechViewSet
from .newbrand_actions import NewBranchViewSet

urlpatterns = []

router = DefaultRouter()
router.register("tech", TechViewSet, basename='tech')
router.register("newbranch", NewBranchViewSet, basename='newbranch')

urlpatterns += router.urls
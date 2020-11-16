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

class TechViewSet(viewsets.ModelViewSet):
    queryset = Tech.objects.all()
    serializer_class = TechSerializer

    @action(["get"], detail=True, name='convert-webm')
    def convert(self, request,  pk=None):
        video_input =  settings.MEDIA_ROOT + "\\john-wick.mov"
        video_output = settings.MEDIA_ROOT + "\\john-wick.webm"
        self.convert_video(video_input, video_output)
        
        resp = {"convert", "starting"}
        return Response(resp, status=status.HTTP_200_OK)

    def convert_video(self, video_input, video_output):
        cmds = ['webm', '-i', video_input, video_output]
        #subprocess.Popen(cmds,stdout=settings.MEDIA_ROOT + "\\convert.log")
        with open(settings.MEDIA_ROOT + "\\convert.log", "w") as log:
            self.run(cmds, log)

        #subprocess.run(["ls", "-l"])  

    def run(self, cmd, logfile):
        p = subprocess.Popen(cmd, shell=True, universal_newlines=True, stdout=logfile)
        p.wait()
        return p

        # conv = Converter()

        # info = conv.probe(video_input)

        #print(info)
        # convert = conv.convert('test/test1.avi', video_output, {
        #     'format': 'mp4',
        #     'audio': {
        #         'codec': 'aac',
        #         'samplerate': 11025,
        #         'channels': 2
        #     },
        #     'video': {
        #         'codec': 'hevc',
        #         'width': 720,
        #         'height': 400,
        #         'fps': 25
        #     }})
        
        #ffmpeg -i input-file.mp4 -c:v libvpx -crf 10 -b:v 1M -c:a libvorbis output-file.webm
        
        # subprocess.Popen(
        #     conv.convert('test/test1.avi', video_output, {
        #     'format': 'mp4',
        #     'audio': {
        #         'codec': 'aac',
        #         'samplerate': 11025,
        #         'channels': 2
        #     },
        #     'video': {
        #         'codec': 'hevc',
        #         'width': 720,
        #         'height': 400,
        #         'fps': 25
        #     }})
        # )

        # for timecode in convert:
        #     print(f'\rConverting ({timecode:.2f}) ...')

        # subprocess.Popen(ffmpeg
        #         .input(video_input, ss=time)
        #         .filter('scale', width, -1)
        #         .output(video_output, vframes=1)
        #         .overwrite_output()
        #         .run(capture_stdout=True, capture_stderr=True))


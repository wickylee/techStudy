from django.db import models

# Create your models here.
class Tech(models.Model):
    name = models.CharField(max_length=1024, blank=False, default='Key')
    content = models.CharField(max_length=1024, blank=False, default='')

    class Meta:
        ordering = ('name',)

    def __str__(self):
        return "%s : %s" % (self.name, self.content)
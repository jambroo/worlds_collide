from django.db import models

class Trip(models.Model):
    src = models.CharField(max_length=100)
    dest = models.CharField(max_length=100)

    class Meta:
        db_table = "trips"

def __str__(self):
    return "Trip from %s to %s." % (self.src, self.dest)

from tastypie.resources import ModelResource
from api.models import Trip
from tastypie.authorization import Authorization

class TripResource(ModelResource):
    class Meta:
        queryset = Trip.objects.all()
        resource_name = 'trip'
        authorization = Authorization()

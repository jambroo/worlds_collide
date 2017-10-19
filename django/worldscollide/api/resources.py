from tastypie.resources import ModelResource
from tastypie.http import HttpResponse
from api.models import Trip
from tastypie.authorization import Authorization

class TripResource(ModelResource):
    class Meta:
        queryset = Trip.objects.all()
        resource_name = 'trips'
        authorization = Authorization()
        max_limit = None
        collection_name = 'trips'
        always_return_data = True

class TripsController < ApplicationController
  def save
  end

  def list
    @trips = Trip.all
    render json: @trips
  end
end

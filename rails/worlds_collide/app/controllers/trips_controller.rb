class TripsController < ApplicationController
  def new
    @trip = Trip.new(trip_params)
    if @trip.valid?
      @trip.save
      render json: {response: 0, trip: @trip}
    else
      render json: {respone: 1}
    end
  end

  def list
    @trips = Trip.all
    render json: @trips
  end

  def connected
    params.require(:dest)
    dest = params[:dest]

    # Unsafe
    render json: {response: Trip.where(dest: dest)}
  end

  def trip_params
    params.require(:trip).permit(:src, :dest)
  end
end

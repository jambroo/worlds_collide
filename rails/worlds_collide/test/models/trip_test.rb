require 'test_helper'

class TripTest < ActiveSupport::TestCase
  test "require source, destination to save" do
    trip = Trip.new
    assert_not trip.save

    trip.src = "zz"
    assert_not trip.save

    trip.dest = "zz"
    assert trip.save
  end
end

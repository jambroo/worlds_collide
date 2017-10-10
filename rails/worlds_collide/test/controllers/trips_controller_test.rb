require 'test_helper'

class TripsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @trip = trips(:one)
  end

  test "should get index" do
    get trips_url, as: :json
    assert_response :success
  end

  test "should create trip" do
    assert_difference('Trip.count') do
      post trips_new_url, params: { trip: { src: "a", dest: "b" } }, as: :json
    end

    assert_response 200
  end

  test "should show trips" do
    get trips_url(@trip), as: :json
    assert_response :success
  end
end

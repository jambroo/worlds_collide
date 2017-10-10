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

  test "should show connected trips" do
    # Add a trip and look for connected
    post trips_new_url, params: { trip: { src: "a", dest: "b" } }, as: :json
    post trips_new_url, params: { trip: { src: "c", dest: "d" } }, as: :json
    get trips_connected_url({ "dest": "b" }), as: :json

    response = JSON.parse(@response.body)["response"]
    assert_equal response.length, 1
    assert_equal response[0]["src"], "a"
  end
end

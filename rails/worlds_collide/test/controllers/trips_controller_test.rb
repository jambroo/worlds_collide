require 'test_helper'

class TripsControllerTest < ActionDispatch::IntegrationTest
  test "should get save" do
    get trips_save_url
    assert_response :success
  end

end

require "test_helper"

class BannersControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get banners_index_url
    assert_response :success
  end
end

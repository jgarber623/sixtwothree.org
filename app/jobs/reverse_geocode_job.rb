class ReverseGeocodeJob < ApplicationJob
  queue_as :default

  def perform(location)
    location.reverse_geocode
  end
end

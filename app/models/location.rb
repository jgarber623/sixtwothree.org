class Location < ApplicationRecord
  validates :latitude, :longitude, numericality: true, presence: true

  after_save :enqueue_reverse_geocode, if: -> { latitude_changed? || longitude_changed? }

  belongs_to :locatable, polymorphic: true

  def map_url
    "https://www.openstreetmap.org/#map=15/#{latitude}/#{longitude}"
  end

  # rubocop:disable Metrics/AbcSize
  def reverse_geocode
    return if place.nil?

    update(
      formatted_address: place.formatted_address,
      street_address: place.street_address,
      neighborhood: place.neighborhood,
      locality: place.city,
      region: place.state,
      region_code: place.state_code,
      postal_code: place.postal_code,
      country: place.country,
      country_code: place.country_code
    )
  end
  # rubocop:enable Metrics/AbcSize

  private

  def enqueue_reverse_geocode
    ReverseGeocodeJob.perform_later(self)
  end

  def place
    @place ||= Geocoder.search("#{latitude},#{longitude}").first
  end
end

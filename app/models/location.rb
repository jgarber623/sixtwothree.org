class Location < ApplicationRecord
  validates :latitude, :longitude, presence: true, numericality: true

  belongs_to :locatable, polymorphic: true
end

class Location < ApplicationRecord
  validates :latitude, :longitude, numericality: true, presence: true

  belongs_to :locatable, polymorphic: true
end

class Article < ApplicationRecord
  include FriendlyId
  include Locatable

  validates :title, :slug, :content, presence: true

  has_one :location, as: :locatable

  friendly_id :title

  self.per_page = 10
end

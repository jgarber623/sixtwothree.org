class Article < ApplicationRecord
  include FriendlyId
  include Locatable
  include Publishable
  include Redcarpetable
  include Syndicatable
  include Taggable

  friendly_id :name
  redcarpet :content, :name, :summary

  validates :content, :name, :slug, presence: true
  validates :slug, uniqueness: true

  self.per_page = 10
end

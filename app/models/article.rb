class Article < ApplicationRecord
  include FriendlyId
  include Locatable
  include Publishable
  include Redcarpetable
  include Syndicatable
  include Taggable

  validates :title, :slug, :content, presence: true
  validates :slug, uniqueness: true

  friendly_id :title

  redcarpet :content, :summary, :title

  self.per_page = 10
end

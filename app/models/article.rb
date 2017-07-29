class Article < ApplicationRecord
  include FriendlyId
  include Locatable
  include Publishable
  include Redcarpetable
  include Syndicatable
  include Taggable

  friendly_id :title
  redcarpet :content, :summary, :title

  validates :content, :slug, :title, presence: true
  validates :slug, uniqueness: true

  self.per_page = 10
end

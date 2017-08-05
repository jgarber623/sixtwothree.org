module Publishable
  extend ActiveSupport::Concern

  included do
    scope :published, -> { where('published_at IS NOT NULL').order(published_at: :asc) }
  end
end

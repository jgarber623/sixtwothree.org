module Publishable
  extend ActiveSupport::Concern

  included do
    default_scope { order('created_at DESC') }

    scope :published, -> { where('published_at IS NOT NULL') }
  end
end

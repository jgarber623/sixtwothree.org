module Syndicatable
  extend ActiveSupport::Concern

  included do
    has_many :syndications, as: :syndicatable, dependent: :destroy
  end

  def sorted_syndications
    syndications.sort_by { |syndication| syndication.name.downcase }
  end
end

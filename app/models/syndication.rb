class Syndication < ApplicationRecord
  KNOWN_HOSTS = {
    'archive.org' => 'Internet Archive',
    'facebook.com' => 'Facebook',
    'flickr.com' => 'Flickr',
    'instagram.com' => 'Instagram',
    'medium.com' => 'Medium',
    'twitter.com' => 'Twitter'
  }.freeze

  validates :url, format: { with: %r{\Ahttps?://} }, presence: true, uniqueness: true

  belongs_to :syndicatable, polymorphic: true

  def name
    host = URI.parse(url).host

    KNOWN_HOSTS.key?(host) ? KNOWN_HOSTS[host] : host
  end
end
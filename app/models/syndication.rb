class Syndication < ApplicationRecord
  KNOWN_HOSTS = {
    'archive.org' => 'Internet Archive',
    'facebook.com' => 'Facebook',
    'flickr.com' => 'Flickr',
    'instagram.com' => 'Instagram',
    'medium.com' => 'Medium',
    'twitter.com' => 'Twitter'
  }.freeze

  belongs_to :syndicatable, optional: true, polymorphic: true

  validates :url, format: { with: URI.regexp }, presence: true, uniqueness: true

  def name
    KNOWN_HOSTS.key?(host) ? KNOWN_HOSTS[host] : host
  end

  private

  def host
    @host ||= URI.parse(url).host.gsub(/\Awww\./, '')
  end
end

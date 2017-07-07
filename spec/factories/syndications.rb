FactoryGirl.define do
  sequence :url { |n| "http://example.com/#{n}" }

  factory :syndication do
    url
  end
end

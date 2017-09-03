FactoryGirl.define do
  sequence :name { |n| "Test Article Title #{n}" }

  factory :article do
    name
    content 'Test article content.'

    trait :published do
      published_at { Time.now.utc }
    end

    trait :tagged do
      tag_list 'government, politics, White House'
    end

    factory :published_article, traits: [:published]
    factory :published_tagged_article, traits: [:published, :tagged]
  end
end

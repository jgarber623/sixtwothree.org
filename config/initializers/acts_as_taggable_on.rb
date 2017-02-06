ActsAsTaggableOn.remove_unused_tags = true

ActsAsTaggableOn::Tag.class_eval do
  include FriendlyId

  friendly_id :name, use: :slugged
end

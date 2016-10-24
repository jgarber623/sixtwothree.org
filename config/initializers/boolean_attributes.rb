BOOLEAN_ATTRIBUTES = %w(aria-hidden).to_set
BOOLEAN_ATTRIBUTES.merge(BOOLEAN_ATTRIBUTES.map(&:to_sym))
ActionView::Helpers::TagHelper::BOOLEAN_ATTRIBUTES.merge(BOOLEAN_ATTRIBUTES)

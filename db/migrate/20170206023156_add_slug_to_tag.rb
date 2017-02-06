class AddSlugToTag < ActiveRecord::Migration[5.0]
  def change
    add_column :tags, :slug, :text
  end
end

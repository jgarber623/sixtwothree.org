class AddSlugToTag < ActiveRecord::Migration[5.1]
  def change
    add_column :tags, :slug, :text
  end
end

class CreateArticles < ActiveRecord::Migration[5.1]
  def change
    create_table :articles do |t|
      t.text :name, null: false
      t.text :slug, null: false
      t.text :content, null: false
      t.text :summary
      t.datetime :published_at

      t.timestamps
    end
  end
end

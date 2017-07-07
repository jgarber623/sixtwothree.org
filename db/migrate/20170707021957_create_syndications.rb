class CreateSyndications < ActiveRecord::Migration[5.1]
  def change
    create_table :syndications do |t|
      t.text :url, null: false
      t.references :syndicatable, polymorphic: true, index: true

      t.timestamps
    end
  end
end

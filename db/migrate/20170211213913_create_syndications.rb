class CreateSyndications < ActiveRecord::Migration[5.0]
  def change
    create_table :syndications do |t|
      t.text :url, null: false
      t.references :syndicatable, polymorphic: true, index: true
    end
  end
end

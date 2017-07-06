class CreateLocations < ActiveRecord::Migration[5.1]
  def change
    create_table :locations do |t|
      t.float :latitude, null: false
      t.float :longitude, null: false
      t.text :formatted_address
      t.text :street_address
      t.text :neighborhood
      t.text :locality
      t.text :region
      t.text :region_code
      t.text :postal_code
      t.text :country
      t.text :country_code
      t.references :locatable, polymorphic: true, index: true

      t.timestamps
    end
  end
end

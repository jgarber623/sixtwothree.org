# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170205025407) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "articles", force: :cascade do |t|
    t.text     "title",        null: false
    t.text     "slug",         null: false
    t.text     "content",      null: false
    t.text     "summary"
    t.datetime "published_at"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
  end

  create_table "locations", force: :cascade do |t|
    t.float    "latitude",          null: false
    t.float    "longitude",         null: false
    t.text     "formatted_address"
    t.text     "street_address"
    t.text     "neighborhood"
    t.text     "locality"
    t.text     "region"
    t.text     "region_code"
    t.text     "postal_code"
    t.text     "country"
    t.text     "country_code"
    t.string   "locatable_type"
    t.integer  "locatable_id"
    t.datetime "created_at",        null: false
    t.datetime "updated_at",        null: false
    t.index ["locatable_type", "locatable_id"], name: "index_locations_on_locatable_type_and_locatable_id", using: :btree
  end

end

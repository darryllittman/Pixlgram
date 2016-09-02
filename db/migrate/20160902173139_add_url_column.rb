class AddUrlColumn < ActiveRecord::Migration
  def change
    add_column :photos, :url, :string, null: false
    add_index :photos, :url
  end
end

class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :username, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.string :full_name
      t.text :bio
      t.integer :profile_pic_id
      # t.integer :photos
      # t.integer :follower_id
      # t.integer :follow_id

      t.timestamps null: false
    end

    add_index :users, :username, unique: true
  end
end

# frozen_string_literal: true

class CreateUsers < ActiveRecord::Migration[6.0]
  def self.up
    create_table :users do |t|
      ## Devise::DatabaseAuthenticatable
      t.string :email,              null: false, default: ""
      t.string :encrypted_password, null: false, default: ""

      ## Devise::Rememberable
      t.datetime :remember_created_at
      t.timestamps null: false

      # Profile
      t.string :name
      t.string

    end

    add_index :users, :email,                unique: true
  end

  def self.down
    drop_table :users
  end
end

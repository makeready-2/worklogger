# frozen_string_literal: true

class CreateWorkLogs < ActiveRecord::Migration[6.0]
  def change
    create_table :work_logs do |t|
      t.time :start
      t.time :end
      t.string :status
      t.integer :user_id
      t.jsonb :pending_edits

      t.timestamps
    end

    add_index :work_logs, %i[user_id start], unique: true
  end
end

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
  end
end

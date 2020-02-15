class WorkLog < ApplicationRecord
  belongs_to :user

  def serialize
    attributes.symbolize_keys.slice(
      :start,
      :end,
      :status,
      :pending_edits
    ).to_json
  end
end

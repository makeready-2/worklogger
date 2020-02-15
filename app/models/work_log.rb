class WorkLog < ApplicationRecord
  belongs_to :user

  def to_json(*_args)
    attributes.symbolize_keys.slice(
      :start,
      :end,
      :status,
      :pending_edits
    ).to_json
  end
end

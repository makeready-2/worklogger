# frozen_string_literal: true
require 'action_view'

class WorkLog < ApplicationRecord
  include ActionView::Helpers::DateHelper
  belongs_to :user

  def serialize
    attributes.symbolize_keys.slice(
      :id,
      :end,
      :status,
      :pending_edits
    ).merge(
      age: humanized_age,
      start: humanized_time(start),
      end: humanized_time(self.end)
    )
  end

  private

  def humanized_age
    distance_of_time_in_words(start, (self.end || Time.now))
  end

  def humanized_time(datetime)
    datetime.to_s
  end
end

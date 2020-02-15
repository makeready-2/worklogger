# frozen_string_literal: true

# Join table
class UserRole < ApplicationRecord
  belongs_to :user
  belongs_to :role
end

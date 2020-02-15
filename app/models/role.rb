# frozen_string_literal: true

# Authorization tags for Users.
class Role < ApplicationRecord
  ROLES = %i[admin supervisor].freeze

  has_many :user_roles
  has_many :users, through: :user_roles

  class << self
    def get(name)
      find_by(name: name)
    end

    def method_missing(method_name, *args, &block)
      args.empty? && block.nil? ? get(method_name) : super
    end

    def respond_to_missing?(method_name, _include_private = false)
      ROLES.include?(method_name) || super
    end
  end
end

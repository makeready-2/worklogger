class User < ApplicationRecord
  devise :database_authenticatable, :registerable, :rememberable, :validatable

  belongs_to :supervisor, class_name: 'User', optional: true
  has_many :reports, class_name: 'User', foreign_key: :supervisor_id
  has_many :work_logs
  has_many :user_roles
  has_many :roles, through: :user_roles
end

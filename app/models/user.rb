class User < ApplicationRecord
  devise :database_authenticatable, :registerable, :rememberable, :validatable

  belongs_to :supervisor, class_name: 'User', optional: true
  has_many :reports, class_name: 'User', foreign_key: :supervisor_id
end

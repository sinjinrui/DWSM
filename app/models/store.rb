class Store < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  password_regex = /\A(?=.*?[a-z])(?=.*?\d)[a-z\d]{6,100}\z/i.freeze

  with_options presence: true do
    validates :name
    validates :email
    validates :password, format: { with: password_regex }
  end

  has_many :staffs
  has_many :tasks
end

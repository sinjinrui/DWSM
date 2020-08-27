class Task < ApplicationRecord

with_options presence: true do
  validates :name
  validates :color
  validates :store_id
end

belongs_to :store
end

class Staff < ApplicationRecord
  extend ActiveHash::Associations::ActiveRecordExtensions

  with_options presence: true do
    validates :name
    validates :store_id
    validates :rank_id, numericality: { other_than: 1 }
  end

  belongs_to :store
  belongs_to_active_hash :rank

end

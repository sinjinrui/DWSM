require 'rails_helper'

describe Staff do
  describe "#create" do

    context "登録されない" do

      before do
        @staff = build(:staff, name: nil, rank_id: 1)
      end
      
      it 'nameが空だと登録されない' do
        @staff.valid?
        expect(@staff.errors[:name]).to include("が入力されていません")
      end

      it 'rank_idの値が1だと保存されない' do
        @staff.valid?
        expect(@staff.errors[:rank_id]).to include("を選択して下さい")
      end
      
    end
    
  end
end
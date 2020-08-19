require 'rails_helper'
 
describe Store do
  describe '#create' do
    context '登録されない' do

      before do
        @store = build( :store, name: nil, email: nil, password: nil, password_confirmation: nil )
      end

      it 'nameが空だと登録されない' do
        @store.valid?
        expect(@store.errors[:name]).to include("が入力されていません")
      end

      it 'emailが空だと登録されない' do
        @store.valid?
        expect(@store.errors[:email]).to include("が入力されていません")
      end

      it 'emailが重複していると登録されない' do
        create(:store, email: "test@mail.com")
        store = build(:store, email: "test@mail.com")
        store.valid?
        expect(store.errors[:email]).to include("は既に使用されています")
      end

      it 'passwordが空だと登録されない' do
        @store.valid?
        expect(@store.errors[:password]).to include("が入力されていません")
      end

      it 'passwordの値とpassword_confirmationの値が異なると登録されない' do
        store = build(:store, password: "test123", password_confirmation: "test321")
        store.valid?
        expect(store.errors[:password_confirmation]).to include("が一致しません")
      end

      it 'passwordの値が英字だけだと登録されない' do
        store = build(:store, password: "abcdef")
        store.valid?
        expect(store.errors[:password]).to include("は英数字両方を含め6文字以上で入力してください")
      end

      it 'passwordの値が数字だけだと登録されない' do
        store = build(:store, password: "123456")
        store.valid?
        expect(store.errors[:password]).to include("は英数字両方を含め6文字以上で入力してください")
      end

      it 'passwordの値が6文字未満だと登録されない' do
        store = build(:store, password: "abc12")
        store.valid?
        expect(store.errors[:password]).to include("は英数字両方を含め6文字以上で入力してください")
      end

    end

    context '登録される' do
      
      it 'name,email,password,password_confirmationがあれば登録される' do
        store = build(:store)
        expect(store).to be_valid
      end

      it 'passwordが6文字以上で英数字両方を含めば登録される' do
        store = build(:store, password: "abc123", password_confirmation: "abc123")
        expect(store).to be_valid
      end
    end
  end
end
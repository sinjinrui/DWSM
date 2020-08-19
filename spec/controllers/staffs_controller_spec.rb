require 'rails_helper'

describe StaffsController do

  let(:store) { create(:store) }

  describe "GET #new" do

    context 'ログイン時' do
      before do
        login store
        get :new
      end

      it "newアクションにページ遷移する" do
        expect(response).to render_template :new
      end

      it "@staffが期待される値を持つ" do
        expect(assigns(:staff)).to be_a_new(Staff)
      end

      it "@staffsが期待される値を持つ" do
       staffs = create_list(:staff, 5, store_id: store.id)
       get :new
       expect(assigns(:staffs)).to match(staffs)
      end
    end

    context "ログアウト時" do
      before do
        get :new
      end
      
      it 'ログインページにリダイレクトされる' do
        expect(response).to redirect_to(new_store_session_path)
      end
    end
    
  end

  describe "POST #create" do

    before do
      login store
    end

    context "@staffが登録できた時" do
      
      it "データベースに値が保存される" do
        staff_params = attributes_for(:staff)
        expect do
          post :create, params: { staff: staff_params }
        end.to change(Staff, :count).by(1)
      end

      it 'ビューに正しく遷移する' do
        staff_params = attributes_for(:staff)
        post :create, params: { staff: staff_params }
        expect(response).to redirect_to new_staff_path
      end
    end

    context '@staffが登録されなかった時' do
      
      it 'データベースに値が保存されない' do
        staff_params = attributes_for(:staff, name: nil)
        expect do
          post :create, params: { staff: staff_params }
        end.to change(Staff, :count).by(0)
      end

      it 'ビューに正しく遷移する' do
        staff_params = attributes_for(:staff, name: nil)
        post :create, params: { staff: staff_params }
        expect(response).to redirect_to new_staff_path
      end
    end
    
  end

  describe 'GET #edit' do
    before do
      login store
    end

    it '@staffが期待される値を持つ' do
      staff = create(:staff, store_id: store.id)
      get :edit, params: { id: staff }
      expect(assigns(:staff)).to eq staff
    end
  end

  describe 'PATCH #update' do
    before do
      login store
      @staff = create(:staff, store_id: store.id, name: '新規ネーム', rank_id: 2)
      get :edit, params: { id: @staff }
    end

    context '更新される時' do

      it '正しく更新される' do
        staff_params = attributes_for(:staff, name: '更新ネーム')
        patch :update, params: { id: @staff, staff: staff_params }
        expect(@staff.reload.name).to eq "更新ネーム"
      end

      it 'ビューに正しく遷移する' do
        staff_params = attributes_for(:staff, name: '更新ネーム')
        patch :update, params: { id: @staff, staff: staff_params }
        expect(response).to redirect_to new_staff_path
      end

    end

    context '更新されない時' do
      
      it '正しく更新されない' do
        staff_params = attributes_for(:staff, name: nil, rank_id: 7)
        patch :update, params: { id: @staff, staff: staff_params }
        expect(@staff.reload.rank_id).to eq 2
      end

      it 'ビューに正しく遷移する' do
        staff_params = attributes_for(:staff, name: nil, rank_id: 7)
        patch :update, params: { id: @staff, staff: staff_params }
        expect(response).to redirect_to new_staff_path
      end
    end
  end

  describe "DELETE #destroy" do
    before do 
      login store
      @staff = create(:staff, store_id: store.id)
    end

    it 'データベースから削除される' do
      expect do
        delete :destroy, params: { id: @staff }
      end.to change(Staff, :count).by(-1)
    end

    it 'ビューに正しく遷移する' do
      delete :destroy, params: { id: @staff }
      expect(response).to redirect_to new_staff_path
    end
  end

end
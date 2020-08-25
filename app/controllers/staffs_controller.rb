class StaffsController < ApplicationController
  include CurrentStaff
  before_action :authenticate_store!, only: [:new]
  before_action :staff_index, only: [:new, :edit]
  before_action :set_staff, only: [:edit, :update, :destroy]

  def index
  end

  def new
    @staff = Staff.new
  end

  def create
    @staff = Staff.new(staff_params)
    if @staff.save
      respond_to do |format|
        format.json
      end
    else
      redirect_to new_staff_path
    end
  end

  def edit
  end

  def update
    @staff.update(staff_params)
    if @staff.save
      redirect_to new_staff_path, notice: '情報が更新されました'
    else
      redirect_to new_staff_path, alert: '更新に失敗しました'
    end
  end

  def destroy
    if @staff.destroy
      redirect_to new_staff_path, notice: '情報を削除しました'
    else
      redirect_to new_staff_path alert: '削除に失敗しました'
    end
  end

  private

  def staff_params
    params.require(:staff).permit(:name, :rank_id).merge(store_id: current_store.id)
  end

  def staff_index
    @staffs = Staff.includes(:store).where(store_id: current_store.id).order(rank_id: "DESC")
  end

  # def set_staff
  #   @staff = Staff.find(params[:id])
  # end

end

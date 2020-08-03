class StaffsController < ApplicationController

  def index
  end

  def new
    @staffs = Staff.where(store_id: current_store.id)
    @staff = Staff.new
  end

  def create
    @staff = Staff.new(staff_params)
    if @staff.save
      redirect_to new_staff_path
    else
      render :new
    end
  end

  private

  def staff_params
    params.require(:staff).permit(:name, :rank_id).merge(store_id: current_store.id)
  end

end

class SchedulesController < ApplicationController
  before_action :authenticate_store!, only: [:new]

  def new
    @staffs = Staff.where(store_id: current_store.id)
    gon.staffs = @staffs
    @wd = ["日", "月", "火", "水", "木", "金", "土"]
    @time = Time.now
  end

end

class SchedulesController < ApplicationController
  before_action :authenticate_store!, only: [:new]

  def new
    @staffs = Staff.where(store_id: current_store.id)
    @task = Task.new
    @tasks = Task.where(store_id: current_store.id)
  end

end

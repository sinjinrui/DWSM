class TasksController < ApplicationController

  def create
    @task = Task.new(task_params)
    if @task.save
      respond_to do |format|
        format.json
      end
      # redirect_to new_schedule_path
    else
      # redirect_to new_schedule_path, alert: 'タスクの生成に失敗しました'
    end
  end

  def destroy
    @task = Task.find(params[:id])
    @task.destroy
    redirect_to new_schedule_path
  end

  private

  def task_params
    params.require(:task).permit(:name, :color).merge(store_id: current_store.id)
  end
end

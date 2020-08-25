module CurrentStaff
  extend ActiveSupport::Concern

  private

  def set_staff
    @staff = Staff.find(params[:id])
  end
end
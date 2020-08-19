module ControllerMacros
  def login(store)
    @request.env["devise.mapping"] = Devise.mappings[:store]
    sign_in store
  end
end
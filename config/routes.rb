Rails.application.routes.draw do
  devise_for :stores
  root to: 'staffs#index'
  resources :staffs, only: [:index, :new, :create, :destroy, :edit, :update]
  resources :schedules, only: [:new]
  resources :tasks, only: [:create, :destroy]
end

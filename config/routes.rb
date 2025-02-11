Rails.application.routes.draw do
  devise_for :users

  namespace :admin do 
    resources :projects
    get 'dashboard', to: 'dashboard#index'

  end

  root 'home#index'
end
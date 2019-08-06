Rails.application.routes.draw do
  
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    resources :stables, only: [:show, :index]
    get '/stables/:stable_id/slots', to: 'slots#show'
  end

end

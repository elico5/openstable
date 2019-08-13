Rails.application.routes.draw do
  
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do

    resources :users, only: [:create, :show, :update] do
      resources :reservations, only: [:index]
      resources :reviews, only: [:index]
      resources :favorites, only: [:index]
    end

    resource :session, only: [:create, :destroy]

    resources :stables, only: [:show, :index] do
      resources :reservations, only: [:create]
      resources :favorites, only: [:create, :destroy]
    end

    resources :reservations, only: [:update] do
      resources :reviews, only: [:create]
    end

    get '/stables/:stable_id/slots', to: 'slots#show'
    get '/regions/:region_id/slots', to: 'slots#index'

  end

end

Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    resources :photos, only: [:create, :destroy, :show, :index]
    resources :comments, only:
      [:create, :destroy, :show, :update]
  end
end

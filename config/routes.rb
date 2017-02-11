Rails.application.routes.draw do
  root 'pages#homepage'

  resources :articles, only: [:index, :show], path: '/posts', constraints: { format: :json }
  resources :tags, only: [:index, :show], format: false

  get '/colophon', to: 'pages#colophon', as: 'colophon', format: false

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

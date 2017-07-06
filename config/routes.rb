Rails.application.routes.draw do
  root 'pages#homepage'

  resources :articles, only: [:index, :show]

  get '/colophon', to: 'pages#colophon', as: 'colophon'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

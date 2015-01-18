Rails.application.routes.draw do
  root 'pages#homepage'

  get    'login',  to: 'sessions#new'
  get    'auth',   to: 'sessions#create'
  delete 'logout', to: 'sessions#destroy'

  mount FrancisCms::Engine, at: '/'
end

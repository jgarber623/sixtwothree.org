Rails.application.routes.draw do
  root 'pages#homepage'

  get    'login',      to: 'sessions#new'
  post   'auth/start', to: 'sessions#start'
  get    'auth',       to: 'sessions#create'
  delete 'logout',     to: 'sessions#destroy'

  post 'links/fetch', to: 'links#fetch'

  get 'sitemap.xml', to: 'pages#sitemap', format: 'xml'

  mount FrancisCms::Engine, at: '/'
end

Rails.application.routes.draw do
  get "/", to: 'people#index'
end

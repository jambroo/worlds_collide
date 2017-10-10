Rails.application.routes.draw do
  get 'trips', to: 'trips#list'
  post 'trips/new'
end

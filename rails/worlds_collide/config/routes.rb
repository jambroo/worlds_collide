Rails.application.routes.draw do
  get 'trips', to: 'trips#list'
  get 'trips/save'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

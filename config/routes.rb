Rails.application.routes.draw do
  get 'hello_world', to: 'hello_world#index'
  get 'greetings', to: 'greetings#random_greeting'
  namespace :api do
    get 'random_greeting', to: 'greetings#random_greeting'
  end
  root 'root#index'
end

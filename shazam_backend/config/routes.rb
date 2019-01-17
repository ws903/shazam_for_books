Rails.application.routes.draw do
	namespace :api do
		namespace :v1 do
			resources :users, only: [:create, :index]
			post '/login', to: 'auth#create'
			get '/profile', to: 'users#profile'

			resources :books, only: [:create]
			post '/add_book', to: 'books#add_book'
			get '/user_books', to: 'books#index'
			post '/delete_book', to: 'books#delete_book'
		end
	end
end

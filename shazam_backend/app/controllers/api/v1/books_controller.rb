class Api::V1::BooksController < ApplicationController
	skip_before_action :authorized

	def index
		render json: { books: Book.all }
	end

	def create
		@book = Book.where(book_params).first_or_create
		if @book.valid?
			render json: { book: @book }, status: :created
		else
			render json: { error: 'failed to create book' }, status: :not_acceptable
		end
	end

	def show
		# debugger
		byebug
		# @book = Book.find()
	end

	private

	def book_params
		params.require(:book).permit(:title, :img, :author, :rating, :year, :pages, :isbn)
	end
end

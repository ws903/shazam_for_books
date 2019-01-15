import React from 'react'
import { isEmpty } from '../utils/isEmpty'
import { addBook } from '../store'

import { connect } from 'react-redux'

class Book extends React.Component {

	checkShelf = (book) => {
		if(this.props.bookInfo.user_books.includes(book)) {
			console.log('HI')
		}
	}

	handleClick = (book) => {
		this.props.addBook(book, this.props.userInfo.token)
	}

	renderBook = () => {
		const book = this.props.bookInfo.book
		this.checkShelf(book)

		if ((!isEmpty(book) && !('error' in book))) {
			return (
				<div className="book-info">
					<h1>Title: {book.title}</h1>
					<h2>Author: {book.author}</h2>
					<img src={book.img} alt="book cover" />

					<h2>Rating: {book.rating}</h2>
					<div>Year: {book.year}</div>
					<div>Pages: {book.pages}</div>
					<div>ISBN: {book.isbn}</div>

					<button 
						onClick={() => this.handleClick(book)} 
						value="Add To Shelf"
					>
						Add To Shelf
					</button>
				</div>
			)
		} else {
			return null
		}

	}
	render() {

		return (
			<div>
				{this.renderBook()}
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return state
}

const mapDispatchToProps = (dispatch) => {
	return {
		addBook: (book, token) => dispatch(addBook(book, token))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Book)
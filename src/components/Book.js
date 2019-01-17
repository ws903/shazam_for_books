import React from 'react'
import { isEmpty } from '../utils/isEmpty'
import { addBook } from '../store'
import { removeBook } from '../store'

import { connect } from 'react-redux'

class Book extends React.Component {

	checkShelf = () => {
		const contains = this.props.bookInfo.user_books.some(each =>{
			return JSON.stringify(this.props.bookInfo.book) === JSON.stringify(each)
		})

		if(contains) {
			return(
				<button 
					onClick={this.handleRemove} 
					value="Remove From Shelf"
				>
					Remove From Shelf
				</button>
			)
		} else {
			return(
				<button 
					onClick={this.handleAdd} 
					value="Add To Shelf"
				>
					Add To Shelf
				</button>
			)
		}
	}

	handleAdd = () => {
		this.props.addBook(this.props.bookInfo.book, this.props.userInfo.token)
	}

	handleRemove = () => {
		this.props.removeBook(this.props.bookInfo.book, this.props.userInfo.token)
	}

	handleBack = () => {
		console.log(window.history.state.state.past_router)
		window.history.back()
	}

	rednerBackRoute = () => {

	}

	renderBook = () => {
		const book = this.props.bookInfo.book

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

					{this.checkShelf()}
				</div>
			)
		} else {
			return null
		}
	}

	render() {

		return (
			<div>
				<button onClick={this.handleBack} >Back</button>
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
		addBook: (book, token) => dispatch(addBook(book, token)),
		removeBook: (book, token) => dispatch(removeBook(book, token))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Book)
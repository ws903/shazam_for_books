import React from 'react'
import { isEmpty } from '../utils/isEmpty'

import { connect } from 'react-redux'

class Book extends React.Component {

	renderBook = () => {
		const book = this.props.bookInfo.book

		if (!(isEmpty(book) && !('error' in book))) {
			return (
				<div className="book-info">
					<h1>Title: {book.title}</h1>
					<h2>Author: {book.author}</h2>
					<img src={book.img} alt="book cover" />

					<h2>Rating: {book.rating}</h2>
					<div>Year: {book.year}</div>
					<div>Pages: {book.pages}</div>
					<div>ISBN: {book.isbn}</div>
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

export default connect(mapStateToProps)(Book)
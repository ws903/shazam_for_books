import React from 'react'
import { isEmpty } from '../utils/isEmpty'

const Book = (props) => {

	const renderBook = () => {
		const book = props.book

		if (!(isEmpty(book) && !('error' in book))) {
			return (
				<div className="book-info">
					<img src={book.img} alt="book cover" />
					<h1>Title: {book.title}</h1>
					<h2>Author: {book.author}</h2>
					<h2>Rating: {book.rating}</h2>
				</div>
			)
		} else {
			return null
		}
	}

	return (
		<div>
			{renderBook()}
		</div>
	)
}

export default Book
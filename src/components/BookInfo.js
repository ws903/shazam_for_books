import React from 'react'
import { isEmpty } from '../utils/isEmpty'

const BookInfo = (props) => {

	const renderBook = () => {
		const book = props.book

		if (!(isEmpty(book) && !('error' in book))) {
			return (
				<div onClick={() => props.handleClickDiv(book)} className="book-info">
					<img src={book.img} alt="book cover" />
					<div>Title: {book.title}</div>
					<div>Author: {book.author}</div>
					<div>Rating: {book.rating}</div>
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

export default BookInfo
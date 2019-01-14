/*---------- ACTION CREATORS ----------*/

export const getISBN = (isbn) => {
	return {
		type: 'GET_ISBN',
		payload: isbn
	}
}

export const getBook = (book) => {
	return {
		type: 'GET_BOOK',
		payload: book
	}
}

export const getUserBooks = (books) => {
	return {
		type: 'GET_USER_BOOKS',
		payload: books
	}
}

/*---------- THUNK CREATORS ----------*/

export const loadBook = (resp) => {
	const book = {
		title: resp.book.title,
		img: resp.book.image_url,
		author: resp.author.name,
		rating: parseFloat(resp.book.average_rating),
		year: parseInt(resp.book.publication_year),
		pages: parseInt(resp.book.num_pages),
		isbn: parseInt(resp.book.isbn13)
	}

	return function (dispatch) {

		return fetch('http://localhost:3000/api/v1/books', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json'
			},
			body: JSON.stringify(book)
		})
		.then(resp => resp.json())
		.then(json => dispatch(getBook(json.book)))
		.catch(console.error)
	}
}

// export const loadUserBooks = (user) => {

// }

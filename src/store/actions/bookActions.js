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

export const loadBook = (resp, token) => {
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

		return fetch('http://localhost:3000/api/v1/books/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
				Authorization: `${token}`
			},
			body: JSON.stringify(book)
		})
		.then(resp => resp.json())
		.then(json => dispatch(getBook(json.book)))
		.catch(console.error)
	}
}

export const loadUserBooks = (token) => {
	return function (dispatch) {
		return fetch('http://localhost:3000/api/v1/user_books', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
				Authorization: `${token}`
			}
		})
		.then(resp => resp.json())
		.then(json => dispatch(getUserBooks(json.books)))
		.catch(console.error)
	}
}

export const addBook = (book, token) => {
	return function (dispatch) {
		console.log(JSON.stringify(book))
		return fetch('http://localhost:3000/api/v1/add_book', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
				Authorization: `${token}`
			},
			body: JSON.stringify(book)
		})
		.then(resp => resp.json())
		.then(json => dispatch(getUserBooks(json.books)))
		.catch(console.error)
	}
}

export const removeBook = (book, token) => {
	return function (dispatch) {
		console.log(JSON.stringify(book))
		return fetch('http://localhost:3000/api/v1/delete_book', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
				Authorization: `${token}`
			},
			body: JSON.stringify(book)
		})
		.then(resp => resp.json())
		.then(json => dispatch(getUserBooks(json.books)))
		.catch(console.error)
	}
}

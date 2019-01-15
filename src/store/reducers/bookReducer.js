const initialState = {
	isbn: '',
	book: {},
	user_books: []
}

const reducer = (state = initialState, action) => {
	switch (action.type) {

		case 'GET_BOOK': {
			return { ...state, book: action.payload }
		}

		case 'GET_USER_BOOKS': {
			return { ...state, user_books: action.payload }
		}

		case 'GET_ISBN': {
			return { ...state, isbn: action.payload }
		}

		default:
			return state
			
	}
}

export default reducer
const initialState = {
	isbn: '',
	book: {}
}

const reducer = (state = initialState, action) => {
	switch (action.type) {

		case 'GET_BOOK': {
			return { ...state, book: action.payload }
		}

		case 'GET_ISBN': {
			return { ...state, isbn: action.payload }
		}

		default:
			return state
			
	}
}

export default reducer
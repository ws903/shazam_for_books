import { isEmpty } from '../../utils/isEmpty'

const initialState = {
	isAuthenticated: false,
	user: {},
	token: ''
}

const reducer = (state = initialState, action) => {

	switch(action.type) {
		case 'SET_CURRENT_USER':
			return {
				isAuthenticated: !isEmpty(action.payload),
				user: action.payload,
				token: localStorage.getItem('token')
			}

		case 'LOG_OUT_CURRENT_USER':
			return initialState

		default: 
			return state
	}
}

export default reducer
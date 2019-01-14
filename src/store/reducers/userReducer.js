import { isEmpty } from '../../utils/isEmpty'

const initialState = {
	isAuthenticated: false,
	user: {}
}

const reducer = (state = initialState, action) => {

	switch(action.type) {
		case 'SET_CURRENT_USER':
			return {
				isAuthenticated: !isEmpty(action.payload),
				user: action.payload
			}

		default: 
			return state
	}
}

export default reducer
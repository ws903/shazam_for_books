import { combineReducers } from 'redux'

// import auth from './reducers/auth';
import userReducer from './userReducer'
import bookReducer from './bookReducer'

export default combineReducers({
	// userInfo: auth,
	userInfo: userReducer,
	bookInfo: bookReducer
});
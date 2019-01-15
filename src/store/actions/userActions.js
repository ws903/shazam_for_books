/*---------- ACTION CREATORS ----------*/

export const getUser = (user) => {
	return {
		type: 'SET_CURRENT_USER',
		payload: user
	}
}

export const eraseUser = () => {
	localStorage.setItem('token', '')
	return {
		type: 'LOG_OUT_CURRENT_USER'
	}
}

/*---------- THUNK CREATORS ----------*/

export const createUser = (user) => {

	return function(dispatch) {
		return fetch('http://localhost:3000/api/v1/users', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json'
			},
			body: JSON.stringify(user)
		})
		.then(resp => resp.json())
		.then(json => {
			localStorage.setItem('token', json.jwt)
			dispatch(getUser(json.user))
		})
		.catch(console.error)
	}

}

export const signinUser = (user) => {
	return function(dispatch) {
		return fetch('http://localhost:3000/api/v1/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json'
			},
			body: JSON.stringify(user)
		})
		.then(resp => resp.json())
		.then(json => {
			localStorage.setItem('token', json.jwt)
			dispatch(getUser(json.user))
		})
		.catch(console.error)
	}
}

export const loadUser = (token) => {
	return function(dispatch) {
		return fetch('http://localhost:3000/api/v1/profile', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
				Authorization: `${token}`
			}
		})
		.then(resp => resp.json())
		.then(json => dispatch(getUser(json.user)))
		.catch(console.error)
	}	
}

export const logoutUser = () => {
	return function(dispatch) {
		return dispatch(eraseUser())
	}
}

import React from 'react'
import LoginForm from './LoginForm'
import { signinUser } from '../../store'

import { connect } from 'react-redux'

class LoginPage extends React.Component {

	handleLogIn = (user) => {
		this.props.signinUser(user)
	}
	
	render() {
		return(
			<LoginForm 
				handleLogIn={this.handleLogIn}
			/>
		)
	}	
}

const mapDispatchToProps = (dispatch) => {
	return {
		signinUser: (user) => dispatch(signinUser(user))
	}
}

export default connect(null, mapDispatchToProps)(LoginPage)
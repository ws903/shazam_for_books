import React from 'react'
import { Redirect } from 'react-router-dom'
import LoginForm from './LoginForm'
import { signinUser } from '../../store'

import { connect } from 'react-redux'

class LoginPage extends React.Component {

	handleLogIn = (user) => {
		this.props.signinUser(user)
	}

	handleRender = () => {
		if (this.props.isAuthenticated) {
			return <Redirect to='/' />
		} else {
			return <LoginForm handleLogIn={this.handleLogIn} />
		}
	}
	
	render() {
		return(
			<div>
				{this.handleRender()}
			</div>
		)
	}	
}

const mapDispatchToProps = (dispatch) => {
	return {
		signinUser: (user) => dispatch(signinUser(user))
	}
}

export default connect(null, mapDispatchToProps)(LoginPage)
import React from 'react'
import { Redirect } from 'react-router-dom'
import SignupForm from './SignupForm'
import { createUser } from '../../store'

import { connect } from 'react-redux'

class SignupPage extends React.Component {
	
	handleSignUp = (user) => {
		this.props.createUser(user)
	}

	handleRender = () => {
		if (this.props.isAuthenticated) {
			return <Redirect to='/' />
		} else {
			return <SignupForm handleSignUp={this.handleSignUp} />
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
		createUser: (user) => dispatch(createUser(user))
	}
}

export default connect(null, mapDispatchToProps)(SignupPage)
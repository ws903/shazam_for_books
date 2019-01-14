import React from 'react'
import SignupForm from './SignupForm'
import { createUser } from '../../store'

import { connect } from 'react-redux'

class SignupPage extends React.Component {
	
	handleSignUp = (user) => {
		this.props.createUser(user)
	}

	render() {
		return(
			<SignupForm 
				handleSignUp={this.handleSignUp}
			/>
		)
	}	
}

const mapDispatchToProps = (dispatch) => {
	return {
		createUser: (user) => dispatch(createUser(user))
	}
}

export default connect(null, mapDispatchToProps)(SignupPage)
import React from 'react'

class SignupForm extends React.Component {
	state = {
		username: '',
		password: ''
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	handleSubmit = (e) => {
		e.preventDefault()
		this.props.handleLogIn({ user: this.state })
		this.setState({
			username: '',
			password: ''
		})		
	}

	render() {
		return(
			<form onSubmit={this.handleSubmit} className="signup-form">

				Username: 
				<input 
					onChange={this.handleChange}
					type="text" 
					name="username"
					placeholder="Username" 
					value={this.state.username}
				/>
				<br />

				Password: 
				<input 
					onChange={this.handleChange}
					type="password" 
					name="password"
					placeholder="Password" 
					value={this.state.password}
				/>
				<br />

				<button type="submit">Log In</button>

			</form>
		)
	}
}

export default SignupForm
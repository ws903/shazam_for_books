import React from 'react'

class SignupForm extends React.Component {
	state = {
		email: '',
		first_name: '',
		last_name: '',
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
		this.props.handleSignUp({ user: this.state })
		this.setState({
			email: '',
			first_name: '',
			last_name: '',
			username: '',
			password: ''
		})		
	}

	render() {
		return(
			<form onSubmit={this.handleSubmit} className="signup-form">

				Email: 
				<input 
					onChange={this.handleChange}
					type="text" 
					name="email"
					placeholder="Email" 
					value={this.state.email}
				/>
				<br />

				First Name: 
				<input 
					onChange={this.handleChange}
					type="text" 
					name="first_name"
					placeholder="First Name" 
					value={this.state.first_name}
				/>
				<br />

				Last Name: 
				<input 
					onChange={this.handleChange}
					type="text" 
					name="last_name"
					placeholder="Last Name" 
					value={this.state.last_name}
				/>
				<br />

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

				<button type="submit">Sign Up!</button>

			</form>
		)
	}
}

export default SignupForm
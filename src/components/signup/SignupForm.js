import React from 'react'
import { Grid, Button, Checkbox, Form, Segment, Message } from 'semantic-ui-react'

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
			<Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
				<Grid.Column style={{ maxWidth: 450 }}>

					<Form size='large' onSubmit={this.handleSubmit} className="signup-form">
						<Segment stacked>

							<Form.Input 
								fluid icon='user' 
								iconPosition='left' 
								onChange={this.handleChange}
								type="text" 
								name="first_name"
								placeholder="First Name" 
								value={this.state.first_name}
							/>

							<Form.Input 
								fluid icon='user' 
								iconPosition='left' 
								onChange={this.handleChange}
								type="text" 
								name="last_name"
								placeholder="Last Name" 
								value={this.state.last_name}
							/>

							<Form.Input 
								fluid icon='mail' 
								iconPosition='left' 
								onChange={this.handleChange}
								type="text" 
								name="email"
								placeholder="Email" 
								value={this.state.email}
							/>

							<Form.Input 
								fluid icon='user' 
								iconPosition='left' 
								onChange={this.handleChange}
								type="text" 
								name="username"
								placeholder="Username" 
								value={this.state.username}
							/>
							<Form.Input
								fluid icon='lock'
								iconPosition='left'
								onChange={this.handleChange}
								type="password" 
								name="password"
								placeholder="Password" 
								value={this.state.password}
							/>

							<Form.Button color='teal' fluid size='large'>
								Sign Up!
							</Form.Button>

						</Segment>
					</Form>

					<Message>
						Already have an account? <a href='/login'>Log In</a>
					</Message>

				</Grid.Column>
			</Grid>
		)
	}
}

export default SignupForm
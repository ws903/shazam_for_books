import React from 'react'
import { Grid, Button, Checkbox, Form, Segment, Message } from 'semantic-ui-react'

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

			<Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
				<Grid.Column style={{ maxWidth: 450 }}>

					<Form size='large' onSubmit={this.handleSubmit} className="signup-form">
						<Segment stacked>

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
								Login
							</Form.Button>

						</Segment>
					</Form>

					<Message>
						New to us? <a href='/signup'>Sign Up</a>
					</Message>

				</Grid.Column>
			</Grid>
		)
	}
}

export default SignupForm
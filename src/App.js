import React from 'react'
import { Switch, Route } from 'react-router-dom'
import {withRouter } from 'react-router'
import NavBar from './components/NavBar'
import LogIn from './components/login/LoginPage'
import SignUp from './components/signup/SignupPage'
import Home from './components/Home'
import BookShow from './components/BookShow'
import Profile from './components/Profile'
import { loadUser } from './store'

import { connect } from 'react-redux'

class App extends React.Component {

	componentDidMount() {
		let token = localStorage.getItem("token")
		this.props.loadUser(token)
	}

	render() {
		return (
			<div className="App">

				<NavBar 
					isAuthenticated={this.props.userInfo.isAuthenticated}
				/>

				<Switch>
					<Route 
						path="/login"
						component={LogIn}
					/>
					<Route 
						path="/signup"
						component={SignUp}
					/>
					<Route
						path="/book-result"
						component={BookShow}
					/>
					<Route
						path="/profile"
						component={Profile}
					/>
					<Route 
						path="/"
						component={Home}
					/>
				</Switch>
				
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return state
}

const mapDispatchToProps = (dispatch) => {
	return {
		loadUser: (user) => dispatch(loadUser(user))
	}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))

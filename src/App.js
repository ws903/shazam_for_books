import React from 'react'
import { Switch, Route } from 'react-router-dom'
import {withRouter } from 'react-router'
import NavBar from './components/NavBar'
import LogIn from './components/login/LoginPage'
import SignUp from './components/signup/SignupPage'
import Welcome from './components/Welcome'
import Home from './components/Home'
import BookShow from './components/BookShow'
import Profile from './components/Profile'
import { loadUser } from './store'
import { loadUserBooks } from './store'
import { logoutUser } from './store'

import { connect } from 'react-redux'

class App extends React.Component {

	componentDidMount() {
		let token = localStorage.getItem("token")
		this.props.loadUser(token)
		this.props.loadUserBooks(token)
	}

	handleRender = () => {
		if (this.props.userInfo.isAuthenticated) {
			return <Home />
		} else {
			return <Welcome />
		}
	}

	render() {
		return (
			<div className="App">

				<NavBar 
					isAuthenticated={this.props.userInfo.isAuthenticated}
					logoutUser={this.props.logoutUser}
				/>

				<Switch>
					<Route 
						path="/login"
						render={() => (
							<LogIn 
								isAuthenticated={this.props.userInfo.isAuthenticated}
							/>
						)}
					/>
					<Route 
						path="/signup"
						render={() => (
							<SignUp 
								isAuthenticated={this.props.userInfo.isAuthenticated}
							/>
						)}
					/>
					<Route
						path="/book-show"
						component={BookShow}
					/>
					<Route
						path="/profile"
						component={Profile}
					/>
					<Route 
						path="/"
						render={() => (
							this.handleRender()
						)}
					/>
				</Switch>
				
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	console.log(state)
	return state
}

const mapDispatchToProps = (dispatch) => {
	return {
		loadUser: (token) => dispatch(loadUser(token)),
		loadUserBooks: (token) => dispatch(loadUserBooks(token)),
		logoutUser: () => dispatch(logoutUser())
	}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))

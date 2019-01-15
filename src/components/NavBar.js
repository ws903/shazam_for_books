import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = (props) => {

	const renderUtils = () => {
		if(props.isAuthenticated) {
			return(
				<ul className="nav-bar">
					<Link to="/">
						<li className="navitem">Home</li>
					</Link>
					<Link to="/profile">
						<li className="navitem">Profile</li>
					</Link>
					<Link 
						to="/"
						onClick={props.logoutUser}
					>
						<li className="navitem">Log Out</li>
					</Link>
				</ul>
			)
		} else {
			return(
				<ul className="navbar">
					<Link to="/">
						<li className="navitem">Home</li>
					</Link>
					<Link to="/login">
						<li className="navitem">Log In</li>
					</Link>
					<Link to="/signup">
						<li className="navitem">Sign Up</li>
					</Link>
				</ul>
			)
		}
	}

	return (
		<div className="nav-bar-container">
			{renderUtils()}
		</div>
	)
}

export default NavBar
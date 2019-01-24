import React from 'react'
import { Link } from 'react-router-dom'
import { Input, Menu } from 'semantic-ui-react'

export default class NavBar extends React.Component {

	state = { activeItem: 'home' }

	handleItemClick = (e, { name }) => {
		if (name === 'logout') {
			this.setState({ activeItem: 'home' })
		} else {
			this.setState({ activeItem: name })
		}
	}

	renderUtils = () => {
		const { activeItem } = this.state

		if(this.props.isAuthenticated) {
			return(
				<Menu secondary>

					<Link to="/">
						<Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
					</Link>

					<Menu.Menu position='right'>

						<Link to="/profile">
							<Menu.Item name='profile' active={activeItem === 'profile'} onClick={this.handleItemClick} />
						</Link>

						<Link 
							to="/"
							onClick={this.props.logoutUser}
						>
							<Menu.Item name='logout' active={activeItem === 'name'} onClick={this.handleItemClick} />
						</Link>

					</Menu.Menu>

				</Menu>
			)
		} else {
			return(
				<Menu secondary>

					<Link to="/">
						<Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
					</Link>

					<Menu.Menu position='right'>

						<Link to="/login">
							<Menu.Item name='login' active={activeItem === 'login'} onClick={this.handleItemClick} />
						</Link>

						<Link to="/signup">
							<Menu.Item name='signup' active={activeItem === 'signup'} onClick={this.handleItemClick} />
						</Link>

					</Menu.Menu>

				</Menu>
			)
		}
	}

	render() {
		return (
			<div className="nav-bar-container">
				{this.renderUtils()}
			</div>
		)
	}
}
import React from 'react'
import BookInfo from './BookInfo'

import { connect } from 'react-redux'

class Profile extends React.Component {

	renderBooks = () => {
		
	}

	render() {
		return(
			<div className="user-bookshelf">
				{this.props.userInfo.user.username}'s BOOKSHELF
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return state
}

export default connect(mapStateToProps)(Profile)
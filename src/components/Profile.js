import React from 'react'
import { Redirect } from 'react-router-dom'
import BookInfo from './BookInfo'
import Book from './Book'
import { getBook } from '../store'

import { connect } from 'react-redux'

class Profile extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			detail: false
		}
	}

	handleClickDiv = (book) => {
		this.props.getBook(book)
		this.setState({
			detail: true
		})
	}

	renderBooks = () => {
		return this.props.bookInfo.user_books.map(book => {
			return <BookInfo handleClickDiv={this.handleClickDiv} key={book.id} book={book} />
		})
	}

	renderBookInfo = () => {
		if (this.state.detail) {
			console.log(window.history)
			return <Redirect to={{
								pathname: '/book-show',
								state: {
									past_route: window.location.pathname
								}
							}}
					/>
		}
	}

	render() {
		return(
			<div className="user-bookshelf">
				{this.renderBookInfo()}
				{this.props.userInfo.user.username}'s BOOKSHELF
				{this.renderBooks()}
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return state
}

const mapDispatchToProps = (dispatch) => {
	return {
		getBook: (book) => dispatch(getBook(book))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
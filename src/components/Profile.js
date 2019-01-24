 import React from 'react'
import { Redirect } from 'react-router-dom'
import BookInfo from './BookInfo'
import Book from './Book'
import { getBook } from '../store'
import { Grid, Container, Header } from 'semantic-ui-react'

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
			<div>
				<Container text>

					<Header
						as='h1'
						content={`${this.props.userInfo.user.username}'s BOOKSHELF`}
						inverted
						textAlign='center'
						style={{
							fontSize: '2em',
							fontWeight: 'bold',
							color: '#FF7E00',
							marginBottom: '2em',
							marginTop: '.5em',
						}}
					/>

				</Container>

				<br />

				<Grid celled='internally' centered>
					{this.renderBooks()}
					{this.renderBookInfo()}
				</Grid>
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
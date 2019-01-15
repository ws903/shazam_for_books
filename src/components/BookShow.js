import React from 'react'
import Book from './Book'
// import { addBook } from '../store'

import { connect } from 'react-redux'

class BookShow extends React.Component {

	render() {
		return (
			<Book />
		)
	}
}

const mapStateToProps = (state) => {
	return state
}

// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		addBook: (resp) => dispatch(addBook(resp))
// 	}
// }

export default BookShow
import React from 'react'
import Book from './Book'

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

export default BookShow
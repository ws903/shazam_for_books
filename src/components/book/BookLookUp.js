import React from 'react'
import { Redirect } from 'react-router-dom'
import { loadBook } from '../../store'
import { fetchBook } from '../../utils/fetchBook'

import { connect } from 'react-redux'

class BookLookUp extends React.Component {

	constructor(props) {
		super(props)

		this.state = {
			isbn: this.props.bookInfo.isbn,
			GRKey: "XngfIa2hLeJCJHGtQeWxQ",
			searched: false
		}
	}

	componentWillReceiveProps(newProps) {
		if(newProps.bookInfo.isbn.length !== 0) {
			this.setState({
			isbn: newProps.bookInfo.isbn
			})

			let API = `https://www.goodreads.com/book/isbn/${newProps.bookInfo.isbn}?key=${this.state.GRKey}`
			fetchBook(API, this.handleResponse)
			this.setState({
				isbn: '',
				searched: true
			})
		}
	}

	handleChange = (e) => {
		this.setState({
			isbn: e.target.value
		})
	}

	assignISBN = (isbn) => {
		this.setState({
			isbn: isbn
		})
	}

	handleResponse = (resp) => {
		this.props.loadBook(resp)
	}

	createBook = (e) => {
		e.preventDefault()
		let API = `https://www.goodreads.com/book/isbn/${this.state.isbn}?key=${this.state.GRKey}`
		fetchBook(API, this.handleResponse)
		this.setState({
			isbn: '',
			searched: true
		})
	}

	renderBookShowPage = () => {
		if(this.state.searched) {
			return <Redirect to="/book-result" />
		}
	}
 
	render() {
		return(
			<div>
				{this.renderBookShowPage()}
				<form onSubmit={this.createBook}>
					<input 
						type="text" 
						placeholder="Enter ISBN" 
						value={this.state.isbn} 
						onChange={this.handleChange} 
					/>
					<input 
						type="submit"
						value="Submit" 
					/>
				</form>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return state
}

const mapDispatchToProps = (dispatch) => {
	return {
		loadBook: (resp) => dispatch(loadBook(resp))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(BookLookUp)

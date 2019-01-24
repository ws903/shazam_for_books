import React from 'react'
import { Redirect } from 'react-router-dom'
import { loadBook } from '../../store'
import { fetchBook } from '../../utils/fetchBook'
import { Button, Input } from 'semantic-ui-react'

import { connect } from 'react-redux'

import './BookLookUp.css'

class BookLookUp extends React.Component {

	constructor(props) {
		super(props)

		this.state = {
			isbn: '',
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

	handleResponse = (resp) => {
		this.props.loadBook(resp, this.props.userInfo.token)
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
			<div className="BookLookUp">
				{this.renderBookShowPage()}
				<form onSubmit={this.createBook}>
					<Input 
						className="IsbnInput"
						type="text" 
						placeholder="Enter ISBN" 
						value={this.state.isbn} 
						onChange={this.handleChange} 
					/>
					<Button 
						className="SearchButton"
						type="submit"
					>
						Search
					</Button>
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
		loadBook: (resp, token) => dispatch(loadBook(resp, token))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(BookLookUp)

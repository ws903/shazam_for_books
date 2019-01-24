import React from 'react'
import { Redirect } from 'react-router-dom'
import { isEmpty } from '../utils/isEmpty'
import { addBook } from '../store'
import { removeBook } from '../store'
import { Button, Header, Image, Container } from 'semantic-ui-react'

import { connect } from 'react-redux'

class Book extends React.Component {

	checkShelf = () => {
		const contains = this.props.bookInfo.user_books.some(each =>{
			return JSON.stringify(this.props.bookInfo.book) === JSON.stringify(each)
		})

		if(contains) {
			return(
				<Button 
					content='Remove From Shelf'
					color='red'
					icon='minus circle'
					onClick={this.handleRemove} 
					value="Remove From Shelf"
				/>
			)
		} else {
			return(
				<Button 
					content='Add To Shelf'
					color='green'
					icon='plus circle'
					onClick={this.handleAdd} 
					value="Add To Shelf"
				/>
			)
		}
	}

	handleAdd = () => {
		this.props.addBook(this.props.bookInfo.book, this.props.userInfo.token)
	}

	handleRemove = () => {
		this.props.removeBook(this.props.bookInfo.book, this.props.userInfo.token)
	}

	handleBack = () => {
		console.log(window.history.state.state.past_route)
		window.location.assign(window.history.state.state.past_route)
	}

	rednerBackRoute = () => {

	}

	renderBook = () => {
		const book = this.props.bookInfo.book

		if ((!isEmpty(book) && !('error' in book))) {
			return (

				<div className="book-info">
					<Header 
						as='h1' 
						icon textAlign='center'
						content={`Title: ${book.title}`}
						style={{
							marginTop: '1em'
						}}
					/>
					<Header 
						as='h2' 
						icon textAlign='center'
						content={`Author: ${book.author}`}
					/>
					<Image 
						src={book.img} 
						alt="book cover"
						centered
					/>

					<Container textAlign='center'>
						Rating: {book.rating}
					</Container>

					<Container textAlign='center'>
						Year: {book.year}
					</Container>

					<Container textAlign='center'>
						Pages: {book.pages}
					</Container>

					<Container textAlign='center'>
						ISBN: {book.isbn}
					</Container>

					<Container 
						textAlign='center' 
						style={{
							marginTop: '3em'
						}}>
						<Button 
							color='orange'
							content='Back'
							icon='arrow alternate circle left'
							onClick={this.handleBack} 
						/>
						{this.checkShelf()}
					</Container>
				</div>
			)
		} else {
			return null
		}
	}

	render() {

		return (
			<div>
				{this.renderBook()}
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return state
}

const mapDispatchToProps = (dispatch) => {
	return {
		addBook: (book, token) => dispatch(addBook(book, token)),
		removeBook: (book, token) => dispatch(removeBook(book, token))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Book)
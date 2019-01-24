import React from 'react'
import { Link } from 'react-router-dom'
import { Image, Segment, Button, Icon, Container, Header } from 'semantic-ui-react'

const Welcome = (props) => {

	/** <div className="nav-bar-container">
		Welcome!!
	</div> **/

	return (

		<Segment
			inverted
			textAlign='center'
			style={{ minHeight: 700, 
						padding: '1em 0em', 
						background: 'url(https://i0.pickpik.com/photos/381/794/471/library-books-shelves-student-preview.jpg)',
						backgroundRepeat: 'no-repeat',
						backgroundSize: '100%',
						opacity: '.7'
					}}
			vertical
		>

			<Container text>

				<Header
					as='h1'
					content="Book'sHelp"
					inverted
					style={{
						fontSize: '5em',
						fontWeight: 'bold',
						color: '#FF7E00',
						marginBottom: 0,
						marginTop: '.5em',
					}}
				/>

				<Header
					as='h1'
					content='Power of Books'
					inverted
					style={{
						fontSize: '4em',
						fontWeight: 'bold',
						color: '#D43897',
						marginBottom: 0,
						marginTop: '1.5em',
					}}
				/>

				<Header
					as='h2'
					content='In the palm of your hands.'
					inverted
					style={{
						fontSize: '2em',
						fontWeight: 'bold',
						color: '#D43897',
						marginTop: '1.5em',
						marginBottom: '3em',
					}}
				/>

				<Link to="/signup">
					<Button inverted size='huge' color='green' >
						Get Started
						<Icon name='right arrow' />
					</Button>
				</Link>

			</Container>

		</Segment>
	)
}

export default Welcome
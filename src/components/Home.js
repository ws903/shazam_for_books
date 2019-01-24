import React from 'react'
import BookLookUp from "./book/BookLookUp"
import BarCodeReader from "./barcode/BarCodeReader"
import { Grid, Header, Container } from 'semantic-ui-react'

class Home extends React.Component {

	render() {
		return (
			<div className="App">

				<Header
					as='h1'
					content="Book'sHelp"
					inverted
					textAlign='center'
					style={{
						fontSize: '5em',
						fontWeight: 'bold',
						color: '#FF7E00',
						marginBottom: 0,
						marginBottom: '.1em'
					}}
				/>

				<BookLookUp />
				<br />

				<Container 
					textAlign='center' 
				>
					<BarCodeReader />
				</Container>

			</div>
		)
	}
}

export default Home

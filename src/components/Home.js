import React from 'react'
import BookLookUp from "./book/BookLookUp"
import BarCodeReader from "./barcode/BarCodeReader"

class Home extends React.Component {

	render() {
		return (
			<div className="App">
				<BookLookUp />
				<BarCodeReader />
			</div>
		)
	}
}

export default Home

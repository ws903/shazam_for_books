import React from 'react'
import { getISBN } from '../../store/actions/bookActions'

import { connect } from 'react-redux'

class Result extends React.Component {
	mode = (arr) => {
		return arr.sort((a,b) =>
			  arr.filter(v => v===a).length
			- arr.filter(v => v===b).length
		).pop()
	}

	componentDidMount() {
		const newResults = this.props.results.map(result => result.codeResult.code)
		const result = this.mode(newResults)

		this.props.getISBN(result)
	}

	render() {
		return null
	}
}

export default connect(null, {getISBN})(Result)
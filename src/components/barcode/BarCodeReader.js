import React from "react"
import Scanner from "./Scanner";
import Result from './Result';

export default class BarCodeReader extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			scanning: false,
			detected: false,
			results: []
		}
		this._scan = this._scan.bind(this)
		this._onDetected = this._onDetected.bind(this)
	}

	_scan() {
		this.setState({ 
			scanning: !this.state.scanning 
		})
	}

	_onDetected(result) {
		this.setState({ 
			results: this.state.results.concat([result])
		})

		if(this.state.results.length > 20) {
			this.setState({
				scanning: false,
				detected: true
			})
		}
	}

	render() {
		return(
			<div>
				<button onClick={this._scan}>{this.state.scanning ? 'Stop' : 'Start'}</button>
		        {this.state.scanning ? <Scanner onDetected={this._onDetected} /> : null}
		        {this.state.detected ? <Result assignISBN={this.props.assignISBN} results={this.state.results} /> : console.log('reading...')}
	        </div>
		)
	}

}
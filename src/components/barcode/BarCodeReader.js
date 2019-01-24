import React from "react"
import Scanner from "./Scanner";
import Result from './Result';

import { Button } from 'semantic-ui-react'

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

	_renderButton() {
		return (
			<div className="BarCodeStartStop">
				{this.state.scanning ? 
					<Button 
						size='huge'
						color='red'
						className="BarCodeReaderButton" 
						onClick={this._scan}
						content='Stop'
						icon='stop'
						labelPosition='left'
					>
					</Button> : 
					<Button 
						size='huge'
						color='green'
						className="BarCodeReaderButton" 
						onClick={this._scan}
						content='Start'
						icon='play'
						labelPosition='left'
					>
					</Button>
				}
			</div>
		)
	}

	render() {
		return(
			<div>
				{this._renderButton()}
				<br />
				{this.state.scanning ? <Scanner onDetected={this._onDetected} /> : null}
				{this.state.detected ? <Result assignISBN={this.props.assignISBN} results={this.state.results} /> : console.log('reading...')}
			</div>
		)
	}

}
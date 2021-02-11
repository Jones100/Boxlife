import React, {Component} from "react";
import "./App.css";

class StopWatch extends Component {

	state = {
		isRunning : false
	}

	handleStopwatch = () => {
		this.setState({
			isRunning : !this.state.isRunning
		});
	}

	render() {
		return (
			<div>
				<h2 className = "stopwatch"> Stopwatch </h2>
				<button onClick = {this.handleStopwatch}> 
					{this.state.isRunning ? "Stop" : "Start"} 
				</button>
				<button> Reset </button>
			</div>
		)
	} 
}

export default StopWatch;
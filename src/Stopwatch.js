import React, {Component} from "react";
import "./App.css";

class StopWatch extends Component {

	state = {
		isRunning : false
	}
	render() {
		return (
			<div>
				<h2 className = "stopwatch"> Stopwatch </h2>
				<button> {this.state.isRunning ? "Stop" : "Start"} </button>
				<button> Reset </button>
			</div>
		)
	} 
}

export default StopWatch;
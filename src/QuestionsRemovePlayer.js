import React, {Component} from "react";

export class QuestionRemovePlayer extends Component {
	state = {}
	render() {
		return (
			<div className = "questions-container">
				<div> Are you sure you want to remove this player? </div>
				<button onClick = {this.removePlayer}> Yes </button> 
				<button> No </button>
			</div>
		); 
	}
}

export default QuestionRemovePlayer;

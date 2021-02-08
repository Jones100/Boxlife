import React, {Component} from "react";
import {QuestionRemovePlayer} from "./QuestionsRemovePlayer.js";

export class SureRemovePlayer extends Component {
	state = {
		showMessage: false
	}

	toggleRemovePlayer = () => {
		this.setState({ showMessage: true });
	};
	
	render() {
		return (
			<div className="delete-button-container">
				{this.state.showMessage && <QuestionRemovePlayer />}
				<button onClick = {this.toggleRemovePlayer} className = "delete-button"> x </button>
			</div>
		);
	}
}

export default SureRemovePlayer;
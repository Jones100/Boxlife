import React, {PureComponent} from "react";
import Counter from "./Counter";
import {SureRemovePlayer} from "./SureRemovePlayer.js";
import {HandleHover} from "./HandleHover.js";

class Player extends PureComponent {
	render() {
		console.log(this.props.name + ' rendered');
		return (
			<div className="player">
				<div className="player-button-container">
					<div className="button-container">
							<SureRemovePlayer />
							{/* onClick={() => props.removePlayer(props.id)} */}
					</div>

					<div className="player-name"
							onMouseEnter={this.props.SetStateHover}
							onMouseLeave={this.props.SetStateHover}
					>
							<HandleHover>
									{this.props.name}
							</HandleHover>
					</div>
				</div>
				<Counter score = {this.props.score} 
									index = {this.props.index}
									changeScore = {this.props.changeScore}
				/>
			</div>
		);
	}
}

export default Player;
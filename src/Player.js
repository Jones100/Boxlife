import React, {PureComponent} from "react";
import Counter from "./Counter";
import {SureRemovePlayer} from "./SureRemovePlayer.js";
import {HandleHover} from "./HandleHover.js";

class Player extends PureComponent {
	render() {
		const {
			name, 
			id,
			index, 
			score,
			changeScore,
			SetStateHover,
			// removePlayer,
		} = this.props;

		console.log(name + ' rendered');
		
		return (
			<div className="player">
				<div className="player-button-container">
					<div className="button-container">
							<SureRemovePlayer />
							{/* onClick={() => props.removePlayer(props.id)} */}
					</div>

					<div className="player-name"
							onMouseEnter={SetStateHover}
							onMouseLeave={SetStateHover}
					>
							<HandleHover>
									{name}
							</HandleHover>
					</div>
				</div>
				<Counter score = {score} 
									index = {index}
									changeScore = {changeScore}
				/>
			</div>
		);
	}
}

export default Player;
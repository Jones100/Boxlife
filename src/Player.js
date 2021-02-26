import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import Counter from "./Counter";
import {SureRemovePlayer} from "./SureRemovePlayer.js";
// import {HandleHover} from "./HandleHover.js";

class Player extends PureComponent {

	static propTypes = {
		name: PropTypes.string.isRequired,
		score: PropTypes.number.isRequired,
		id: PropTypes.number.isRequired,
		index: PropTypes.number.isRequired,
		changeScore: PropTypes.func.isRequired,
		removePlayer: PropTypes.func.isRequired,
		hover: PropTypes.func.isRequired,
		isHovering: PropTypes.bool.isRequired
	};

	render() {
		const {
			name,
			id,
			index,
			score,
			changeScore,
			hover,
			isHovering
			// setStateHover,
			// removePlayer,
		} = this.props;

		// console.log(name + ' rendered');

		return (
			<div className="player">
				<div className="player-button-container">
					<div className="button-container">
							<SureRemovePlayer />
							{/* onClick={() => props.removePlayer(props.id)} */}
					</div>

					<div className="player-name"
							onMouseEnter={hover}
							onMouseLeave={hover}
					>
							{/* <HandleHover> */}
								{name}
							{/* </HandleHover> */}
					</div>

					{
						isHovering &&
						<div className="hover-div-2">
							Hovering right meow! 🐱
						</div>
					}

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
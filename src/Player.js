import React, {Component} from "react";
import Counter from "./Counter";
import {SureRemovePlayer} from "./SureRemovePlayer.js";
import {HandleHover} from "./HandleHover.js";

const Player = (props) => {
	return (
		<div className="player">
			<div className="player-button-container">
				<div className="button-container">
						<SureRemovePlayer />
						{/* onClick={() => props.removePlayer(props.id)} */}
				</div>

				<div className="player-name"
						onMouseEnter={props.SetStateHover}
						onMouseLeave={props.SetStateHover}
				>
						<HandleHover>
								{props.name}
						</HandleHover>
				</div>
			</div>
			<Counter score = {props.score} 
							 index = {props.index}
							 changeScore = {props.changeScore}
			/>
		</div>
	);
}

export default Player;
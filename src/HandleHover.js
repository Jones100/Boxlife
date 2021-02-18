import React, {Component} from "react";

export class HandleHover extends Component {
	state = {
		isHovering: false,
	};

	// setStateHover = () => {
	// 	this.setState(this.toggleHoverState);
	// }

	// toggleHoverState = (state) => {
	// 	return {
	// 		isHovering: !state.isHovering,
	// 	};
	// }

	render() {
		return (
			<div>
				<div className = "hover-div"
							onMouseEnter={this.setStateHover}
							onMouseLeave={this.setStateHover}
				>
					Hover Me
				</div>
				{
					this.state.isHovering &&
					<div className = "hover-div-2">
						Hovering right meow! 🐱
					</div>
				}
			</div>
		);
	}
}

export default HandleHover;
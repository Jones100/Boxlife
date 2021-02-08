import React, {Component} from "react";

export class HandleHover extends Component {
	state = {
		isHovering: false,
	};

	SetStateHover = () => {
		this.setState(this.toggleHoverState);
	}

	toggleHoverState = (state) => {
		return {
			isHovering: !state.isHovering,
		};
	}

	render() {
		return (
			<div>
				<div className = "hover-div"
							onMouseEnter={this.SetStateHover}
							onMouseLeave={this.SetStateHover}
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
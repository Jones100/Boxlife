import React, {Component} from "react";
import Stats from "./Stats";

const Header = (props) => {
	return (
		<header className="header">
			{/* <div className="total-players"> */}
			<Stats players = {props.players} />
			<h1 className="h1"> {props.title} </h1>
			{/* </div> */}
		</header>
	);
}

export default Header;
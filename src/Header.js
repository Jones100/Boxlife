import React, {Component} from "react";
import Stats from "./Stats";
import Stopwatch from "./Stopwatch";

const Header = ({players, title}) => {
	return (
		<header className="header">
			{/* <div className="total-players"> */}
			<Stats players = {players} />
			<h1 className="h1"> {title} </h1>
			{/* </div> */}
			<Stopwatch />
		</header>
	);
}

export default Header;
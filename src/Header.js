import React, {Component} from "react";

const Header = (props) => {
	return (
		<header className="header">
			<h1 className="h1"> {props.title} </h1>
			<div className="total-players">
				Players : {props.totalPlayers}
			</div>
		</header>
	);
}

export default Header;
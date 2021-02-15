import React, {Component} from "react";
import PropTypes from "prop-types";
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

Header.propTypes = {
	title: PropTypes.string,
	players: PropTypes.arrayOf(PropTypes.object).isRequired
};

Header.defaultProps = {
	title: "Scoreboard"
};

export default Header;
import React from "react";
import PropTypes from "prop-types";
        
const Counter = ({index, score, changeScore}) => { 

	return (
		<div className="counter-container">
			<div className="counter">
				<button className="counter-action-decrement" onClick = {() => changeScore(index, -1)}> -  </button>
				<div className="counter-score"> {score} </div>
				<button className="counter-action-increment" onClick={() => changeScore(index, 1)}> + </button>
			</div>
		</div>
	);
}

Counter.propTypes = {
	index: PropTypes.number,
	score: PropTypes.number,
	changeScore: PropTypes.func
};

export default Counter;
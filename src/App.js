import React, {Component} from "react";
import Header from "./Header";
import Player from "./Player";
import Counter from "./Counter";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  };
  
  render() {

		// 			<div className = "player-profile-container">
		// 				<div className = "player-nickname"> Nickname : </div>
		// 				<div className = "player-strategy"> Boxing Strategy :  </div>
		// 				<div className = "player-personality"> Personality : </div>
		// 			</div>

		
    class App extends React.Component {
			state = {
				players: [
					{
						name: "Mike Tyson",
						id: 1,
						score: 0,
						hoverMessage: "Heyyy"
					},
					{
						name: "Evander Holyfield",
						id: 2,
						score: 0,
						hoverMessage: "Heyyy"
					},
					{
						name: "Ray Robinson",
						id: 3,
						score: 0,
						hoverMessage: "Heyyy"
					},
					{
						name: "Genady Golovkin",
						id: 4,
						score: 0,
						hoverMessage: "Heyyy"
					}
				],
			}

			// The below parameter 'change' signifies the amount the score changes by. 
			// This can be named anything

			handleScoreChange = (index, change) => {
				// this.setState(prevState => ({
				// 	score: prevState.score 
				// }));
				console.log('index: ' + index, 'change: ' + change);
			}

			handleRemovePlayer = (id) => {
				this.setState(prevState => {
					return {
						players: prevState.players.filter(p => p.id !== id)
					};
				});
			}

			render() {
				return (
					
					<div className = "main-app-container">
						
						<div className = "scoreboard-container">
							<div className = "scoreboard-border">
								
								<div className = "header-container">
									<Header title = "Scoreboard" 
													totalPlayers = {this.state.players.length} />
								</div>

								<div className = "scoreboard-players-container">
									<div className ="scoreboard-players">
										{this.state.players.map((player, index) =>
											<Player name = {player.name}
														  score = {player.score}
															index = {index}
															id = {player.id}
															key = {player.id.toString()}
															changeScore = {this.handleScoreChange}
															removePlayer = {this.handleRemovePlayer}
											/>
										)}
									</div>
								</div>
							</div>
						</div>
					</div>
				);
			}
    }
    
    return (
      <App />
    );
  }
}

export default App;
import React, {Component} from "react";
import Header from "./Header";
import Player from "./Player";
import Counter from "./Counter";
import AddPlayerForm from "./AddPlayerForm";
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

			// player id counter below

			prevPlayerId = 4;

			handleScoreChange = (index, change) => {
				this.setState(prevState => ({
					score: prevState.players[index].score += change 
				}));
				// console.log(change)
			}

			handleAddPlayer = (name) => {
				// console.log(...this.state.players);
				this.setState(prevState => {
					return {
						players: [
							...this.state.players,
							{
								name : name,
								score : 0,
								id: this.prevPlayerId += 1 
							}
						]
					};
				});	
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
									<Header players = {this.state.players} 
										/>
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
										<AddPlayerForm addPlayer = {this.handleAddPlayer} />
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
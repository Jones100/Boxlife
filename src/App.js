import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  };
  
  render() {

    const Header = (props) => {
      return (
        <header className = "header">
          <h1 className = "h1"> {props.title} </h1>
          <div className = "total-players"> 
            Players : {props.totalPlayers}
          </div>
        </header>
      );
		}

    const Player = (props) => {
      return (
        <div className = "player">
					<div className = "player-button-container">
						<div className="button-container">
							
							{/* <button onClick={this.sureRemovePlayer}> click </button> */}

							<button onClick = {props.sureRemovePlayer}
									// onClick={() => props.removePlayer(props.id)}
								className="delete-button">
								x
							</button>



						</div>
						<div className = "player-name">
					  		{props.name}
						</div> 
					</div>

          <Counter />
        
        </div>
      );
    }

		class Counter extends React.Component { 
			state = {
				score: 0,
			}

			decrementScore = () => {
				this.setState(prevState => ({
					score: prevState.score -1
				}));
			}

			incrementScore = () => {
				this.setState(prevState => ({
					score: prevState.score +1
				}));
			}

			render() {
				return (
					<div className="counter-container">
						<div className="counter">
							<button className="counter-action-decrement" onClick = {this.decrementScore}> -  </button>
							<div className="counter-score"> {this.state.score} </div>
							<button className="counter-action-increment" onClick = {this.incrementScore}> -  </button>
						</div>
					</div>
				);
			}
		}

    class App extends React.Component {
			state = {
				players: [
					{
						name: "Iron Mike",
						id: 1
					},
					{
						name: "Real Deal Holyfield",
						id: 2
					},
					{
						name: "Razor Ruddock",
						id: 3
					},
					{
						name: "Triple G",
						id: 4
					},
				],

			}

			handleRemovePlayer = (id) => {
				this.setState(prevState => {
					return {
						players: prevState.players.filter(p => p.id !== id)
					};
				});
			}

			sureRemovePlayer = () => {
				console.log('Are you sure you want to remove this player?')
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
										{this.state.players.map(player =>
											<Player name = {player.name}
													id = {player.id}
													key = {player.id.toString()}
													removePlayer = {this.handleRemovePlayer}
													sureRemovePlayer = {this.sureRemovePlayer}
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
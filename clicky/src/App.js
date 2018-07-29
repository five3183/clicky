import React, { Component } from 'react';
import Wrapper from "./components/Wrapper";
import Header from './components/Header/Header'
import Intro from './components/Intro/Intro'
import Game from './components/Game/Game'
import minions from './minion.json'

let highScore = 0
let currentScore = 0

class App extends Component {
  state = {
    minions,
    highScore,
    currentScore
  }
  shuffle = (array) => {
    let counter = array.length;
    
    // While there are elements in the array
    while (counter > 0) {
      // Pick a random index
      let index = Math.floor(Math.random() * counter);
    
      // Decrease counter by 1
      counter--;
    
      // And swap the last element with it
      let temp = array[counter];
      array[counter] = array[index];
      array[index] = temp;
    }
    
    const minions = array
    return this.setState({minions})
  }
  render() {
    return (
      <div className="container-fluid">
        <Header 
          highScore={this.state.highScore}
          currentScore={this.state.currentScore}
        
        />
        <Intro />
        <Wrapper>
          {this.state.minions.map(minion => (
            <Game
              id={minion.id}
              image={minion.image}
              shuffle={this.shuffle}
            />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;

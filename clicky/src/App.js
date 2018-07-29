import React, { Component } from 'react';
import Wrapper from "./components/Wrapper";
import Header from './components/Header/Header'
import Intro from './components/Intro/Intro'
import Game from './components/Game/Game'
import minions from './minion.json'

let guessArray = []
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
  checkGuess = guess => {
    if(guessArray.includes(guess)) {
      console.log("this is highScore:  " + highScore)
      currentScore = 0
      this.setState({currentScore})
      this.shuffle(minions)
    }
    else {
      guessArray.push(guess)
      currentScore = (currentScore + 1)
      this.setState({currentScore})
      this.shuffle(minions)
      if(currentScore > highScore) {
        highScore = currentScore
        this.setState({highScore})
      }
    }
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
              checkGuess={this.checkGuess}
              shuffle={this.shuffle}
              highScore={this.state.highScore}
              currentScore={this.state.currentScore}
            />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;

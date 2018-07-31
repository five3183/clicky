import React, { Component } from 'react';
import Wrapper from "./components/Wrapper";
import Header from './components/Header/Header'
import Intro from './components/Intro/Intro'
import Game from './components/Game/Game'
import minions from './minion.json'
import Footer from './components/Footer/Footer'


let guessArray = []
let highScore = 0
let currentScore = 0
let status = "Click an image to begin!"

class App extends Component {
  state = {
    minions,
    highScore,
    currentScore,
    status
  }
  shuffle = (array) => {
    let counter = array.length;
    while (counter > 0) {
      let index = Math.floor(Math.random() * counter);
      counter--;
      let temp = array[counter];
      array[counter] = array[index];
      array[index] = temp;
    }
    
    const minions = array
    return this.setState({minions})
  }
  checkGuess = guess => {
    if(guessArray.includes(guess)) {
      status = "Try Again!"
      currentScore = 0
      this.setState({status})
      this.setState({currentScore})
      this.shuffle(minions)
      guessArray = []
    }
    else {
      guessArray.push(guess)
      currentScore = (currentScore + 1)
      status = "Keep Going!"
      this.setState({status})
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
          status={this.state.status}
        
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
        <Footer />
      </div>
    );
  }
}

export default App;

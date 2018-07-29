import React from 'react'
import './game.css'
import minions from '../../minion.json'
let guessArray = []


const Game = props => (
	<div className="col-md-2">
		<img className="tile" alt={props.name} src={props.image} onClick={() => 
			props.checkGuess(props.id)}/>
	</div>
)

export default Game
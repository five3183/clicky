import React from 'react'
import './game.css'
import minions from '../../minion.json'

const checkGuess = new Promise ((resolve, reject) => {

})

const Game = props => (
	<div className="col-md-2">
		<img className="tile" alt={props.name} src={props.image} onClick={() => props.shuffle(minions)}/>
	</div>
)

export default Game
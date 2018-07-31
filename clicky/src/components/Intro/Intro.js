import React, { Component } from 'react'
import './intro.css'

class Intro extends Component {
    render() {
        return (
            <div className="jumbotron jumbotron-fluid" id="intro">
                <h1>Clicky Game!</h1>
                <p>Click on an image to earn points, click it twice and you lose!</p>
            </div>    
        )
    }
}

export default Intro
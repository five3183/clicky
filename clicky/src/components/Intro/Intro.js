import React, { Component } from 'react'
import './intro.css'

class Intro extends Component {
    render() {
        return (
            <div className="jumbotron jumbotron-fluid">
                <h1>Clicky Game!</h1>
                <p>Click on an image to earn points, but don't click on any more than once!</p>
            </div>    
        )
    }
}

export default Intro
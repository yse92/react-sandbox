import React, { Component } from 'react'

export default class Clock extends Component {
    render() {
        return (
            <div>
            <hr></hr>
            <h3>Time now is</h3>            
            <h2>{this.props.date.toLocaleTimeString()}</h2>            
            <hr></hr>
          </div>
        )
    }
}

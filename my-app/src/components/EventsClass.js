import React, { Component } from 'react'

export class EventsClass extends Component {
    clickHandler(){
        console.log('clicked class button')
    }
  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>class component</button>
      </div>
    )
  }
}

export default EventsClass
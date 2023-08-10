import React, { Component } from 'react'

export class ConditionalRenderingClass extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoaded: true,
         isLoggedIn: true,
      }
    }

  render() {
    return (
      <div>
        <h1>{this.state.isLoaded ? 'loaded' : 'not loaded'}</h1>
        {this.state.isLoggedIn ? (
            <div>
                <p>welcom do this:</p>
                <ol>
                    <li>do</li>
                    <li>do not</li>
                    <li>doesnt dont</li>
                </ol>
            </div> 
        ) : (
            <p>sign in</p>
        )}
      </div>
    )
  }
}

export default ConditionalRenderingClass
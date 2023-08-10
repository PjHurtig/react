import React from 'react'

function EventsFunctional() {

    function clickHandler(){
        console.log('clicked funct button')
    }

  return (
    <div>
        <button onClick={clickHandler}>functional component</button>
      </div>
  )
}

export default EventsFunctional
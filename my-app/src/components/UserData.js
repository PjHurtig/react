import React from 'react'

function UserData(props) {
  return (
    <div>
        <h1>{props.isLoaded ? 'loaded' : 'not loaded'}</h1>
    </div>
  )
}

export default UserData
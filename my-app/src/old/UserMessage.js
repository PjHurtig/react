import React from 'react'

function UserMessage(props) {
  return (
    <div>
        {props.isLoggedIn ? (
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

export default UserMessage
import React from 'react'

 function Child(props) {
  return (
    <div>
      <button onClick={props.greetHandler}>greetparent</button>
    </div>
  )
}
export default Child

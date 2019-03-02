import React, { Component } from 'react'
import Child from './Child';

class Parent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         parentName:'parent'
      }
      this.greetParent=this.greetParent.bind(this)
    }
    greetParent(){
        alert(`hello ${this.state.parentName}`)
    }
    
  render() {
    return (
      <div>
        <Child greetHandler={this.greetParent}/> 
      </div>
    )
  }
}

export default Parent

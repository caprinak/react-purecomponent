
import './App.css';
import React, { Component, PureComponent } from 'react'


const Temp = (props) => {
  console.log("render temp")
  return (<div>{props.val}</div>)
}
//shallow compare, only use PureComponent is not too complex
export class App extends PureComponent {  
  state = { 
    val : 1
  }

//Ajax call can go here
componentDidMount(){
  setInterval(()=>{
    this.setState(()=>{
      return {val : 2}
    });
  },2000)
}

//redundant
/* shouldComponentUpdate(nextProp, nextState){
  console.log("next state", nextState);
  console.log("current state", this.state)
  return (this.state === nextState ? false : true )
} */
  render() {
    console.log("render app")
    return (
      <div className="App">
          <Temp val={this.state.val}/>
      </div>
    )
  }
}

export default App

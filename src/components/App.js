import React, { Component } from "react";
import "./App.css";
import SwitchButton from "./SwitchButton";


class App extends Component {
  state = { 
    time: 0,
    active: false
   } 
  intervalIndex = "";
  handleClick = () => {
     if(this.state.active){
        clearInterval(this.intervalIndex);
     }
     else{
        this.intervalIndex = setInterval(() => this.addSeconds(),1000)
     }
     this.setState({active: !this.state.active})
   }
   addSeconds = () => {
     this.setState({time: this.state.time + 1})
   }
  render() { 
    return (
      <>
      <p>{this.state.time}</p>
      <SwitchButton click={this.handleClick} active={this.state.active} />
      </>
    );
  }
}
 
export default App;
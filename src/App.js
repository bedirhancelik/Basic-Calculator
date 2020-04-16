import React, { Component } from 'react'
import KeyPad from "./components/KeyPad"
import Result from "./components/Result"
import "./App.css"
class App extends Component {
  constructor(){
    super()

    this.state = {
      result : ""
    }
    this.onClick = this.onClick.bind(this)
  }

  calculate(){
    try{
      this.setState({
        result : eval(this.state.result)
      })
    }
    catch{
      this.setState({
        result : "ERROR"
      })
    }
  }

  backspace(){
    this.setState({
      result : this.state.result.slice(0,-1)
    })
  }
  erase(){
    this.setState({
      result : ""
    })
  }

  onClick(button){
    if(this.state.result === "ERROR"){
      this.setState({
        result : button
      })
    }
    else if(button === "=")
      this.calculate()

    else if(button === "CE")
      this.backspace()
    
    else if(button === "C")
      this.erase()
    
    else{
      this.setState({
        result : this.state.result + button
      })
    }
  }

  render() {
    return (
      <div className="calculator">
          <Result result={this.state.result}></Result>
          <KeyPad onClick={this.onClick}></KeyPad>
      </div>
    )
  }
}

export default App
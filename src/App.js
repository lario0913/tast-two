import React, { Component } from 'react'
import './App.css'
import DisplayData from './components/DisplayData';

export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       data: []
    }
  }

  componentDidMount(){
    fetch("https://covidnigeria.herokuapp.com/api")
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          data: data
        })
      });
  }
  
  render() {
    return(
      <>
        <DisplayData data={this.state.data} />
      </>
    )
  }
}

export default App

import React, { Component } from 'react'
import './App.css'
import DisplayData from './components/DisplayData';
import { getCovidDataAction } from './redux/actions/action';
import {connect} from 'react-redux'

export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       isLoading: true
    }
  }

  componentDidMount(){
    try{
      this.props.getCovidDataAction()
    }catch(err){
      this.setState({
        isLoading: false
      })
    }finally{
      this.setState({
        isLoading: false,
      })
    }

  }
  
  render() {
    return(
      <>
        <DisplayData data={this.props.data.covidData} isLoading={this.state.isLoading}
        error={this.state.error} />
      </>
    )
  }
}



const mapDispatchToProps = dispatch => ({
  getCovidDataAction: () => dispatch(getCovidDataAction())
})

const mapStateToProps = state => ({
  data: state.covidData
})

export default connect(mapStateToProps, mapDispatchToProps)(App)

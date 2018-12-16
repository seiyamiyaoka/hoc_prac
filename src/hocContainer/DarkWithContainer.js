import React, { Component } from 'react'
import { fetchDarkHeroAPI } from '../model/evilHero'
import {SuperHeroList} from '../components/superHeroList';
const WithHOCContainer = WrappedComponent => {
  return class extends Component {
    state = {
      superHeroData: []
    }
    componentDidMount() {
      const data = fetchDarkHeroAPI();
      this.setState({
        superHeroData: data
      })
    }
    render() {
      return (
        <WrappedComponent superHeroData={this.state.superHeroData}/>
      )
    }
  }
}

export default WithHOCContainer(SuperHeroList)
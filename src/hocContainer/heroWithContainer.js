import React, { Component } from 'react'
import { fetchFarAayAPI } from '../model/superHero'
import {SuperHeroList} from '../components/superHeroList';
const WithHOCContainer = WrappedComponent => {
  return class extends Component {
    state = {
      superHeroData: []
    }
    componentDidMount() {
      const data = fetchFarAayAPI();
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
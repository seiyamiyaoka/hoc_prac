import React, { Component, Fragment } from 'react'
import { fetchFarAayAPI } from '../model/superHero'
import { SuperHeroList } from './superHeroList'
import WithHOCContainer from '../hocContainer/heroWithContainer'
import DarkWithHOCContainer from '../hocContainer/DarkWithContainer'
export default class SuperHeroListContainer extends Component {
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
      <Fragment>
        <SuperHeroList superHeroData={this.state.superHeroData} />
        <WithHOCContainer />
        <DarkWithHOCContainer />
      </Fragment>
    )
  }
}
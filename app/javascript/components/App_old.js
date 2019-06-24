import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import Home from './Home'
import Details from './Details'


export default class extends Component {
  state = {
    itemsProds: []
  }

  async componentDidMount() {
    const itemsProds = await (await fetch('http://54.207.97.97:9090/products')).json()
    this.setState({ itemsProds })
  }

  render() {
    const { itemsProds } = this.state
    return (

      <div className='main-content'>
        <h1>Poc de React com Ruby!</h1>

        <Route exact path="/" component={Home} />
        <Route exact path="/details" component={Details} />


      </div>
    )
  }
}



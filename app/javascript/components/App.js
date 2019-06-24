import React, { Component, Fragment } from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom'
import Products from './Products'


export default class extends Component {
  state = {
    itemsProds: []
  }

  async componentDidMount() {
    const itemsProds = await (await fetch('http://54.207.97.97:9090/products')).json()
    this.setState({ itemsProds })
  }

  render() {
    const {itemsProds} =this.state
    return <BrowserRouter>
    <Fragment>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/produtos'>Produtos</Link>
        </li>
      </ul>
      <hr/>

      <Route exact path='/' render={() => <div> Home </div> } />
      <Route path='/produtos' render={
        props => <Products {...props} itemsProds={itemsProds} />
      } />


    </Fragment>
    </BrowserRouter>

  }
}



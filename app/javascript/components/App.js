import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import Home from './Home'
import Details from './Details'
import DetailsProduct from './DetailsProduct'

class App extends React.Component{

  render() {

    return (
      <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/details" component={Details} />
          <Route exact path="/DetailsProduct" component={DetailsProduct} />

      </div>
    )
  }
}

export default App;

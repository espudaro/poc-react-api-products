import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import Home from './Home'
import Details from './Details'
// import DetailsProduct from './DetailsProduct'

class App extends React.Component{

  render() {

    return (

      <div className='main-content'>
        <h1>Poc de React com Ruby!</h1>

        <Route exact path="/" component={Home} />
        <Route exact path="/details" component={Details} />
        {/*<Route path="/DetailsProduct" component={DetailsProduct} />*/}

      </div>
    )
  }
}

export default App;

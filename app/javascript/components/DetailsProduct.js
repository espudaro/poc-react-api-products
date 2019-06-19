import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Details extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    };
  }

  async componentDidMount() {

    const itemsProds = await (await fetch('http://54.207.97.97:9090/products')).json()
    this.setState({
      isLoaded: true,
      items: itemsProds.products,
    })
  }

  render() {

    var { items, isLoaded } = this.state;
    if (!isLoaded) {
      return <div className='details__prod'> </div>;
    } else {
      return (
        <div className='details__prod'>
          <Link to='/Details' className='product__item--link'>Voltar</Link>
          <hr/>
          <h1 className='product__item--name'>{items[0].name}</h1>
          <img src={items[0].media} className='product__item--img' />
          <div className='product__item--sku'>{items[0].sku}</div>
          <p className='product__item--description'>{items[0].description}</p>
          <div className='product__item--amount'>{items[0].amount}</div>
        </div>

      );
    }
  }
}

export default Details;

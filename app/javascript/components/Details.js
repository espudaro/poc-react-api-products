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
      return <div> </div>;
    } else {
      return (
        <ul className='list-products'>
          {items.map(item => (
            <li key={item.sku} className='product__item'>
              <Link to='/DetailsProduct' className='product__item--link'>
                <img src={item.media} className='product__item--img' />
              </Link>
              <h3 className='product__item--name'>{item.name}</h3>
              <div className='product__item--sku'>{item.sku}</div>
              <p className='product__item--description'>{item.description}</p>
              <div className='product__item--amount'>{item.amount}</div>
            </li>
          ))}
        </ul>
      );
    }
  }
}

export default Details;

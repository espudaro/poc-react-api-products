import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    };
  }

  componentDidMount() {
    fetch('http://54.207.97.97:9090/products')
    .then(res => res.json())
    .then(json => {
      this.setState({
        isLoaded: true,
        items: json.products,
      })
    });
  }

  render() {

    var { items, isLoaded } = this.state;
    if (!isLoaded) {
      return <div className='details__prod'> </div>;
    } else {
      return (
        <ul className='list-products'>
          {items.map(item => (
            <li key={item.sku} className='product__item'>
              <Link to='/Details' className='product__item--link'>
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

export default Home;

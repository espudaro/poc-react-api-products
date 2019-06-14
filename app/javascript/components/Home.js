import React, { Component } from 'react';

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
      return <div> Loading...</div>;
    } else {
      return (
        <ul className='list-products'>
          {items.map(item => (
            <li key={item.sku} className='product__item'>
              <img src={item.media} className='product__item--img' />
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

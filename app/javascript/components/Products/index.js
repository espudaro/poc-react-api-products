import React, { Fragment } from 'react'
import { Link, Route } from 'react-router-dom'
import Product from './Product'

export default ({ match:{ url }, itemsProds }) =>
  <Fragment>
  <ul className='list-products'>
    {itemsProds.products.map(({ sku, name, media, description, amount }) =>
      // <li key={sku}>
      //   <Link to={`${url}/${sku}`}>{name}</Link>
      // </li>

      <li key={sku} className='product__item'>
        <Link to={`${url}/${sku}`} className='product__item--link'>
          <img src={media} className='product__item--img' />
        </Link>
        <h3 className='product__item--name'>{name}</h3>
        <div className='product__item--sku'>{sku}</div>
        <p className='product__item--description'>{description}</p>
        <div className='product__item--amount'>{amount}</div>
      </li>
    )}
  </ul>
  <Route path={`${url}/:productSKU`} render={
    ({ match }) => <Product {...itemsProds.products.find(item => item.sku === match.params.productSKU) } />
  }/>
  </Fragment>

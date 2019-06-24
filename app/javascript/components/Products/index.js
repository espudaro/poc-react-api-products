import React, { Fragment } from 'react'
import { Link, Route } from 'react-router-dom'
import Product from './Product'

export default ({ match:{ url }, itemsProds }) =>
  <Fragment>
  {`${url}`}
  <ul>
    {itemsProds.products.map(({sku, name}) =>
      <li key={sku}>
        <Link to={`${url}/${sku}`}>{name}</Link>
      </li>
    )}
  </ul>
  <Route path={`${url}/:productSKU`} render={
    ({ match }) => <Product {...itemsProds.products.find(item => item.sku === match.params.productSKU) } />

    }/>
  </Fragment>

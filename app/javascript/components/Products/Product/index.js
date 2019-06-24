import React, { Fragment } from 'react';
import { Link } from 'react-router-dom'

export default ({ match, sku, name, media, description, amount }) =>
  <Fragment>
    <div className='details__prod'>
      <Link to='/' className='product__item--link'>Voltar</Link>
      <hr/>
      <h1 className='product__item--name'>{name}</h1>
      <img src={media} className='product__item--img' />
      <div className='product__item--sku'>{sku}</div>
      <p className='product__item--description'>{description}</p>
      <div className='product__item--amount'>{amount}</div>
    </div>
  </Fragment>

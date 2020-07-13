import React from 'react';
import { priceGuarantee, greenText, blueText } from './style.js';

var Info = (props) => (
  <div id='info'>
    <h1 id='title'>{`${props.product.title}, ${props.product.length}" X ${props.product.width}"`}</h1>
    <div id='by'>By: <span>{props.product.brand}</span></div>
    <div id='wrapper'>
      <div id='stars'>
        <span>Star</span>
        <span>Star</span>
        <span>Star</span>
        <span>Star</span>
        <span>Star</span>
        <span id='numOfReviews'>{`(${props.product.reviews})`}</span>
      </div>
      <div id='price'>
        <span id='currencySpan'>{props.product.currency}</span>
        <span id='priceSpan'>{props.product.price}</span>
      </div>
    </div>
    <div id='bottomSection'>
      <div id='promo'>
        <span>
          <img style={priceGuarantee}></img>
        </span>
        <span style={greenText}>Price Match Guarantee </span>
        <span id='details' style={blueText} onMouseEnter={props.onMouseOver} onMouseLeave={props.onMouseOut}>Details</span>
      </div>
      <div id='qty'>
        <form>
          <div id='form'>
            <label>Quantity</label>
            <input type='button' value='-' />
            <input type='text' value='1' />
            <input type='button' value='+' />
          </div>
        </form>
      </div>
    </div>
  </div>
)

export default Info;
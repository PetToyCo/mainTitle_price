import React from 'react';
import Stars from './stars.jsx';
import { title, upperSection, price, priceGuarantee, greenText, blueText, form, quantity, plusMinus, number } from './style.js';

var Info = (props) => (
  <div id='info'>
    <div id='title' style={title}>{`${props.product.title}, ${props.product.length}" X ${props.product.width}"`}</div>
    <div id='by'><span style={{fontSize: '.8125em',
    lineHeight: '1.38462em',}}>By: </span><span id='brand' style={blueText} onMouseEnter={props.onMouseOver} onMouseLeave={props.onMouseOut}>{props.product.brand}</span></div>
    <div id='wrapper' style={upperSection}>
      <div id='starsDiv'>
        <Stars reviews={props.product.reviews} black={props.product.blackStars} white={props.product.whiteStars} half={props.product.halfStars}/>
      </div>
      <div id='price' style={price}>
        <span id='currencySpan'>{props.product.currency}</span>
        <span id='priceSpan'>{props.product.price}</span>
      </div>
    </div>
    <div id='bottomSection'>
      <div id='promo'>
        <span style={priceGuarantee}> </span>
        <span>     </span>
        <span style={greenText}>Price Match Guarantee </span>
        <span id='details' onClick={props.openModal} style={blueText} onMouseEnter={props.onMouseOver} onMouseLeave={props.onMouseOut}>Details</span>
      </div>
      <div id='qty'>
        <form>
          <div id='form' style={form}>
            <label id='qty' style={quantity}>Qty</label>
            <input id='-' type='button' value='-' style={plusMinus} onClick={props.minus} onMouseEnter={props.onButton} onMouseLeave={props.offButton} />
            <input id='qtyNumber' type='text' value='1' style={number} />
            <input id='+' type='button' value='+' style={plusMinus} onClick={props.plus} onMouseEnter={props.onButton} onMouseLeave={props.offButton} />
          </div>
        </form>
      </div>
    </div>
  </div>
)

export default Info;
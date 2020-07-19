import React from 'react';
import { blackStars, halfStars, whiteStars, ratingNum, stars } from './style.js';

var Stars = (props) => (
  <div id='starsSection' style={stars}>
    <span id='stars'>
    {props.black > 0 && <span id='b1' style={blackStars}></span>}
    {props.black > 1 && <span id='b2' style={blackStars}></span>}
    {props.black > 2 && <span id='b3' style={blackStars}></span>}
    {props.black > 3 && <span id='b4' style={blackStars}></span>}
    {props.black > 4 && <span id='b5' style={blackStars}></span>}
    {props.half > 0 && <span id='h1' style={halfStars}></span>}
    {props.white > 0 && <span id='w1' style={whiteStars}></span>}
    {props.white > 1 && <span id='w2' style={whiteStars}></span>}
    {props.white > 2 && <span id='w3' style={whiteStars}></span>}
    {props.white > 3 && <span id='w4' style={whiteStars}></span>}
    {props.white > 4 && <span id='w5' style={whiteStars}></span>}
    </span>
    <span>  </span>
    <span id='numOfReviews' style={ratingNum}>{`(${props.reviews})`}</span>
  </div>
)


export default Stars;
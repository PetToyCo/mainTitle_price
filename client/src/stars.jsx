import React from 'react';
import { blackStars, halfStars, whiteStars, ratingNum } from './style.js';

var Stars = (props) => (
  <div id='starsSection'>
    <span id='stars'>
    {props.black > 0 && <span style={blackStars}></span>}
    {props.black > 1 && <span style={blackStars}></span>}
    {props.black > 2 && <span style={blackStars}></span>}
    {props.black > 3 && <span style={blackStars}></span>}
    {props.black > 4 && <span style={blackStars}></span>}
    {props.half > 0 && <span style={halfStars}></span>}
    {props.white > 0 && <span style={whiteStars}></span>}
    {props.white > 1 && <span style={whiteStars}></span>}
    {props.white > 2 && <span style={whiteStars}></span>}
    {props.white > 3 && <span style={whiteStars}></span>}
    {props.white > 4 && <span style={whiteStars}></span>}
    </span>
    <span id='numOfReviews' style={ratingNum}>{`(${props.reviews})`}</span>
  </div>
)





export default Stars;
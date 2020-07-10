import React from 'react';
import axios from 'axios';
import { priceGuarantee, greenText, blueText } from './style.js';

class MainTitle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      brand: '',
      title: '',
      length: '',
      width: '',
      rating: '',
      reviews: '',
      currency: '',
      price: ''
    }

    this.onMouseOver.bind(this);
    this.onMouseOut.bind(this);
  }

  //hardcoded to item 100 for development
  componentDidMount() {
    var item = 100;

    //axios request for currency, price
    axios.get(`http://127.0.0.1:3005/itemPrice/${item}`)
      .then(data => {
        console.log('success getting itemPrice');
        this.setState({
          currency: data.data.currency,
          price: data.data.price
        });
      })
      .catch(err => {
        console.log('error getting itemPrice in componentDidMount: ', err);
      });

    //axios request for brand, title
    axios.get(`http://127.0.0.1:3002/descriptionObject/${item}`)
      .then(data => {
        console.log('success getting descriptionObject');
        var length = data.data.attributes.length.split(' ')[0];
        var width = data.data.attributes.width.split(' ')[0];

        this.setState({
          brand: data.data.description.primaryBrand,
          title: data.data.description.title,
          length: length,
          width: width
        });
      })
      .catch(err => {
        console.log('error getting descObj in componentDidMount: ', err);
      });

    //axios request for stars and # of reviews
    axios.get(`http://127.0.0.1:3001/averageReviews/${item}`)
      .then(data => {
        console.log('success getting averageReviews: ', data);
        this.setState({
          rating: data.data.reviewAverage,
          reviews: data.data.numberOfReviews
        });
      })
      .catch(err => {
        console.log('error getting averageReviews in componentDidMount: ', err);
      });
  }

  onMouseOver(e) {
    var element = document.getElementById(e.target.id);
    element.style.color = '#00395e';
    element.style.textDecoration = 'underline' ;
  }

  onMouseOut(e) {
    var element = document.getElementById(e.target.id);
    element.style.color = '#005891';
    element.style.textDecoration = 'none' ;
  }


  render() {
    return (
      <div id='mainTitle'>
        <div id='info'>
          {/* note to add L and W */}
          <h1 id='title'>{`${this.state.title}, ${this.state.length}" X ${this.state.width}"`}</h1>
          <div id='by'>By: <span>{this.state.brand}</span></div>
          <div id='wrapper'>
            <div id='stars'>
              <span>Star</span>
              <span>Star</span>
              <span>Star</span>
              <span>Star</span>
              <span>Star</span>
              <span>{`(${this.state.reviews})`}</span>
            </div>
            <div id='price'>
              <span>{this.state.currency}</span>
              <span>{this.state.price}</span>
            </div>
          </div>
          <div id='bottomSection'>
            <div id='promo'>
              <span>
                <img style={priceGuarantee}></img>
              </span>
              <span style={greenText}>Price Match Guarantee </span>
              <span id='details' style={blueText} onMouseEnter={this.onMouseOver} onMouseLeave={this.onMouseOut}>Details</span>
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
      </div>
    )
  }
}

export default MainTitle;
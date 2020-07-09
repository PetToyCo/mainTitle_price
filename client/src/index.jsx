import React from 'react';
import axios from 'axios';
import { priceGuarantee } from './style.js';

class MainTitle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      brand: '',
      title: '',
      rating: '',
      reviews: '',
      currency: '',
      price: ''
    }
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
        this.setState({
          brand: data.data.description.primaryBrand,
          title: data.data.description.title
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



  render() {
    return (
      <div id='mainTitle'>
        <div id='info'>
          {/* note to add L and W */}
          <h1>{`${this.state.title}`}</h1>
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
              <span>Price Match Guarantee </span>
              <span>Details</span>
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
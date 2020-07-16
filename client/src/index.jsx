import React from 'react';
import axios from 'axios';
import Info from './info.jsx';
import { main } from './style.js';

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
      price: '',
      blackStars: '',
      whiteStars: '',
      halfStars: ''
    }

    this.onMouseOver.bind(this);
    this.onMouseOut.bind(this);
    this.qtyOnClickPlus.bind(this);
    this.qtyOnClickMinus.bind(this);
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
        var whole = data.data.reviewAverage.split('.')[0];
        var wholeNum = parseInt(whole);
        var decimal = data.data.reviewAverage.split('.')[1];
        var decNum = parseFloat(decimal);
        console.log('wholeNum: ', wholeNum);
        console.log('decNum: ', decNum);
        var black;
        var white;
        var half;
        if (decNum < 3) {
          black = wholeNum;
          white = 5 - wholeNum;
          half = 0;
        } else if (decNum < 7) {
          black = wholeNum;
          half = 1;
          white = 4 - wholeNum;
        } else {
          black = wholeNum + 1;
          white = 0;
          half = 0;
        }
        this.setState({
          rating: data.data.reviewAverage,
          reviews: data.data.numberOfReviews,
          blackStars: black,
          whiteStars: white,
          halfStars: half
        });
        console.log('state: ', this.state);
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

  qtyOnClickPlus() {
    var num = document.getElementById('qtyNumber');
    var value = num.value;
    var valNum = parseInt(value);
    valNum++;
    num.value = valNum;
  }

  qtyOnClickMinus() {
    var num = document.getElementById('qtyNumber');
    var value = num.value;
    var valNum = parseInt(value);
    if (valNum > 1) {
      valNum--;
      num.value = valNum;
    }
  }



  render() {
    return (
      <div id='mainTitle' style={main}>
        <Info product={this.state} onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut} plus={this.qtyOnClickPlus} minus={this.qtyOnClickMinus}/>
      </div>
    )
  }
}

export default MainTitle;
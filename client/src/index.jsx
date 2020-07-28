import React from 'react';
import axios from 'axios';
import Info from './info.jsx';
import Modal from './modal.jsx';
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
      halfStars: '',
      modal: false
    }

    this.onMouseOver.bind(this);
    this.onMouseOut.bind(this);
    this.qtyOnClickPlus.bind(this);
    this.qtyOnClickMinus.bind(this);
    this.onMouseOutButton.bind(this);
    this.onMouseOverButton.bind(this);
    this.modalClose = this.modalClose.bind(this);
    this.modalOpen = this.modalOpen.bind(this);
  }


  componentDidMount() {
    //hardcoded to item 100 for development
    //var item = 100;

    //uncomment to use with a proxy server
    var item = window.location.href.split('=')[1];

    //development
    var priceAddress = 'http://127.0.0.1';

    //production
    //var priceAddress = 'http://52.14.208.55';

    //axios request for currency, price
    axios.get(`${priceAddress}:3005/itemPrice/${item}`)
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
    axios.get(`${priceAddress}:3002/descriptionObject/${item}`)
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

    //development
    var starsAddress = 'http://127.0.0.1';

    //production
    //var starsAddress = 'http://54.183.137.155';

    //axios request for stars and # of reviews
    axios.get(`${starsAddress}:3001/averageReviews/${item}`)
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
    element.style.textDecoration = 'underline';
  }

  onMouseOut(e) {
    var element = document.getElementById(e.target.id);
    element.style.color = '#005891';
    element.style.textDecoration = 'none';
  }

  onMouseOverButton(e) {
    console.log('mouseButtonOn', e.target.id)
    var element = document.getElementById(e.target.id);
    element.style.backgroundColor = 'rgba(215, 220, 220, 0.4)';
  }

  onMouseOutButton(e) {
    console.log('mouseButtonOff', e.target.id)
    var element = document.getElementById(e.target.id);
    element.style.backgroundColor = 'white';
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

  modalClose() {
    this.setState({
      modal: false
    });
  }

  modalOpen() {
    this.setState({
      modal: true
    });
  }



  render() {
    return (
      <div id='mainTitle' style={main}>
        <Info product={this.state} openModal={this.modalOpen} onButton={this.onMouseOverButton} offButton={this.onMouseOutButton} onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut} plus={this.qtyOnClickPlus} minus={this.qtyOnClickMinus}/>
        {this.state.modal && <Modal closeModal={this.modalClose} />}
      </div>
    )
  }
}

export default MainTitle;
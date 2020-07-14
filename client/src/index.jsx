import React from 'react';
import axios from 'axios';
import Info from './info.jsx';

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
        <Info product={this.state} onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut}/>
      </div>
    )
  }
}

export default MainTitle;
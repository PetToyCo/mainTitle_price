import React from 'react';
import axios from 'axios';

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
    axios.get(`itemPrice/${item}`)
    .then(data => {
      console.log('success getting data in componentDidMount: ', data);
      this.setState({
        currency: data.data.currency,
        price: data.data.price
      });
    })
    .catch(err => {
      console.log('error getting descObj in componentDidMount: ', err);
    });

    //axios request for brand, title
    axios.get(`http://127.0.0.1:3002/descriptionObject/${item}`)
    .then(data => {
      console.log('success getting data in componentDidMount: ', data);
      this.setState({
        brand: data.data.description.primaryBrand,
        title: data.data.description.title
      });
      console.log(this.state);
    })
    .catch(err => {
      console.log('error getting descObj in componentDidMount: ', err);
    });

    //axios request for stars and # of reviews
  }



  render() {
    return (
     <div id='mainTitle'>
       <h1>Title</h1>
     </div> 
    )
  }
}

export default MainTitle;
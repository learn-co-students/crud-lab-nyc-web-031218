import React, { Component } from 'react';
import ReviewInput from './ReviewInput'
import Review from './Review'

class Restaurant extends Component {

  handleOnClick = () => {
    this.props.store.dispatch({
      type: 'DELETE_RESTAURANT',
      id: this.props.restaurant.id,
    });
  }

  render() {


    return (
      <div>
        <li>
          {this.props.restaurant.text}
          <button onClick={this.handleOnClick}>Delete</button>
          <ReviewInput restaurantId={this.props.restaurant.id} store={this.props.store}/>
        </li>
      </div>
    );
  }
};

export default Restaurant;

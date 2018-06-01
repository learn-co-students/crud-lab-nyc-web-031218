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
    const reviews = this.props.store.getState().reviews.map((review) => {
        return <Review review={review} key={review.id} store={this.props.store} />
      });

    return (
        <li>
          {this.props.restaurant.text}
          <button onClick={this.handleOnClick}>Delete</button>
          <ReviewInput restaurantId={this.props.restaurant.id} store={this.props.store}/>
          <ul>
            { reviews }
          </ul>
        </li>
    );
  }
};

export default Restaurant;

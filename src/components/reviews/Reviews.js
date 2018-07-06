import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const {store, restaurantId} = this.props
    const associatedReviews = store.getState().reviews.filter(rev => rev.restaurantId === restaurantId)
    const reviews = associatedReviews.map((rev, index) => {
      return <Review store={store} key={index} review={rev} />
    })
    return (
      <ul>
        {reviews}
      </ul>
    );
  }
};

export default Reviews;
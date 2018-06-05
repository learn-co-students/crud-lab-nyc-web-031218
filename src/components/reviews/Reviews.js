import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    console.log(this.props.store.getState().reviews)
    const reviews = this.props.store.getState().reviews.filter(review => review.restaurantId === this.props.restaurantId)
    const reviewComponents = reviews.map((review) => {
        return <Review key={review.id} review={review} store={this.props.store} />
    })
    return (
      <ul>
        {reviewComponents}
      </ul>
    );
  }
};

export default Reviews;

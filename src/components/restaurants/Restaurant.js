import React, { Component } from 'react';
import ReviewInput from '../reviews/ReviewInput'

class Restaurant extends Component {
  handleClick = () => {
    this.props.store.dispatch({
      type: 'DELETE_RESTAURANT',
      id: this.props.restaurant.id
    })
  }

  render() {
    return (
      <div>
        <li>
          {this.props.restaurant.text}
          &nbsp;
          <button onClick={this.handleClick}>Delete</button>
          &nbsp;
          <ReviewInput store={this.props.store} restaurantId={this.props.restaurant.id} />
        </li>
      </div>
    );
  }
};

export default Restaurant;

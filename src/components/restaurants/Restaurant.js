import React, { Component } from 'react';
import ReviewInput from '../reviews/ReviewInput'

class Restaurant extends Component {
  click = () => {
    this.props.store.dispatch({
      type: 'DELETE_RESTAURANT',
      id: this.props.rest.id
    })
  }
  render() {
    return (
      <div>
        <li>
          {this.props.rest.text}
          <button onClick={this.click}>Delete</button>
          <ReviewInput store={this.props.store} restaurantId={this.props.rest.id} />
        </li>
      </div>
    );
  }
};

export default Restaurant;
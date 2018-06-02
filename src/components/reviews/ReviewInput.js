import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  state = {
    restaurantId: this.props.restaurantId,
    text: ''
  }

  handleChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_REVIEW',
      review: this.state
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Reviews</label>
          <br />
          <input type='text' value={this.state.text} onChange={this.handleChange} />
          <input type='submit' value='Add Review' />
        </form>
        <Reviews store={this.props.store} restarauntId={this.props.restaurantId} />
      </div>
    );
  }
};

export default ReviewInput;

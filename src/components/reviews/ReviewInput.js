import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  state = {
    text: ''
  }

  handleChange(event) {
    console.log(this.state.text)
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()

    this.props.store.dispatch({
      type: 'ADD_REVIEW',
      restaurantId: this.props.restaurantId,
      text: this.state.text
    })

    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <label>Review: </label>
          <input
            type='text'
            onChange={(event) => this.handleChange(event)}
            value={this.state.text} />
          <input type='submit' />
        </form>
        <Reviews store={this.props.store} restaurantId={this.props.restaurantId} />
      </div>
    );
  }
};

export default ReviewInput;

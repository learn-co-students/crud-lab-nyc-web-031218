import React, { Component } from 'react';

class Review extends Component {

  click = () => {
    this.props.store.dispatch({
      type: 'DELETE_REVIEW',
      id: this.props.review.id
    })
  }
  render() {
    return (
      <li>
        {this.props.review.text}
        <button onClick={this.click}>DELETE</button>
      </li>
    );
  }
};

export default Review;
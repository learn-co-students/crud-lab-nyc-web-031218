import React, { Component } from 'react';

class Review extends Component {
  handleClick = () => {
    this.props.store.dispatch({
      type: 'DELETE_REVIEW',
      id: this.props.review.id
    })
  }

  render() {
    return (
      <li>
        {this.props.review.text}
        &nbsp;
        <button onClick={this.handleClick}>X</button>
      </li>
    );
  }
};

export default Review;

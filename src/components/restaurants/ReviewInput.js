import React, { Component } from 'react';

class ReviewInput extends Component {


    state = {
      text: '',
    };

  handleOnChange(event) {
    this.setState({
      text: event.target.value,
    });
  }

  handleOnSubmit(event) {
    event.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_REVIEW',
      review: { ...this.state, id: this.props.restaurantId }
    });
    this.setState({
      text: '',
    });
  }

  render() {
    return(
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <p>
            <label>New Review:</label>
            <input
              type="text"
              value={this.state.text}
              onChange={(event) => this.handleOnChange(event)}/>
          </p>
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default ReviewInput;

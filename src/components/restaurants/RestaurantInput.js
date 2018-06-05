import React, { Component } from 'react';

class RestaurantInput extends Component {
  state = {
    text: ''
  }

  handleChange(event) {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()

    this.props.store.dispatch({
      type: 'ADD_RESTAURANT',
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
          <label>Add restaurant: </label>
          <input
            type='text'
            onChange={(event) => this.handleChange(event)}
            value={this.state.text} />
          <input type='submit' />
        </form>
      </div>
    );
  }
};

export default RestaurantInput;

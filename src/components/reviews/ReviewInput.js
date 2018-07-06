import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  state = {text: ''}

  change = (e) => {
    this.setState({text: e.target.value})
  }

  submit = (e) => {
    e.preventDefault()
    this.props.store.dispatch({
      type: 'ADD_REVIEW',
      review: {
        text: this.state.text,
        restaurantId: this.props.restaurantId
      }
    })
    this.setState({text: ''})
  }
  render() {
    return (
      <div>
        <form onSubmit={this.submit}>
          <label>Add Review</label>
          <input 
            type="text"
            value={this.state.text}
            onChange={this.change}
          />
          <input type="submit" value="SUBMIT"/>
        </form>
        <Reviews 
          store={this.props.store}
          restaurantId={this.props.restaurantId}
        />
      </div>
    );
  }
};

export default ReviewInput;

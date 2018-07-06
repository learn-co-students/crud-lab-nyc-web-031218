import React, { Component } from 'react';

class RestaurantInput extends Component {
  state = {text: ''}
  handleChange = (e) => {
    this.setState({text: e.target.value})
  }
  submit = (e) => {
    e.preventDefault()
    this.props.store.dispatch({
      type: 'ADD_RESTAURANT',
      restaurant: {text: this.state.text}
    })
    this.setState({text: ''})
  }
  render() {
    return (
      <div>
        <form onSubmit={this.submit}>
          <label>Add Restaurant</label><br/>
          <input 
            type="text"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <input type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
};

export default RestaurantInput;

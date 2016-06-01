import React, { Component, PropTypes } from 'react';
require('styles/main.scss');

export default class Main extends Component {

  static propTypes = {
    children: PropTypes.any.isRequired
  };

  render() {
    return (
      <div>
          {/* this will render the child routes */}
          { React.cloneElement(this.props.children, this.props) }
      </div>
    )
  }
}

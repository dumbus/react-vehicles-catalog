import React, { Component } from 'react';

import './ErrorBoundary.scss';

import Error from '../Error/Error';

class ErrorBoundary extends Component {
  state = {
    isError: false
  };

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);

    this.setState({
      isError: true
    });
  }

  render() {
    if (this.state.isError) {
      return (
        <div className="error-boundary container">
          <Error />
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

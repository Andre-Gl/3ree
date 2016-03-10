import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Header from '../components/Header';
import AsyncBar from '../components/AsyncBar';

import * as Actions from '../actions/index';

class HubApp extends Component {
  static propTypes = {
    userId: React.PropTypes.string,
    isWorking: React.PropTypes.bool,
    error: React.PropTypes.any,
    syncIdm: React.PropTypes.func.isRequired
  };

  componentDidMount() {
    // this.props.syncIdm();
  }

  render() {
    let actions = { 
    };

    return (
      <div className="Pulse-Container">
        <Header/>
        <AsyncBar isWorking={this.props.isWorking} error={this.props.error} />
        {this.props.children}
      </div>
    );
  }
}

/**
 * Expose "Smart" Component that is connect-ed to Redux
 */
export default connect(
  state => ({
    userId: state.hubApp.userId,
    isWorking: state.hubApp.isWorking,
    error: state.hubApp.error
  }), 
  dispatch => bindActionCreators(Actions, dispatch)
)(HubApp);

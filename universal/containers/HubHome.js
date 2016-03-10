import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as Actions from '../actions/index';

class HubHome extends Component {
  static propTypes = {
    userId: React.PropTypes.string,
    events: React.PropTypes.array,
    pis: React.PropTypes.object
  };

  render() {
    const { pis } = this.props;
    let actions = { 
    };

    return (
      <div>Home
        <div></div>
      </div>
    );
  }
}

/**
 * Expose "Smart" Component that is connect-ed to Redux
 */
export default connect(
  state => ({
    events: state.hubApp.events,
    userId: state.hubApp.userId,
    pis: state.hubApp.pis
  }), 
  dispatch => bindActionCreators(Actions, dispatch)
)(HubHome);
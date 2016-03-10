import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import InventoryList from './../components/InventoryList';

import * as Actions from '../actions/index';

class HubSearch extends Component {
  static propTypes = {
    userId: React.PropTypes.string,
    events: React.PropTypes.array,
    params: React.PropTypes.object
  };

  componentDidMount() {
    this.props.fetchPIS(this.props.params);
  }

  render() {
    var make, model, userInventoryList;
    const { pis } = this.props;
    const { search } = this.props;
    if (search) {
      make = search.make;
      model = search.model;
    }

    if (pis) {
      userInventoryList = pis.userInventoryList;
    }

    return (
      <div>
        <h2>{make} {model}</h2>
        <InventoryList inventories={userInventoryList || []} />
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
    search: state.hubApp.search,
    pis: state.hubApp.pis
  }), 
  dispatch => bindActionCreators(Actions, dispatch)
)(HubSearch);
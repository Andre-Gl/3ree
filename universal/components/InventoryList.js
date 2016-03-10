import React, {PropTypes, Component} from 'react';
import InventoryItem from './InventoryItem';

export default class InventoryList extends Component {
  static propTypes = {
    inventories: PropTypes.array.isRequired
  };

  render() {
    const { inventories } = this.props;

    let list;
    console.log(inventories)

    if (inventories.length > 0) {
      list = inventories.map((inventory, index) =>
        <InventoryItem key={index} index={index} inventory={inventory} />
      );
    } else {
      list = <li>
        <div className='Pulse-eventItem empty'>
          <p>No events recorded!</p>
        </div>
      </li>;
    }

    return (
      <section className='Pulse-eventList'>
        <div className='Pulse-eventList-summary'>
          <span>Your Invenotries</span>
          <span className='val'>{inventories.length}</span>
        </div>
        <div className='Pulse-eventList-list'>
          <ul>
            {list}
          </ul>
        </div>
      </section>
    );
  }
}
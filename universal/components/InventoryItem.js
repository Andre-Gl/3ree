import React, {PropTypes, Component} from 'react';
import moment from 'moment';

export default class InventoryItem extends Component {
  static propTypes = {
    inventory: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
  };

  constructor(props, context){
    super(props, context);
  }

  render() {
    const { inventory, index } = this.props;

    let element, className = (index % 2 === 0) ? 'even' : 'odd';
    let modified = inventory.lastPriceDrop.priceDeltaTimeStamp;

    element = (
      <div className='Pulse-eventItem'>
        <p className='rowNumber'>{inventory.vehicleInventory.vin}</p>
        <p className='title'>
          {inventory.vehicleInventory.year}&nbsp;
          {inventory.vehicleInventory.make}&nbsp;
          {inventory.vehicleInventory.submodel}
        </p>
        <p className='created'>{modified ? moment(modified).fromNow() : ''}</p>
        <p className='outcome'>{inventory.vehicleInventory.guaranteedPrice}</p>
      </div>
    );

    return (
      <li className={className}>{element}</li>
    );
  }
}
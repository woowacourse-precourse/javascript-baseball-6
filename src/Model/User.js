import Player from './Player.js';

import { START_ORDER } from '../constants/constants.js';

class User extends Player {
  #startOrder;

  setStartOrder(order) {
    this.startOrder = order;
  }

  wantToStart() {
    return this.startOrder === START_ORDER;
  }
}

export default User;

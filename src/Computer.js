import { Random } from "@woowacourse/mission-utils";

import {
  GAME_NUM_LENGTH,
  GAME_START_RANGE,
  GAME_END_RANGE,
} from "./constant/rule";

export default class Computer {
  constructor() {
    this.randomArray = [];
    this.makeThreeRandomNumber();
  }

  makeThreeRandomNumber() {
    while (this.randomArray.length < GAME_NUM_LENGTH) {
      const number = Random.pickNumberInRange(GAME_START_RANGE, GAME_END_RANGE);

      if (!this.randomArray.includes(number)) {
        this.randomArray.push(number);
      }
    }

    return this;
  }

  getComputerNumber() {
    return this.randomArray;
  }
}

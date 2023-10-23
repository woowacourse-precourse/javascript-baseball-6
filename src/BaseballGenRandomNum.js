import { Random } from "@woowacourse/mission-utils";

export default class BaseballGenRandomNum {
  state = null;
  constructor({ initialState, changeComputerState }) {
    this.state = initialState;
    this.changeComputerState = changeComputerState;
    this.genRandomNum();
  }

  genRandomNum() {
    const computer = [];
    while (computer.length < 3) {
      const num = Random.pickNumberInRange(1, 9, 3);
      if (!computer.includes(num)) {
        computer.push(num);
      }
    }

    this.changeComputerState(computer);
  }
}

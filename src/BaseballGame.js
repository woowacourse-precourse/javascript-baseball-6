import BaseballInput from "./BaseballInput.js";
import BaseballGenRandomNum from "./BaseballGenRandomNum.js";
import BaseballLogic from "./BaseballLogic.js";
import { validateUserInput } from "./utils/inputValidator.js";
import { INFO_MESSAGE } from "./constants/message.js";

import { Console } from "@woowacourse/mission-utils";
import { MAGIC_NUM } from "./constants/magicNum.js";

export default class BaseballGame {
  state = {
    user: null,
    computer: null,
    count: { ball: 0, strike: 0 },
  };

  constructor() {
    this.baseballLogic = new BaseballLogic({
      initialState: this.state,
      changeCntState: (count) => {
        this.setState({ ...this.state, count });
        this.printHint(this.state.count);
      },
    });

    this.baseballInput = new BaseballInput({
      initialState: this.state,
      changeUserState: (userInput) => {
        if (validateUserInput(userInput)) {
          this.setState({
            ...this.state,
            user: userInput.split("").map((num) => Number(num)),
          });
          this.baseballLogic.compareNums(this.state.user, this.state.computer);
        }
      },
    });

    this.baseballGenRandomNum = new BaseballGenRandomNum({
      initialState: this.state,
      changeComputerState: (randomNum) => {
        this.setState({ ...this.state, computer: randomNum });
      },
    });
  }

  setState(nextState) {
    this.state = nextState;
  }

  printHint({ ball, strike }) {
    if (ball || strike) {
      Console.print(
        (ball ? `${ball}볼` : "") + (strike ? `${strike}스트라이크` : "")
      );
    } else Console.print(INFO_MESSAGE.NOTHING_MESSAGE);
    strike === MAGIC_NUM.MAX_BASEBALL_NUM
      ? this.baseballInput.getRestartInput()
      : this.baseballInput.getUserInput();
  }
}

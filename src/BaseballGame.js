import BaseballInput from "./BaseballInput.js";
import BaseballGenRandomNum from "./BaseballGenRandomNum.js";
import { validateUserInput } from "./utils/inputValidator.js";

import { Console } from "@woowacourse/mission-utils";

export default class BaseballGame {
  state = {
    user: null,
    computer: null,
  };

  constructor() {
    this.baseballInput = new BaseballInput({
      initialState: this.state,
      changeUserState: (userInput) => {
        if (validateUserInput(userInput)) {
          this.setState({ ...this.state, user: userInput });
          console.log(`Baseball state 변경: `, this.state);
        }
      },
    });

    this.baseballGenRandomNum = new BaseballGenRandomNum({
      initialState: this.state,
      changeComputerState: (randomNum) => {
        this.setState({ ...this.state, computer: randomNum });
        console.log(`Baseball state 변경: `, this.state);
      },
    });
  }

  setState(nextState) {
    this.state = nextState;
  }
}

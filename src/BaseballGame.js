import BaseballInput from "./BaseballInput.js";
import { validateUserInput } from "./utils/inputValidator.js";

import { Console } from "@woowacourse/mission-utils";

export default class BaseballGame {
  state = {
    userInput: null,
    randomNum: null,
  };

  constructor() {
    this.baseballInput = new BaseballInput({
      initialState: this.state,
      changeUserInput: (userInput) => {
        if (validateUserInput(userInput)) {
          this.setState({ ...this.state, userInput });
          Console.print(this.state);
        }
      },
    });
  }

  setState(nextState) {
    this.state = nextState;
  }
}

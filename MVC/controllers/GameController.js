import { Console } from "@woowacourse/mission-utils";
import GameModel from "../models/GameModel.js";
import GameView from "../view/GameView.js";

class GameController {
  constructor() {
    this.model = new GameModel();
    this.view = new GameView();
  }

  handleUserAnswer(userInput) {
    const isValidLength = (userInput) => userInput.length !== 3;
    const isNumeric = (userInput) => isNaN(userInput);
    const isDuplicate = (userInput) => {
      return (
        userInput[0] === userInput[1] ||
        userInput[1] === userInput[2] ||
        userInput[0] === userInput[2]
      );
    };

    if (
      isValidLength(userInput) ||
      isNumeric(userInput) ||
      isDuplicate(userInput)
    ) {
      this.view.printError();
    }

    return userInput;
  }
}

export default GameController;

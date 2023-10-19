import { GAME_MESSAGE } from "../Util/Message.js";
import { OutputView } from "../View/OutputView.js";
import { InputView } from "../View/InputView.js";
import BaseballGame from "../Model/BaseballGame.js";

const GAME_OVER = GAME_MESSAGE.STRIKE(3);

class BaseballGameController{
  constructor(){
    this.baseballgame = new BaseballGame();
  }

  handlerInputbaseballNumber = (player_num) => {
    const turnOverResult = this.baseballgame.getTurnResultMessage(player_num);
    InputView.InputBaseBallNumber(this.handlerInputbaseballNumber);
  }

  baseballGameStart(){
    this.baseballgame.generateRandomNumber();
    OutputView.printMessage(GAME_MESSAGE.START);
    InputView.InputBaseBallNumber(this.handlerInputbaseballNumber);
  }  
}

export default BaseballGameController;
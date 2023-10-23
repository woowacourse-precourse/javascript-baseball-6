import { GAME_MESSAGE } from '../Util/Message.js';
import { OutputView } from "../View/OutputView.js";
import { InputView } from "../View/InputView.js";
import BaseballGame from "../Model/BaseballGame.js";

const GAME_OVER = GAME_MESSAGE.STRIKE(3);
const RESTART = '1';
const QUIT = '2';


class BaseballGameController{
  constructor(){
    this.baseballgame = new BaseballGame();
  }

  async bashballGameOver(){
    OutputView.printMessage(GAME_MESSAGE.GAMEOVER);
    await InputView.InputRestartOrQuit(this.handlerInputRestartOrQuit);
  }

  handlerInputRestartOrQuit = async (RestartOrQuit) => {
    if (RestartOrQuit === RESTART){
      this.baseballgame.generateRandomNumber();
      await InputView.InputBaseBallNumber(this.handlerInputbaseballNumber);
    }
  }

  handlerInputbaseballNumber = async (player_num) => {
    const turnOverResult = this.baseballgame.getTurnResultMessage(player_num);
    OutputView.printMessage(turnOverResult);
    if (turnOverResult === GAME_OVER) return this.bashballGameOver();
    await InputView.InputBaseBallNumber(this.handlerInputbaseballNumber);
  }

  async baseballGameStart(){
    this.baseballgame.generateRandomNumber();
    OutputView.printMessage(GAME_MESSAGE.START);
    await InputView.InputBaseBallNumber(this.handlerInputbaseballNumber);
  }  
}

export default BaseballGameController;
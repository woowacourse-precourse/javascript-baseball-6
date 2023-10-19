import { GAME_MESSAGE } from "../Util/Message.js";
import { OutputView } from "../View/OutputView.js";
import { InputView } from "../View/InputView.js";


class BaseballGameController{

  baseballNumberInput(){
    InputView.InputBaseBallNumber();
  }

  baseballGameStart(){
    OutputView.printMessage(GAME_MESSAGE.START);
    this.baseballNumberInput();
  }  
}

export default BaseballGameController;
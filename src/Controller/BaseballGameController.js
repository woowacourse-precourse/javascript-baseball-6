import { GAME_MESSAGE } from "../Util/Message.js";
import { OutputView } from "../View/OutputView.js";
import { InputView } from "../View/InputView.js";


class BaseballGameController{

  handlerInputbaseballNumber = (baseballNumber) => {
    InputView.InputBaseBallNumber(this.handlerInputbaseballNumber);
  }

  baseballGameStart(){
    OutputView.printMessage(GAME_MESSAGE.START);
    InputView.InputBaseBallNumber(this.handlerInputbaseballNumber);
  }  
}

export default BaseballGameController;
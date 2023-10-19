import { GAME_MESSAGE } from "../Util/Message.js";
import { OutputView } from "../View/OutputView.js";

class BaseballGameController{

  baseballGameStart(){
    OutputView.printMessage(GAME_MESSAGE.START);
  }  
}

export default BaseballGameController;
import { Console } from "@woowacourse/mission-utils";
import { GAME, RESULT } from "../static/Message.js";

class OutputView{
    intro() {
        Console.print(`${GAME.start}`);
    }
    exit() {
        Console.print(`${GAME.gameEnd}`);
    }
    result(score) {
        if(score[0]==0 && score[1]==0) Console.print(RESULT.nothing);
        else if(score[0]==3){
            Console.print(`${score[0]}${RESULT.strike}`);
            return 0;}
        else if(score[0]==0 && score[1]>0) Console.print(`${score[1]}${RESULT.ball}`);
        else if(score[0]>0 && score[1]==0) Console.print(`${score[0]}${RESULT.strike}`);
        else Console.print(`${score[1]}${RESULT.ball} ${score[0]}${RESULT.strike}`);
    }
    endGame() {
        Console.print(`${GAME.gameEnd}`);
    }
}
export default OutputView;
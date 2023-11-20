import { Console } from "@woowacourse/mission-utils";
import { GAME } from "../static/Message.js";

class OutputView{
    intro() {
        Console.print(`${GAME.start}`);
    }
    exit() {
        Console.print(`${GAME.gameEnd}`);
    }
    result(score) {
        if(score[0]==0 && score[1]==0){
            Console.print("낫싱");
        }else if(score[0]==3){
            Console.print(`${score[0]}스트라이크`);
        return 0;
        }else if(score[0]==0 && score[1]>0){
            Console.print(`${score[1]}볼`);
        }else if(score[0]>0 && score[1]==0){
            Console.print(`${score[0]}스트라이크`);
        }else{
            Console.print(`${score[1]}볼 ${score[0]}스트라이크`);
        }
    }
    endGame() {
        Console.print(`${GAME.gameEnd}`);
    }
}
export default OutputView;
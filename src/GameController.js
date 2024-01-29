import { Console, Random } from "@woowacourse/mission-utils"
import GameMessage from "./GameMessage.js";
class GameController {
    constructor (){
        this.message = new GameMessage();
    }

    makeRandomNumber(){
        const computer = [];
        while (computer.length < 3) {
            const number =  Random.pickNumberInRange(1, 9);
            if (!computer.includes(number)) {
                computer.push(number);
            }
        }
        return computer
    }

}

export default GameController
import { Console } from "@woowacourse/mission-utils";
import { GAME } from "../static/Message.js";

class OutputView{
    intro() {
        Console.print(`${GAME.start}`);
    }
}
export default OutputView;
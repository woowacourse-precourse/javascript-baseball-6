import { MissionUtils } from "@woowacourse/mission-utils";
import { BALL_RESULT_TEXT, GAME_PROGRESS_TEXT } from "../constant/constant.js";

class View {
    constructor() {}

    showInitialMessage() {
        MissionUtils.Console.print(GAME_PROGRESS_TEXT.GAME_START_MESSAGE);
    }
    
    showUserInput() {
        return MissionUtils.Console.readLineAsync(GAME_PROGRESS_TEXT.GAME_USER_INPUT_MESSAGE);
    }

    showResult(result) {
        const { strike, ball } = result;
        if (strike === 0 && ball === 0) {
            MissionUtils.Console.print(BALL_RESULT_TEXT.NOTHING);
            return;
        }

        const userInputResult = [];
        if (ball > 0) {
            userInputResult.push(ball + BALL_RESULT_TEXT.BALL);
        }
        if (strike > 0) {
            userInputResult.push(strike + BALL_RESULT_TEXT.STRIKE);
        }
        MissionUtils.Console.print(userInputResult.join(' '));
    }

    showEndMessage() {
        MissionUtils.Console.print(GAME_PROGRESS_TEXT.GAME_ANSWER_MESSAGE);
    }
}

export default View;
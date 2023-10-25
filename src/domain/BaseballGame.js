import { Spliter } from "../utils/Spliter.js";
import { Storage } from "../model/Storage.js";
import { OutputView } from "../OutputView.js";

export const BaseballGame = {
    gameResult(answer, tryNumber) {
        const tryNumberSplit = Spliter.splitNumber(tryNumber);
        Storage.strick = 0;
        Storage.ball = 0;
        for (let i = 0; i < tryNumberSplit.length; i++) {
            if (tryNumberSplit[i] === answer[i]) {
              Storage.strick++;
            } else if (tryNumberSplit[i] !== answer[i] 
                && answer.includes(tryNumberSplit[i])) {
                  Storage.ball++;
            } else {
                // 낫싱
            }
        }
        return OutputView.printResult(Storage.strick,Storage.ball);
      }
}
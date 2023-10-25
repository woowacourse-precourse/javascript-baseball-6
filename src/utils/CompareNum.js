import { Console } from "@woowacourse/mission-utils";
import Score from './Score';

export default async function compareNum(computerNum, userNum) {
    try {
        for (let i = 0; i < computerNum.length; i++) {
            if (userNum[i] === computerNum[i]) {
                Score.score.strike += 1;
            } else if (userNum.includes(computerNum[i])) {
                Score.score.ball += 1;
            }
        }
        if (Score.score.strike === 3) {
            Console.print('3스트라이크');
            Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
        } else if (Score.score.strike > 0 && Score.score.ball > 0) {
            Console.print(`${Score.score.ball}볼 ${Score.score.strike}스트라이크`);
        } else if (Score.score.strike > 0) {
            Console.print(`${Score.score.strike}스트라이크`);
        } else if (Score.score.ball > 0) {
            Console.print(`${Score.score.ball}볼`);
        } else {
            Console.print('낫싱');
        }
    } catch (error) {

    }
}
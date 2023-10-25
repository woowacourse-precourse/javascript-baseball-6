import { MissionUtils } from '@woowacourse/mission-utils';
import { MESSAGES } from './Constant.js';


// 세자리 숫자 클래스
class Numbers {
    constructor(numbersArray) {
        this.numbersArray = numbersArray ?? this.generateAnswer();
        this.first = this.numbersArray[0];
        this.second = this.numbersArray[1];
        this.third = this.numbersArray[2];
    }

    // 랜덤 배열 생성
    generateAnswer() {
        const answerArray = [];
        while (answerArray.length < 3) {
            const randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);
            if (!answerArray.includes(randomNumber)) {
                answerArray.push(randomNumber);
            }
        }
        return answerArray;
    }

    // 점수 계산
    count(target) {
        const score = [0, 0]; // [스트라이크, 볼]
        for (let i=0; i<this.numbersArray.length; i++) {
            if (this.numbersArray[i] === target.numbersArray[i]) {
            score[0]++;
            } else if (target.numbersArray.includes(this.numbersArray[i])) {
            score[1]++;
            }
        }
        return score;
        }

    // 점수 결과 메세지
    result(scoreArray) {
        if (scoreArray[0] === 0 && scoreArray[1] === 0) {
          MissionUtils.Console.print(MESSAGES.RESULT_NOTHING);
        } else if (scoreArray[1] === 0) {
          MissionUtils.Console.print(`${scoreArray[0]}${MESSAGES.RESULT_STRIKE}`);
        } else if (scoreArray[0] === 0) {
          MissionUtils.Console.print(`${scoreArray[1]}${MESSAGES.RESULT_BALL}`);
        } else {
          MissionUtils.Console.print(`${scoreArray[1]}${MESSAGES.RESULT_BALL} ${scoreArray[0]}${MESSAGES.RESULT_STRIKE}`);
        }
      }
}




export { Numbers };

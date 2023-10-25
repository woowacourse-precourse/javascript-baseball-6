import { MissionUtils } from "@woowacourse/mission-utils";

class Game {
  async runGame() {
    // 정답 만들기
    const answerArray = [];
    while (answerArray.length < 3) {
      const randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);

      if (!answerArray.includes(randomNumber)) {
        answerArray.push(randomNumber);
      }
    }
    // console.log(answerArray);

    let isGameOver = false;

    while (!isGameOver) {
      let strike = 0;
      let ball = 0;
      // 입력 받기 & 맞을 때까지 검증하기
      const input = await MissionUtils.Console.readLineAsync('숫자를 입력해주세요 : ');
      if (input.length !== 3) {
        throw new Error('[ERROR] 잘못된 형식입니다. 세 자리 숫자를 입력해주세요.');
      }
      
      const inputArray = input.split('').map(Number);
      // 숫자 3개가 모두 다른 숫자인지 검증하기
      if (inputArray[0] === inputArray[1] || inputArray[1] === inputArray[2] || inputArray[0] === inputArray[2]) {
        throw new Error('[ERROR] 잘못된 형식입니다. 세 자리 숫자는 각자 다른 숫자이어야 합니다.');
      }
      
      const inputStr = input.toString();
      inputStr.length === 3;

    //   console.log(inputArray);

      for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i] === answerArray[i]) {
          strike++;
        } else if (answerArray.includes(inputArray[i])) {
          ball++;
        }
      }

      if (strike === 3) {
        console.log(`${strike}스트라이크`);
        isGameOver = true;
      } else {
        if (ball === 0 && strike !== 0) {
          console.log(`${strike}스트라이크`);
        } else if (strike === 0 && ball !== 0) {
          console.log(`${ball}볼`);
        } else if (ball === 0 && strike === 0) {
          console.log('낫싱');
        } else {
          console.log(`${ball}볼 ${strike}스트라이크`);
        }
      }
    }
  }
}

export default Game;

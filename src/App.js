import { MissionUtils } from '@woowacourse/mission-utils';

class App {
  async play() {}

  // 랜덤한 숫자 3개를 생성
  createAnswerNumber() {
    const computerNumbers = [];
    while (computerNumbers.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computerNumbers.includes(number)) {
        computerNumbers.push(number);
      }
    }
    return computerNumbers;
  }

  // player 숫자 입력
  async getPlayerAnswer() {
    const playerAnswer = await MissionUtils.Console.readLineAsync('숫자를 입력해주세요 :');
    if (playerAnswer.length === 0) throw new Error('[ERROR] 입력값이 없습니다.');
    else {
      const verifiedPlayerAnswer = this.validatePlayerAnswer(playerAnswer);
      return verifiedPlayerAnswer;
    }
  }
  // player 숫자 validation
  validatePlayerAnswer(playerAnswer) {
    const playerAnswerArr = [...new Set(playerAnswer.split(''))].map(Number);

    if (playerAnswerArr.some((num) => Number.isNaN(num))) throw new Error('[ERROR] 숫자가 아닙니다.');
    if (playerAnswer.length !== 3) throw new Error('[ERROR] 3자리 숫자가 아닙니다.');
    if (playerAnswerArr.length !== 3) throw new Error('[ERROR] 중복된 숫자가 있습니다.');
    if (playerAnswerArr.some((num) => num < 1 || num > 9)) throw new Error('[ERROR] 1~9 사이의 숫자가 아닙니다.');

    return playerAnswerArr;
  }
}

export default App;

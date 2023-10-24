import { MissionUtils } from '@woowacourse/mission-utils';

class App {
  async play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    await this.startGame();
  }

  async startGame() {
    const computerAnswer = this.createAnswerNumber();
    let matchAnswer = false;
    do {
      const playerAnswer = await this.getPlayerAnswer();
      matchAnswer = this.compareAnswer(computerAnswer, playerAnswer);
    } while (!matchAnswer);
    await this.askRestart();
  }

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

  async getPlayerAnswer() {
    const playerAnswer = await MissionUtils.Console.readLineAsync('숫자를 입력해주세요 :');
    if (playerAnswer.length === 0) throw new Error('[ERROR] 입력값이 없습니다.');
    else {
      const verifiedPlayerAnswer = this.validatePlayerAnswer(playerAnswer);
      return verifiedPlayerAnswer;
    }
  }

  validatePlayerAnswer(playerAnswer) {
    const playerAnswerArr = [...new Set(playerAnswer.split(''))].map(Number);
    if (playerAnswerArr.some((num) => Number.isNaN(num))) throw new Error('[ERROR] 숫자가 아닙니다.');
    if (playerAnswer.length !== 3) throw new Error('[ERROR] 3자리 숫자가 아닙니다.');
    if (playerAnswerArr.length !== 3) throw new Error('[ERROR] 중복된 숫자가 있습니다.');
    if (playerAnswerArr.some((num) => num < 1 || num > 9)) throw new Error('[ERROR] 1~9 사이의 숫자가 아닙니다.');

    return playerAnswerArr;
  }

  compareAnswer(computer, player) {
    if (player.join('') === computer.join('')) {
      MissionUtils.Console.print('3스트라이크 \n 3개의 숫자를 모두 맞히셨습니다! 게임 종료');
      return true;
    } else {
      const ballCount = this.ball(computer, player);
      const strikeCount = this.strike(computer, player);
      if (ballCount === 0 && strikeCount === 0) MissionUtils.Console.print('낫싱');
      else if (ballCount > 0 && strikeCount === 0) MissionUtils.Console.print(`${ballCount}볼`);
      else if (strikeCount > 0 && ballCount === 0) MissionUtils.Console.print(`${strikeCount}스트라이크`);
      else if (strikeCount > 0 && ballCount > 0) MissionUtils.Console.print(`${ballCount}볼 ${strikeCount}스트라이크`);
      return false;
    }
  }

  ball(computer, player) {
    let ballCount = 0;
    for (const i in player) {
      if (computer[i] !== player[i] && computer.includes(player[i])) ballCount++;
    }
    return ballCount;
  }

  strike(computer, player) {
    let strikeCount = 0;
    for (const i in player) {
      if (computer[i] === player[i]) strikeCount++;
    }
    return strikeCount;
  }

  async askRestart() {
    const restart = await MissionUtils.Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.');
    if (restart === '1') {
      await this.startGame();
    } else if (restart === '2') {
      MissionUtils.Console.print('게임 종료');
    } else {
      throw new Error('[ERROR] 숫자 1이나 2만 입력 가능합니다.');
    }
  }
}

const app = new App();
app.play();

export default App;

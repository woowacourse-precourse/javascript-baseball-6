import { MissionUtils } from '@woowacourse/mission-utils';

class App {
  async play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    await this.setAnswer();
  }

  async setAnswer() {
    const computer = [];
    while(computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if(!computer.includes(number)) {
        computer.push(number);
      }
    }

    await this.playGame(computer);
  }

  async getInput() {
    const USER_INPUT = await MissionUtils.Console.readLineAsync('숫자를 입력해주세요 : ');
    if(
      USER_INPUT === null 
      || USER_INPUT.match(/\D/) 
      || USER_INPUT.length !== 3 
      || new Set(USER_INPUT).size !== 3
    ) {
      throw new Error('[ERROR] 숫자가 잘못된 형식입니다.');
    }

    return USER_INPUT;
  }

  calcScore(computer, user) {
    let S = 0;
    let B = 0;
    computer.forEach((elem, idx) => {
      if(user.indexOf(elem) == idx) S++;
      else if(user.includes(elem)) B++;
    });

    return { S, B };
  }

  getResult(S, B) {
    if (S !== 0) {
      if (B !== 0) return `${B}볼 ${S}스트라이크`;
        return `${S}스트라이크`;
    }
    if (B !== 0) {
      return `${B}볼`;
    }

    return '낫싱';
  }

  async playGame(computer) {
    const USER_INPUT = await this.getInput();
    const { S, B } = this.calcScore(computer, USER_INPUT);
    let result = this.getResult(S, B);
    MissionUtils.Console.print(result);

    if (S === 3) {
      MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
      const num = await MissionUtils.Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.');
      if (num === '1') {
        return this.setAnswer();
      } 
      if (num === '2') {
        return;
      } 
      throw new Error('[ERROR] 숫자가 잘못된 형식입니다.');
    }

    return await this.playGame(computer);
  }
}

export default App;
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

  async playGame(computer) {
    const USER_INPUT = await MissionUtils.Console.readLineAsync('숫자를 입력해주세요 : ');
    let result = '';

    if(USER_INPUT === null || USER_INPUT.match(/\D/) || USER_INPUT.length !== 3 || new Set(USER_INPUT).size !== 3){
      throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
    }

    const { S, B } = this.calcScore(computer, USER_INPUT);

    if (S !== 0) {
      if (B !== 0) result = `${B}볼 ${S}스트라이크`;
      else result = `${S}스트라이크`;
    } else if (B !== 0) result = `${B}볼`;
    else result ='낫싱';

    MissionUtils.Console.print(result);
    
    if (S === 3) {
      MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
      const num = await MissionUtils.Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n'); 
      if (num === '1') {
        this.setAnswer();
      } else if (num === '2') {
        MissionUtils.Console.print('프로그램 종료');
      }
    } else {
      await this.playGame(computer);
    }
  }

  calcScore(computer, input) {
    let S = 0, B = 0;
    computer.forEach((elem, idx) => {
      if(input.indexOf(elem) == idx) S++;
      else if(input.includes(elem)) B++;
    });
    return { S, B };
  }
}



export default App;
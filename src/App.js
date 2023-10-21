import { MissionUtils } from '@woowacourse/mission-utils';

class App {
  async play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    await this.generateAnswer();
  }

  async generateAnswer() {
    let answer = '';
    while (answer.length < 3) {
      const randomNum = MissionUtils.Random.pickNumberInRange(1, 9).toString();
      if (!answer.includes(randomNum)) answer += randomNum;
    }
    await this.playGame(answer);
  }

  async playGame(answer) {
    const value = await MissionUtils.Console.readLineAsync('숫자를 입력해주세요 : ');
    let result = '';

    if(value.length !== 3 || new Set(value).size!==3 || value.split('').every(element => {
      const num = parseInt(element);  
      return (9 < num || num < 1)
    })){
      throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
    }

    const { s, b } = this.calculateScore(answer, value);

    if (s !== 0) {
      if (b !== 0) result = `${b}볼 ${s}스트라이크`;
      else result = `${s}스트라이크`;
    } 
    else if (b !== 0) result = `${b}볼`;
    else result ='낫싱';

    MissionUtils.Console.print(result);
    
    if (s === 3) {
      MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
      const choice = await MissionUtils.Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n'); 
      if (choice === '1') {
        this.generateAnswer();
      } else if (choice === '2') {
        MissionUtils.Console.print('프로그램 종료');
      }
    } else {
      await this.playGame(answer);
    }
  }

  calculateScore(answer, value) {
    let s = 0, b = 0;
    for (let i = 0; i < 3; i++) {
      if (answer[i] === value[i]) {
        s++;
      } else if (answer.includes(value[i])) {
        b++;
      }
    }
    return { s, b };
  }
}

export default App;
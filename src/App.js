import { Console, Random } from '@woowacourse/mission-utils';

class App {
  async play() {
    this.notifyGameStart();
    while(1) {
      const computer = this.makeRamdomNumber();
      const number = await this.getUserNumber();
      this.compareUserAndRamdomNumber(number, computer);
      const executeCondition = await this.notifyGameEnd();
      this.isExecuteGame(executeCondition);
    }
  }

  notifyGameStart() {
    Console.print('숫자 야구 게임을 시작합니다.');
  }

  makeRamdomNumber() {
    const computer = [];
    while (computer.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer//.join('');
  }

  async getUserNumber() {
    try {
      const input = await Console.readLineAsync('숫자를 입력해주세요 : ');
      //input 잘못 입력 안했는지 확인해야함
      return input.split('');
    } catch (error) {
      throw new Error('reject');
    }
  }

  compareUserAndRamdomNumber(input, computer) {
    /* 실패일 때, 힌트 출력 후 숫자 입력받기 */
    let strike = 0;
    let ball = 0;
    let nothing = 0;
    let hint = '';
    console.log('compareUserAndRamdomNumber');
    // 스트라이크 확인
    computer.forEach((number, index) => {
      if (number === input[index]) { // 스트라이크
        console.log('number', number, 'input[index]', input[index]);
        strike += 1;
      }
    });
    hint += `${strike}스트라이크 `;

    /*if () { // 볼

    } else if () { // 낫싱

    }*/
    Console.print(hint);

    // 성공일때 return this.notifyGameEnd();
  }



  async notifyGameEnd() {
    Console.print('3스트라이크');
    Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
    Console.print('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.');
    
    try {
      const input = await Console.readLineAsync('');
      return input;
    } catch (error) {
      throw new Error('reject');
    }
  }

  isExecuteGame(input) {
    if (input === '1') {
      return this.getUserNumber();
    } else if (input === '2') {
      return;
    } else {
      throw new Error('게임 실행 조건을 잘못 입력하셨습니다.');
    }
  }
}

const app = new App();
//app.play();
app.compareUserAndRamdomNumber(['1','2','3'], ['1', '2', '9']);
export default App;
import { MissionUtils, Console } from "@woowacourse/mission-utils";

class App {
  async play() { // 게임 실행
    Console.print("숫자 야구 게임을 시작합니다. ");

    while ( 
      await this.getUserNum(this.getRandomNum())
    );
  }

  getRandomNum() { // 서로 다른 임의의 수 생성
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)){
        computer.push(number);
      }
    }
    return computer;
  }


  async getUserNum(random) { // 사용자로부터 입력
    while (true) {
      const input = await Console.readLineasync('숫자를 입력해주세요 : ').split(' ').join('').split('').map(Number);

      if (input.length !== 3 || input.some((n) => !Number.isInteger(n))) {
        throw new Error('[ERROR] 입력값이 유효하지 않습니다.');
      }
    }
    
    const [strike, ball] = this.CompareNum(input, random);
    this.printResult(strike, ball);
  }

  CompareNum(input, random) { // 입력받은 수와 일치여부 확인
    let ball = 0;
    let strike = 0;
    
    for (let i = 0; i < 3 ; i++) {
      if (input[i] === random[i]) {
        strike++;
      }
      else if (random.includes(input[i])) {
        ball++;
      }
    }

    return [strike, ball];
  }

  printResult(strike, ball) {
    if (ball === 0 && strike === 0) {
      Console.print('낫싱');
    }
    else if (strike === 0) {
      Console.print('${ball}볼');
    }
    else if (ball === 0) {
      Console.print('${strike}스트라이크');
    }
    else {
      Console.print('${ball}볼 ${strike}스트라이크');
    }
  }
}


const app = new App();
Console.log(app.computer);
app.play();

export default App;

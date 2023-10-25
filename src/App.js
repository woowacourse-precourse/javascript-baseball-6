import { MissionUtils, Console } from "@woowacourse/mission-utils";

class App {

  constructor() {
    this.computer = this.getRandomNum();
    this.running = True;
  }
  
  async play() { // 게임 실행
    Console.print("숫자 야구 게임을 시작합니다. ");

    while (this.running) {
      await this.getUserNum(this.getRandomNum())
    }

    const [strike, ball] = this.CompareNum(input, random);
    this.printResult(strike, ball);
    
    if (strike === 3) {
      this.running = False;
      Console.print('$3개의 숫자를 모두 맞히셨습니다! 게임 종료');
      await this.Replay();
    }
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

  printResult(strike, ball) { // 결과 출력
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

  async Replay() { // 재시작 여부 확인
    const answer = await Console.readLineasync("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");
    if (answer === "1"){
      this.computer = this.getRandomNum();
      this.isGameRunning = True;
      this.play();
    }
    else if (answer === "2") {
      Console.print("게임을 종료합니다.");
    }
    else {
      Console.print("잘못된 값입니다. 게임이 종료됩니다.");
    }
  }
}
export default App;

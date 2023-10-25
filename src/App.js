import * as MissionUtils from '@woowacourse/mission-utils';
class App {
  async play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.")
    let NEW_GAME = true;

    while(NEW_GAME) {
      const COMPUTER = this.generateComputerNumber();
      console.log(COMPUTER);

      while (true){
        const USER_INPUT = await this.getUserInput();
          if (isNaN(USER_INPUT)) {
            throw new Error("[ERROR] 숫자를 입력해주세요")
          }
          else if (USER_INPUT.length !=3) {
            throw new Error("[ERROR] 3자리의 숫자를 입력하세요")
          }
          else if (new Set(USER_INPUT).size !== 3) {
            throw new Error("[ERROR] 서로 다른 숫자를 입력하세요")
          }else {
            const RESULT = this.calculateResult(COMPUTER, USER_INPUT);
            MissionUtils.Console.print(RESULT);

            if (RESULT === '3스트라이크') {
              MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료')
              break;
            }
          }
      }
      NEW_GAME = await this.startNewGame();
    }
  }
  generateComputerNumber() {
    const COMPUTER = [];
    while (COMPUTER.length<3){
      const NUMBER = MissionUtils.Random.pickNumberInRange(1,9);
      if (!COMPUTER.includes(NUMBER)) {
        COMPUTER.push(NUMBER);
      }
    }
    return COMPUTER.join('');
  }
  async getUserInput() {
    return await MissionUtils.Console.readLineAsync('숫자를 입력해주세요 : ')
  }
  calculateResult(COMPUTER, USER_INPUT) {
    let STRIKES = 0;
    let BALLS = 0;
    for (let i=0; i<3; i++){
      if (COMPUTER[i] === USER_INPUT[i]) {
        STRIKES++;
      }else if (COMPUTER.includes(USER_INPUT[i])) {
        BALLS++;
      }
    }
    if (STRIKES === 0 && BALLS === 0) {
      return '낫싱';
    }
    return `${BALLS > 0 ? `${BALLS}볼 ` : ''}${STRIKES > 0 ? `${STRIKES}스트라이크` : ''}`;
  }
  async startNewGame() {


    const CHOICE = await MissionUtils.Console.readLineAsync(
      '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요. \n'
    );
    return CHOICE === '1';
  }
}
const app = new App();
app.play();
export default App;

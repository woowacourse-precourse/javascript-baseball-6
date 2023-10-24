const MissionUtils = require('@woowacourse/mission-utils');
const Messages = require('./constants/Messages');

class App {

  async play() {
    // 서로 다른 임의의 3자리 숫자 생성
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    // 게임 시작시 메세지 출력
    MissionUtils.Console.print(Messages.START);

    // 사용자 숫자 입력
    MissionUtils.Console.readLine(Messages.INPUT_NUMBER, (number) => {
      const numberRegExp = new RegExp(/[0-9]/g);
      const numSet = new Set(number);
      
      if (number.length !== 3 || !numberRegExp.test(number)) {
        throw new Error(Messages.ERROR.NUMBER_RANGE);
      } else if (numSet.size < 3) {
        throw new Error(Messages.ERROR.DUPLICATE_NUMBER);
      } else {

      }
    });
  }
}
let app = new App();
app.play();


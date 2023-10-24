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
    this.inputUser(computer);
  }
  
  inputUser(computer){
    MissionUtils.Console.readLine(Messages.INPUT_NUMBER, (number) => {
      const numberRegExp = new RegExp(/[0-9]/g);
      const numSet = new Set(number);
      
      if (number.length !== 3 || !numberRegExp.test(number)) {
        throw new Error(Messages.ERROR.NUMBER_RANGE);
      } else if (numSet.size < 3) {
        throw new Error(Messages.ERROR.DUPLICATE_NUMBER);
      } else {
        //힌트 구하기
        const checkCount = [0, 0, 0];
        const splitedNumbers = number.split('').map(Number);
        splitedNumbers.forEach((splitedNumber, index) => {
          if (computer[index] === splitedNumber) checkCount[0]++;
          else if (computer.includes(splitedNumber)) checkCount[1]++;
          else checkCount[2]++;
        });

        let result = '';
        const [strike, ball, out] = checkCount;
        if (ball > 0) result += `${ball}볼 `;
        if (strike > 0) result += `${strike}스트라이크`;
        if (out === 3) result += `낫싱`;
        MissionUtils.Console.print(result);

        if (strike !== 3) this.inputUser(computer);
      }
    });
  }
}
const app = new App();
app.play();

module.exports= App;
import { Console, MissionUtils } from '@woowacourse/mission-utils';

let sameNumCnt = 0;
let strikeCnt = 0;

class App {
  async play() {
    Console.print('숫자 야구 게임을 시작합니다.');
    let computer = generateRandomNumber();

    outerLoop: while (true) {
      let inputNumber = await Console.readLineAsync('숫자를 입력해주세요 : ');

      if (isNotValidInputNumber(inputNumber))
        throw new Error('[ERROR] 숫자가 잘못된 형식입니다.');
      for (let i = 0; i < inputNumber.length; i++) {
        countBallAndStrikeNum(inputNumber[i], computer, i);

        if (strikeCnt === 3) {
          Console.print(
            '3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료'
          );
          let isStopGame = await Console.readLineAsync(
            '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.'
          );
          if (isStopGame === '1') {
            computer = generateRandomNumber();
            sameNumCnt = 0;
            strikeCnt = 0;
            break;
          } else if (isStopGame === '2') break outerLoop;
        } else if (i === 2) {
          printResult(strikeCnt, sameNumCnt);
        }
      }
    }
  }
}

const generateRandomNumber = () => {
  const computer = [];
  while (computer.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!computer.includes(number)) {
      computer.push(number);
    }
  }
  return computer;
};

const isNotValidInputNumber = (inputNumber) => {
  if (inputNumber.length !== 3) return true;
  if (!/[0-9]/.test(inputNumber)) return true;
};

const countBallAndStrikeNum = (inputNumber, computer, i) => {
  if (computer.includes(Number(inputNumber))) {
    sameNumCnt++;
    if (computer[i] === Number(inputNumber)) {
      strikeCnt++;
    }
  }
};

const printResult = (strikeCnt, sameNumCnt) => {
  let result = '';
  if (sameNumCnt - strikeCnt > 0) {
    result += `${sameNumCnt - strikeCnt}볼 `;
  }
  if (strikeCnt > 0) {
    result += `${strikeCnt}스트라이크`;
  }
  if (result.length === 0) result += '낫싱';
  Console.print(result);
};

const app = new App();
app.play();

export default App;

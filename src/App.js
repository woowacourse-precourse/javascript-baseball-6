import { Console, MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    Console.print('숫자 야구 게임을 시작합니다.');

    const answerNumberArray = generateAnswerNumber(); // 정답 숫자 생성

    let userInputNumberArray = [];

    try {
      const userInputNumber = await Console.readLineAsync('숫자를 입력해주세요: ');
      userInputNumberArray = validateInputNumber(userInputNumber);
    } catch (error) {
      Console.print('[ERROR] ' + error.message + ' 게임 종료');
    }
  }
}

export default App;

function generateAnswerNumber() { // 정답 숫자 배열 생성
  const numbers = [];
  while (numbers.length < 3) {
    const n = MissionUtils.Random.pickNumberInRange(1, 9);

    if (!numbers.includes(n)) {
      numbers.push(n)
    }
  }

  return numbers;
}

function validateInputNumber(input) { // 입력값 예외 처리 후 숫자 배열로 만들어 리턴
  if (input.length !== 3) {
    throw new Error('입력값의 길이가 3이 아닙니다.');
  }

  if (!/^[1-9]+$/.test(input)) {
    throw new Error('입력값에 0이 있거나 숫자가 아닌 값이 있습니다.');
  }

  const duplicateCheckSet = new Set(input.split(''));
  if (duplicateCheckSet.size !== 3) {
    throw new Error('입력값 중 같은 숫자가 존재합니다.')
  }

  return input.split('').map(str => parseInt(str, 10));
}

const app = new App();
app.play();
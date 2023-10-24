import { MissionUtils } from "@woowacourse/mission-utils";


class App {
  async play() {

    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');

    let ComputerAnswer = generateAnswerNumber();

    console.log(ComputerAnswer);

  }
}

async function getUserAnswer() {
  try {
    const username = await MissionUtils.Console.readLineAsync('숫자를 입력해주세요 : ');
  } catch (error) {
    // reject 되는 경우
  }
};

function generateAnswerNumber() {
  const answer = [];
  while (answer.length < 3) {
    const randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!answer.includes(randomNumber)) {
      answer.push(randomNumber);
    }
  }
  return answer;
};

export default App;

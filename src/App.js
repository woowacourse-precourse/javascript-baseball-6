import { MissionUtils } from '@woowacourse/mission-utils';

class App {
  async play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    const answer = generateAnswer();
    onUserGuessInput(answer);
  }
}

const app = new App();
app.play();

function generateAnswer() {
  const answer = [];
  while(answer.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if(!answer.includes(number)) {
      answer.push(number)
    }
  }

  console.log(answer);
  return answer;
}

async function onUserGuessInput(answer) {
  const input = await MissionUtils.Console.readLineAsync("숫자를 입력해주세요 : ");

  isCheckValidation(input)

  const { strike, ball } = compareAnswer(input, answer);

  console.log(strike, ball);
}

function compareAnswer(guess, answer) {
  let strike = 0, ball = 0;

  for(let i = 0; i < answer.length; i++) {
    if(+guess[i] === +answer[i]) {
      strike += 1
    } else if(guess.includes(+answer[i])) {
      ball += 1
    }
  }

  return { strike, ball };
}

function isCheckValidation(input) {
  if(new Set(input).size !== 3) {
    throw new Error('중복된 숫자를 입력할 수 없습니다.')
  }
  if(input.length !== 3) {
    throw new Error('3자리의 숫자를 입력해야 합니다.')
  }
  if(input.includes(0)) {
    throw new Error('숫자 0이 포함되면 안됩니다.')
  }
}


export default App;

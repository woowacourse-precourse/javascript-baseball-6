import { Console, Random } from "@woowacourse/mission-utils";

// 정답이 되는 숫자 만들기
function generateRandomNumber() {
  const answer = [];
  while (answer.length < 3) {
    const number = Random.pickNumberInRange(1, 9);
    if (!answer.includes(number)) {
      answer.push(number);
    }
  }
  return answer;
}

// 숫자 입력, 입력한 숫자가 형식에 맞는지 검사하기
async function checkRightFormat() {
  const userInput = await Console.readLineAsync("숫자를 입력해주세요 : ");

  if (!/^[1-9]{3}$/.test(Number(userInput))) {
    throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
  }

  return userInput.split('').map(Number)
}


// 정답이 되는 숫자와 입력한 숫자를 비교하기
function checkNumbers(userInput, answer) {
  let strikes = 0;
  let balls = 0;

  for (let i = 0; i < 3; i++) {
    if (userInput[i] === answer[i]) {
      strikes += 1;
    } else if (answer.includes(userInput[i])) {
      balls += 1;
    }
  }

  return { balls, strikes };
}

// 비교하여 나온 결과값을 출력하기
function printChecked(balls, strikes) {
  if (balls !== 0 && strikes !== 0) {
    Console.print(`${balls}볼 ${strikes}스트라이크`);
  }
  if (balls !== 0) {
    Console.print(`${balls}볼`);
  }
  if (strikes !== 0) {
    Console.print(`${strikes}스트라이크`);
  } else { Console.print('낫싱') }
}

// 게임 실행 제어

class App {
  async play() {
  }
}

export default App;

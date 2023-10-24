import { Console, Random } from "@woowacourse/mission-utils";

// 랜덤으로 정답이 되는 숫자 생성
function generateRandomNumber() {
  const answer = [];
  while (answer.length < 3) {
    const number = Random.pickNumberInRange(1, 9);
    if (!answer.includes(number)) {
      answer.push(number);
    }
  }
  return computer;
}

// 




class App {
  async play() {

  }
}

export default App;

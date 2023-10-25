import { Console, Random } from "@woowacourse/mission-utils";

function randomNumber() {
  const randomNumbers = [];
  for (let i = 0; i < 3; i++) {
    // 3개의 숫자
    const randomNumber = Random.pickNumberInRange(1, 9); // 1 ~ 9의 범위
    if (randomNumbers.includes(randomNumber) != true) {
      // 서로 다른 3개의 숫자가 되도록
      randomNumbers.push(randomNumber);
    }
  }
  return randomNumbers;
}

class App {
  async play() {
    Console.print("숫자 야구 게임을 시작합니다."); // 게임 시작 문구
    let randaomNumbers = randomNumber(); // 컴퓨터의 숫자 3개 생성
    Console.print(randaomNumbers);
  }
}

const app = new App();
app.play();

export default App;

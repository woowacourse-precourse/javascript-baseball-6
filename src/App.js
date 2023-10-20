import { MissionUtils } from "@woowacourse/mission-utils";

// 컴퓨터가 3개의 난수 배열을 생성하는 함수
const getComputerNumber = () => {
  const computer = [];
  while (computer.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!computer.includes(number)) {
      computer.push(number);
    }
  }
  return computer;
};

// 플레이어에게 숫자를 입력받는 함수
const readFromPlayer = () => {
  return new Promise((resolve) => {
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (answer) => {
      resolve(readToList(answer));
    });
  });
};

// 입력받은 숫자를 리스트 형식으로 반환하는 함수
const readToList = (answer) => {
  const arr = [...answer].map(Number);
  return arr;
};

class App {
  async play() {
    MissionUtils.Console.print(getComputerNumber());
    MissionUtils.Console.print(await readFromPlayer());
  }
}

MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
const app = new App();
app.play();

export default App;

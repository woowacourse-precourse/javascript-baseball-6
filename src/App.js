import { Console, MissionUtils } from "@woowacourse/mission-utils";

const input = async function getInput(script) {
  //입력받기
  const input = await Console.readLineAsync(script);
  return input;
};

const cal = async function calculation() {
  //숫자야구 알고리즘 구현
  let CPUnum = randomNum();

  while (1) {
    let restart = 0;
    const inputNum = await input("숫자를 입력해주세요 : ");
    const notDuplicateInput = new Set(inputNum);

    if (inputNum.length !== notDuplicateInput.size || inputNum.length !== 3)
      throw Error("[ERROR] 숫자가 잘못된 형식입니다");

    // if (input === 0) continue;
    let strike = 0;
    let ball = 0;
    for (let i = 0; i < 3; i += 1) {
      for (let j = 0; j < 3; j += 1) {
        if (parseInt(inputNum[i]) === CPUnum[j]) {
          if (i === j) strike += 1;
          else if (i !== j) ball += 1;
        }
      }
    }
    if ((strike === 0) & (ball === 0)) Console.print("낫싱");
    else if ((strike !== 0) & (ball !== 0))
      Console.print(`${ball}볼 ${strike}스트라이크`);
    else if (strike === 0) Console.print(`${ball}볼`);
    else if (ball === 0) {
      Console.print(`${strike}스트라이크`);
      if (strike === 3) {
        Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
        Console.print("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");

        restart = await input("");

        if (restart === "2") break;

        CPUnum = randomNum();
      }
    }
  }
};
const randomNum = function getRandom() {
  // 컴퓨터가 입력하는 숫자
  const computer = [];
  while (computer.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!computer.includes(number)) {
      computer.push(number);
    }
  }
  return computer;
};
class App {
  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");

    await cal();
  }
}

export default App;

const app = new App();

app.play();

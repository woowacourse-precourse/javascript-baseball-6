import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {}
}

function getUserNumber() {
  console.log(
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (input) => {
      console.log(`입력한 숫자 : ${input}`);
    })
  );
}

function getComputerNumber() {
  const computerNumber = Array.from({ length: 3 }, () =>
    MissionUtils.Random.pickNumberInRange(1, 9)
  ).join("");
  console.log(`컴퓨터가 생성한 숫자 : ${computerNumber}`);
  return computerNumber;
}

export default App;

console.log(MissionUtils.Console.print("숫자 야구 게임을 시작합니다."));
getUserNumber();
getComputerNumber();

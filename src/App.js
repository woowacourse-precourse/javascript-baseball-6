import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    // 게임 시작 문구
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    // 사용자 입력 받기 전, 컴퓨터 랜덤 숫자 생성

    const computer = getComputerNum();
    console.log("COM", computer);
    // 사용자 입력 받기
    const playerInput = await MissionUtils.Console.readLineAsync(
      "숫자를 입력해주세요 : "
    );
    // 사용자 입력 값이 정상인지 검사
    try {
      const player = checkPlayerInput(playerInput);
    } catch (error) {
      console.error("[ERROR] " + error.message);
    }
  }
}

const getComputerNum = () => {
  // 1. 1 ~ 9 사이어야 함.
  // 2. 서로 다른 3자리의 수여야 함.
  let computerNum = [];
  while (computerNum.length < 3) {
    const randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!computerNum.includes(randomNumber)) {
      computerNum = [...computerNum, randomNumber];
    }
  }
  return computerNum;
};

const checkPlayerInput = (input) => {
  if (isNaN(input)) {
    throw new Error("입력은 숫자만 가능합니다.");
  }

  if (input.length !== 3) {
    console.log("개수 문제!");
    throw new Error("3자리의 숫자를 입력해주세요.");
  }

  if (input.includes("0")) {
    console.log("0 포함!");
    throw new Error("1이상 9이하 숫자로 구성해주세요.");
  }

  const inputNum = input.split("").map(Number);
  const inputSet = new Set(inputNum);

  if (inputSet.size < 3) {
    console.log("중복된 값 있음");
    throw new Error("중복되지 않는 숫자로 구성해주세요.");
  }
  console.log("test", inputSet);
  return inputNum;
};

const app = new App();
app.play();

export default App;

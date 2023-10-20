import { MissionUtils } from "@woowacourse/mission-utils";

let COUNT = 0;

const comparePitches = async (numbers) => {
  // const randomNumber = await MissionUtils.Random.pickNumberInRange(111, 999);
  // err: 랜덤 숫자가 생성 안됨. 계속 1임. 라이브러리 코드 사용
  const computer = [];
  while (computer.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!computer.includes(number)) {
      computer.push(number);
    }
  }
  console.log(computer);
  console.log(numbers.split("").map((e) => +e));
  for (let i = 0; i < 3; i++) {}
};

const inputPitches = async () => {
  try {
    const userInput = await MissionUtils.Console.readLineAsync(
      "숫자를 입력해주세요 :"
    );
    MissionUtils.Console.print(`숫자를 입력해주세요 : ${userInput}`);
    comparePitches(userInput);
  } catch (error) {
    console.log(error);
  }
};

const init = () => {
  MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
  inputPitches();
};

export default init;

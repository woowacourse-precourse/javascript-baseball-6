import { MissionUtils } from "@woowacourse/mission-utils";

let COUNT = 0;

const comparePitches = (numbers) => {
  const randomNumber = MissionUtils.Random.pickNumberInRange();
  for (let i = 0; i < 3; i++) {}
};

const inputPitches = async () => {
  try {
    const userInput = await MissionUtils.Console.readLineAsync(
      "숫자를 입력하세요:"
    );
    MissionUtils.Console.print(`입력받은 userInput: ${userInput}`);
  } catch (error) {
    console.log(error);
  }
};

const init = () => {
  MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
  inputPitches();
};

export default init;

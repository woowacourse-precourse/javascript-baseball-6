import { MissionUtils } from "@woowacourse/mission-utils";


function generateComputeNum(){
  const computerNum = [];
  while (computer.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!computerNum.includes(number)) {
      computerNum.push(number);
    }
  }
  return computerNum;
}

class App {
  async play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');

    let computerNum = generateComputeNum();
    MissionUtils.Console.print(c_num);
  }
}

export default App;

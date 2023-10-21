import { MissionUtils } from "@woowacourse/mission-utils";

const GameStartPage = () => {
  const computer = [];

  while (computer.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!computer.includes(number)) {
      computer.push(number);
    }
  }

  Console.print('숫자 야구 게임을 시작합니다.');


  return {
    
  };
}

export default GameStartPage;
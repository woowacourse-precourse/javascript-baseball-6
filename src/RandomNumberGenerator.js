import { MissionUtils } from "@woowacourse/mission-utils";

function randomNumbers(Ball_Size, ballMinSize, ballMaxSize) {
    let Numbers = [];
    while (Numbers.length < Ball_Size) {
      const NUM = MissionUtils.Random.pickNumberInRange(ballMinSize, ballMaxSize);
      if (!Numbers.includes(NUM)) {
        Numbers.push(NUM);
      }
    }
    return Numbers
}

export default randomNumbers